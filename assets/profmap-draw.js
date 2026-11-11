// 논문 노선도 그리기: 노선도, 역마다 교수님 논문 원, 노선 고르기, 교수님 고르기, PNG 저장. 배치는 profmap-layout.js(서재 코드)
// 바탕(노선, 역, 이름표, 교수님 줄)은 한 번만 그리고, 고를 때는 class와 덧그림(ov)만 바꾼다. 그래야 흐려짐과 나타남이 부드럽게 움직인다.
(function () {
  'use strict';
  const PM = window.PROFMAP, LY = window.__PM_LAYOUT;
  const { metroLayout, placeLabels, roundedPath, inkColor, RS, RX, LBY, STATION_LINES } = LY;
  const BY = PM.papers, LINES = PM.lines;
  const OTHER = { id: 'other', name: '노선 밖', color: '#a3a4a9' };
  const LINE = id => id === 'other' ? OTHER : LBY[id];
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const NS = 'http://www.w3.org/2000/svg';

  const FONT_URL = 'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/woff2/PretendardVariable.woff2';
  const FAM = '"PM Pretendard", "Pretendard Variable", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans CJK KR", "Noto Sans KR", sans-serif';
  let fontBuf = null;
  async function loadFont() {
    try {
      const r = await fetch(FONT_URL);
      if (!r.ok) throw new Error(r.status);
      fontBuf = await r.arrayBuffer();
      const ff = new FontFace('PM Pretendard', fontBuf, { weight: '100 900' });
      await ff.load();
      document.fonts.add(ff);
    } catch (e) { fontBuf = null; }
  }
  const cv = document.createElement('canvas').getContext('2d');
  const tw = (t, size, wt) => { cv.font = wt + ' ' + size + 'px ' + FAM; return cv.measureText(t).width; };

  const PROFS = PM.profs.map((p, i) => ({ ...p, i }));
  const LINE_ORDER = {};
  LINES.forEach((l, i) => LINE_ORDER[l.id] = i);
  LINE_ORDER.other = 99;

  // 학과 고르기와 이름 찾기. 노선도의 원, 노선을 고를 때 나오는 이름표, 오른쪽 목록이 모두 이 범위를 따른다
  const DEPTS = ['인공지능학과', '컴퓨터학과', '뇌공학과'].filter(d => PROFS.some(p => p.dept === d))
    .concat([...new Set(PROFS.map(p => p.dept))].filter(d => !['인공지능학과', '컴퓨터학과', '뇌공학과'].includes(d)));
  const flt = { dept: null, q: '' };
  const norm = t => String(t || '').toLowerCase().replace(/[\s().,-]/g, '');
  const inDept = p => !flt.dept || p.dept === flt.dept;
  const inQuery = p => !flt.q || [p.name, p.en, p.lab].some(t => norm(t).includes(norm(flt.q)));
  const shown = p => inDept(p) && inQuery(p);
  const onMap = p => p.papers.filter(w => w.line !== 'other').length;
  // 역마다 가까운 교수님 논문: { slug: [{p, w}] }. 학과를 고르면 그 학과 교수님만 센다
  function nearBy(filter) {
    const m = {};
    PROFS.forEach(p => inDept(p) && p.papers.forEach(w => { if (w.near && filter(p, w)) (m[w.near] = m[w.near] || []).push({ p, w }); }));
    return m;
  }
  const haloR = n => 12 + 6.5 * Math.sqrt(n);
  // 최근 3년 역: 2024년 이후 논문. 노란 역으로 칠하고 '최근 3년' 고르기로 따로 볼 수 있다
  const RECENT_FROM = 2024;
  const isRecent = s => (BY[s] && BY[s].y) >= RECENT_FROM;
  const RECENT = Object.keys(BY).filter(isRecent);
  const RECENT_NAME = '최근 3년(' + RECENT_FROM + '~)';

  const MAPW = 1880, PAD = 28, W = MAPW + PAD;
  let geo = null;           // 바탕을 그릴 때 정한 자리
  let mode = null;          // null, {line}, {prof}, {recent}

  function drawBase() {
    const M = metroLayout(MAPW);
    const labels = M.stations.slice().sort((a, b) => a.layer - b.layer || a.y - b.y).map(s => {
      const p = BY[s.slug];
      const wn = tw(p.l, 13, 600), wy = tw(String(p.y), 11.5, 500);
      const w = Math.ceil(6 + wn + 4 + wy + 6), h = 24, x = s.x, yy = s.y, hh = s.hh, m = 5;
      const upFirst = s.layer % 2 === 0, cands = [];
      const span = Math.max(0, w / 2 - 12), offs = [0];
      for (let d = 10; d < span; d += 10) offs.push(d, -d);
      if (span > 0) offs.push(span, -span);
      [[yy - hh - m - h, upFirst ? 0 : 6, 'up'], [yy + hh + m, upFirst ? 6 : 0, 'down'],
       [yy - hh - m - h - 12, 26, 'up2'], [yy + hh + m + 12, 26, 'down2']].forEach(([top, base, kind]) =>
        offs.forEach(dx => cands.push([[x - w / 2 + dx, top, x + w / 2 + dx, top + h], base + (span ? 18 * Math.abs(dx) / span : 0), kind])));
      [[yy, 30], [yy - 10, 34], [yy + 10, 34]].forEach(([cy, base]) => {
        cands.push([[x + RX + 6, cy - h / 2, x + RX + 6 + w, cy + h / 2], base, 'right']);
        cands.push([[x - RX - 6 - w, cy - h / 2, x - RX - 6, cy + h / 2], base, 'left']);
      });
      return { s, w, h, cands, lw: 40, multi: STATION_LINES[s.slug].length > 1 };
    });
    const tags = M.lines.map(L => {
      const wn = tw(L.l.name, 12, 700), w = Math.ceil(9 + wn + 9), h = 22;
      const main = L.polys[0], e = main[main.length - 1], s0 = main[0];
      const lastSt = M.stations.find(s => s.slug === L.last), firstSt = M.stations.find(s => s.slug === L.first);
      const cands = [
        [[e[0] + 22, e[1] - h / 2, e[0] + 22 + w, e[1] + h / 2], 0, 'endR'],
        [[s0[0] - 22 - w, s0[1] - h / 2, s0[0] - 22, s0[1] + h / 2], 8, 'startL'],
        [[e[0] + 14, lastSt.y - lastSt.hh - 6 - h, e[0] + 14 + w, lastSt.y - lastSt.hh - 6], 8, 'endUR'],
        [[e[0] + 14, lastSt.y + lastSt.hh + 6, e[0] + 14 + w, lastSt.y + lastSt.hh + 6 + h], 8, 'endDR'],
        [[s0[0] - 14 - w, firstSt.y - firstSt.hh - 6 - h, s0[0] - 14, firstSt.y - firstSt.hh - 6], 14, 'startUL'],
        [[s0[0] - 14 - w, firstSt.y + firstSt.hh + 6, s0[0] - 14, firstSt.y + firstSt.hh + 6 + h], 14, 'startDL']
      ];
      L.polys.forEach(v => {
        let total = 0;
        for (let i = 1; i < v.length; i++) total += Math.hypot(v[i][0] - v[i - 1][0], v[i][1] - v[i - 1][1]);
        let run = 0;
        for (let i = 1; i < v.length; i++) {
          const a = v[i - 1], b = v[i], len = Math.hypot(b[0] - a[0], b[1] - a[1]);
          for (let d0 = 12; d0 < len - 12; d0 += 24) {
            const px = a[0] + (b[0] - a[0]) * d0 / len, py = a[1] + (b[1] - a[1]) * d0 / len;
            if (M.stations.some(s => Math.abs(s.x - px) < 16 && Math.abs(s.y - py) < s.hh + 6)) continue;
            const base = 18 + 22 * (1 - (run + d0) / total);
            if (Math.abs(a[0] - b[0]) < 0.5) {
              cands.push([[px + 10, py - h / 2, px + 10 + w, py + h / 2], base, 'vR']);
              cands.push([[px - 10 - w, py - h / 2, px - 10, py + h / 2], base, 'vL']);
            } else {
              cands.push([[px - w / 2, py - 10 - h, px + w / 2, py - 10], base, 'midU']);
              cands.push([[px - w / 2, py + 10, px + w / 2, py + 10 + h], base, 'midD']);
            }
          }
          run += len;
        }
      });
      return { L, li: M.lines.indexOf(L), w, h, cands, lw: 16 };
    });
    placeLabels(M, labels, tags);

    // 노선 고르기 줄(제목 아래)
    const chips = [];
    let cx = PAD, cy = 98;
    const rw = Math.ceil(26 + tw(RECENT_NAME, 13, 700) + 12);
    chips.push({ recent: true, x: cx, y: cy, w: rw });
    cx += rw + 14;
    LINES.forEach(l => {
      const w = Math.ceil(26 + tw(l.name, 13, 700) + 12);
      if (cx + w > MAPW) { cx = PAD; cy += 34; }
      chips.push({ l, x: cx, y: cy, w });
      cx += w + 8;
    });
    const TOP = cy + 34 + 16;

    let minY = Infinity, maxY = -Infinity;
    M.lines.forEach(L => L.polys.forEach(v => v.forEach(p => { minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); })));
    labels.concat(tags).forEach(o => { minY = Math.min(minY, o.r[1]); maxY = Math.max(maxY, o.r[3]); });
    M.stations.forEach(s => { minY = Math.min(minY, s.y - s.hh - 30); maxY = Math.max(maxY, s.y + s.hh + 30); });
    const dy = TOP + 10 - minY, mapBottom = maxY + dy + 10;
    const T = v => (v + dy).toFixed(1);
    const ST = {};
    M.stations.forEach(s => ST[s.slug] = { x: s.x, y: s.y + dy, hh: s.hh, k: s.k });

    let g = '';
    g += '<text x="' + PAD + '" y="44" class="t1">AI 분야 노선도와 교수님 연구</text>';
    g += '<text x="' + PAD + '" y="72" class="t2">역은 분야마다 대표 논문 ' + Object.keys(BY).length + '편, 선은 논문끼리의 인용입니다. 노란 역은 ' + RECENT_FROM + '년 이후 논문(' + RECENT.length + '편)입니다. 역 둘레의 원이 클수록 그 역 가까이 있는 교수님 논문이 많습니다.</text>';
    chips.forEach(c => {
      if (c.recent) {
        g += '<g class="lchip rchip" data-recent="1" tabindex="0" role="button" aria-label="' + esc(RECENT_NAME + ' 역만 보기') + '">'
          + '<rect x="' + c.x + '" y="' + c.y + '" width="' + c.w + '" height="26" rx="13"/>'
          + '<circle cx="' + (c.x + 14) + '" cy="' + (c.y + 13) + '" r="5.5" class="rdot"/>'
          + '<text x="' + (c.x + 26) + '" y="' + (c.y + 17.5) + '">' + esc(RECENT_NAME) + '</text></g>';
        return;
      }
      g += '<g class="lchip" data-line="' + c.l.id + '" tabindex="0" role="button" aria-label="' + esc(c.l.name + ' 노선 고르기') + '">'
        + '<rect x="' + c.x + '" y="' + c.y + '" width="' + c.w + '" height="26" rx="13"/>'
        + '<circle cx="' + (c.x + 14) + '" cy="' + (c.y + 13) + '" r="5" fill="' + c.l.color + '"/>'
        + '<text x="' + (c.x + 26) + '" y="' + (c.y + 17.5) + '">' + esc(c.l.name) + '</text></g>';
    });
    g += '<text x="' + MAPW + '" y="44" class="t2 fl" id="pmFlt" text-anchor="end"></text>';
    g += '<g class="halos" id="pmHalos"></g>';   // 원은 학과를 고를 때마다 다시 그린다(halos())
    M.xls.forEach(x => {
      const c = x.c.map(p => p[0].toFixed(1) + ',' + T(p[1]));
      g += '<path class="xl" data-a="' + x.a + '" data-b="' + x.b + '" d="M' + c[0] + ' C' + c[1] + ' ' + c[2] + ' ' + c[3] + '"/>';
    });
    M.lines.forEach(L => L.polys.forEach(pv => {
      g += '<path class="ln" data-line="' + L.l.id + '" d="' + roundedPath(pv.map(p => [p[0], p[1] + dy]), 14) + '" stroke="' + L.l.color + '"/>';
    }));
    tags.forEach(t => {
      if (t.kind === 'endR' || t.kind === 'startL') {
        const mv = t.L.polys[0], p = t.kind === 'endR' ? mv[mv.length - 1] : mv[0];
        const x2 = t.kind === 'endR' ? t.r[0] + 4 : t.r[2] - 4;
        g += '<line class="ln stub" data-line="' + t.L.l.id + '" x1="' + p[0].toFixed(1) + '" y1="' + T(p[1]) + '" x2="' + x2.toFixed(1) + '" y2="' + T(p[1]) + '" stroke="' + t.L.l.color + '"/>';
      }
    });
    M.stations.forEach(s => {
      const lines = STATION_LINES[s.slug].join(' '), y = s.y + dy;
      const rc = isRecent(s.slug) ? ' rc' : '';
      if (s.k > 1) g += '<rect class="xf' + rc + '" data-st="' + s.slug + '" data-lines="' + lines + '" x="' + (s.x - RX).toFixed(1) + '" y="' + (y - s.hh).toFixed(1) + '" width="' + (2 * RX) + '" height="' + (2 * s.hh).toFixed(1) + '" rx="' + RX + '"/>';
      else g += '<circle class="st' + rc + '" data-st="' + s.slug + '" data-lines="' + lines + '" cx="' + s.x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + RS + '" stroke="' + LBY[STATION_LINES[s.slug][0]].color + '"/>';
    });
    const boxes = [];   // 덧그림이 피할 자리
    labels.forEach(o => {
      const p = BY[o.s.slug], x = o.r[0], y = o.r[1] + dy;
      boxes.push([x, y, x + o.w, y + 24]);
      g += '<g class="slab' + (isRecent(o.s.slug) ? ' rc' : '') + '" data-st="' + o.s.slug + '" data-lines="' + STATION_LINES[o.s.slug].join(' ') + '"><title>' + esc(p.t + ' (' + p.y + ', 인용 ' + p.c.toLocaleString('ko-KR') + ')') + '</title><rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + o.w + '" height="24" rx="7"/>'
        + '<text x="' + (x + 6).toFixed(1) + '" y="' + (y + 16.5).toFixed(1) + '" class="sn' + (o.multi ? ' sx' : '') + '">' + esc(p.l)
        + '<tspan class="sy" dx="4">' + p.y + '</tspan></text></g>';
    });
    tags.forEach(t => {
      const x = t.r[0], y = t.r[1] + dy;
      boxes.push([x, y, x + t.w, y + 22]);
      g += '<g class="ltag" data-line="' + t.L.l.id + '" role="button" tabindex="0" aria-label="' + esc(t.L.l.name + ' 노선 고르기') + '"><rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + t.w + '" height="22" rx="6" fill="' + t.L.l.color + '"/>'
        + '<text x="' + (x + 9).toFixed(1) + '" y="' + (y + 15.5).toFixed(1) + '" class="tn" fill="' + inkColor(t.L.l.color) + '">' + esc(t.L.l.name) + '</text></g>';
    });
    M.stations.forEach(s => boxes.push([s.x - RX - 2, s.y + dy - s.hh - 2, s.x + RX + 2, s.y + dy + s.hh + 2]));
    g += '<g id="ov"></g>';

    const H = Math.ceil(mapBottom + 40);
    g += '<text id="pmFoot" x="' + PAD + '" y="' + (H - 18) + '" class="t3">역과 인용: Semantic Scholar(' + esc(PM.s2_made) + '), 교수님 논문: OpenAlex와 Semantic Scholar(' + esc(PM.made) + '), 2023년 이후 인용 상위 5편. repairer5812.github.io/thesis-research/profmap.html</text>';
    const svg = $('#pmSvg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('width', W); svg.setAttribute('height', H);
    svg.innerHTML = '<rect class="bg" x="0" y="0" width="' + W + '" height="' + H + '"/>' + g;
    geo = { ST, boxes, H };
    halos();
  }

  function halos() {
    const all = nearBy(() => true);
    $('#pmHalos').innerHTML = Object.entries(all).map(([slug, arr]) => {
      const s = geo.ST[slug];
      return '<circle class="halo" data-st="' + slug + '" data-lines="' + STATION_LINES[slug].join(' ') + '" cx="' + s.x.toFixed(1) + '" cy="' + s.y.toFixed(1) + '" r="' + haloR(arr.length).toFixed(1) + '"/>';
    }).join('');
    const n = PROFS.filter(inDept).length;
    $('#pmFlt').textContent = '교수님: ' + (flt.dept || '전체') + ' ' + n + '명, 원 안의 논문 ' + Object.values(all).reduce((a, v) => a + v.length, 0) + '편';
  }

  // 오른쪽 교수님 목록(HTML). 학과 단추, 이름 찾기, 학과별 이름과 다섯 칸 띠
  const bar = (p, cls) => {
    const ws = p.papers.slice().sort((a, b) => LINE_ORDER[a.line] - LINE_ORDER[b.line]);
    let h = '<span class="' + cls + '" aria-hidden="true">';
    for (let k = 0; k < 5; k++) h += ws[k] ? '<i style="background:' + LINE(ws[k].line).color + '"></i>' : '<i class="e"></i>';
    return h + '</span>';
  };
  function side() {
    const box = $('#pmSide');
    box.innerHTML = '<div class="pm-sh"><h2>교수님 <small>' + PROFS.length + '명</small></h2><p>논문지도를 맡을 수 있는 정보대학 전임교원입니다. 칸 하나가 논문 한 편, 색은 노선, 회색은 노선 밖입니다.</p></div>'
      + '<div class="pm-tabs" role="group" aria-label="학과 고르기">' + [null].concat(DEPTS).map(d =>
        '<button type="button" data-dept="' + esc(d || '') + '" aria-pressed="' + (flt.dept === d) + '">' + esc(d ? d.replace(/학과$/, '') : '전체') + ' <b>' + PROFS.filter(p => !d || p.dept === d).length + '</b></button>').join('') + '</div>'
      + '<label class="pm-q"><span class="sr">교수님 이름이나 연구실로 찾기</span><input type="search" id="pmQ" placeholder="이름, 연구실로 찾기" autocomplete="off" value="' + esc(flt.q) + '"></label>'
      + '<div class="pm-list" id="pmList"></div>';
    box.querySelectorAll('.pm-tabs button').forEach(b => b.addEventListener('click', () => {
      flt.dept = b.dataset.dept || null;
      box.querySelectorAll('.pm-tabs button').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
      if (mode && mode.prof != null && !inDept(PROFS[mode.prof])) mode = null;
      halos(); list(); apply();
    }));
    const q = $('#pmQ');
    q.addEventListener('input', () => { flt.q = q.value.trim(); list(); paint(); });
    q.addEventListener('keydown', e => {
      if (e.key === 'Enter') { const f = PROFS.find(shown); if (f) setMode({ prof: f.i }); }
      if (e.key === 'Escape') { q.value = ''; flt.q = ''; list(); paint(); }
    });
    list();
  }
  function list() {
    const L = $('#pmList');
    const ds = DEPTS.filter(d => !flt.dept || d === flt.dept);
    let h = '';
    ds.forEach(d => {
      const ps = PROFS.filter(p => p.dept === d && shown(p));
      if (!ps.length) return;
      h += '<h3>' + esc(d) + ' <small>' + ps.length + '</small></h3><ul>';
      ps.forEach(p => {
        const n = onMap(p);
        h += '<li><button type="button" class="pm-pr" data-p="' + p.i + '" aria-label="' + esc(p.name + ' 교수님, 논문 ' + p.papers.length + '편, 노선 안 ' + n + '편') + '">'
          + '<span class="nm">' + esc(p.name) + '</span>' + bar(p, 'br') + '</button></li>';
      });
      h += '</ul>';
    });
    L.innerHTML = h || '<p class="pm-none">찾는 교수님이 없습니다.</p>';
    L.querySelectorAll('.pm-pr').forEach(b => b.addEventListener('click', () => setMode({ prof: +b.dataset.p })));
    paint();
  }
  function paint() {
    document.querySelectorAll('.pm-pr').forEach(e => {
      const p = PROFS[+e.dataset.p];
      e.classList.toggle('me', !!(mode && mode.prof === p.i));
      e.classList.toggle('hi', !!(mode && mode.line && p.papers.some(w => w.line === mode.line)));
      e.classList.toggle('dim', !!(mode && ((mode.line && !p.papers.some(w => w.line === mode.line)) || (mode.prof != null && mode.prof !== p.i))));
      e.setAttribute('aria-pressed', String(!!(mode && mode.prof === p.i)));
    });
    // 고른 교수님 바로 아래에 논문 제목을 펼친다(자세한 내용은 노선도 아래)
    document.querySelectorAll('.pm-mini').forEach(e => e.remove());
    const me = mode && mode.prof != null && document.querySelector('.pm-pr[data-p="' + mode.prof + '"]');
    if (me) {
      const p = PROFS[mode.prof];
      me.parentNode.insertAdjacentHTML('beforeend', '<ol class="pm-mini">' + (p.papers.length ? p.papers.map(w => '<li><i style="background:' + LINE(w.line).color + '"></i><span>'
        + (w.u ? '<a href="' + esc(w.u) + '" target="_blank" rel="noopener">' + esc(w.t) + '</a>' : esc(w.t)) + '<small>' + esc(LINE(w.line).name + (w.near && BY[w.near] ? ', ' + BY[w.near].l : '') + ', ' + w.y) + '</small></span></li>').join('') : '<li>찾은 논문이 없습니다.</li>')
        + '</ol>');
    }
  }

  // 덧그림: 고른 노선이나 교수님의 원과 이름표
  function chipSpot(s, w, h, used) {
    const r = s.k > 1 ? RX : RS, off = 14;
    const cands = [[s.x + r + off, s.y + 8], [s.x + r + off, s.y - h - 8], [s.x - r - off - w, s.y + 8], [s.x - r - off - w, s.y - h - 8], [s.x - w / 2, s.y + s.hh + off + 26], [s.x - w / 2, s.y - s.hh - off - h - 26], [s.x + r + off, s.y - h / 2], [s.x - r - off - w, s.y - h / 2], [s.x - w / 2, s.y + s.hh + off], [s.x - w / 2, s.y - s.hh - off - h],
      [s.x + r + off, s.y + s.hh], [s.x + r + off, s.y - s.hh - h], [s.x - r - off - w, s.y + s.hh], [s.x - r - off - w, s.y - s.hh - h]];
    const ov = (a, b) => Math.max(0, Math.min(a[2], b[2]) - Math.max(a[0], b[0])) * Math.max(0, Math.min(a[3], b[3]) - Math.max(a[1], b[1]));
    let best = null, bc = Infinity;
    cands.forEach(([x, y], i) => {
      const b = [x, y, x + w, y + h];
      let c = i * 3 + (x < 4 || x + w > MAPW ? 1e6 : 0);
      used.forEach(u => c += ov(b, u) * 6);
      geo.boxes.forEach(u => c += ov(b, u) * 5);
      if (c < bc) { bc = c; best = b; }
    });
    used.push(best);
    return best;
  }
  function overlay() {
    const ov = $('#ov');
    let g = '';
    if (!mode || mode.recent) { ov.innerHTML = ''; return; }
    const pick = mode.line ? nearBy((p, w) => w.line === mode.line) : nearBy(p => p.i === mode.prof);
    const color = mode.line ? LBY[mode.line].color : '#8b1538';
    const used = [];
    let k = 0;
    Object.entries(pick).sort((a, b) => geo.ST[a[0]].y - geo.ST[b[0]].y).forEach(([slug, arr]) => {
      const s = geo.ST[slug];
      g += '<circle class="ohalo" cx="' + s.x.toFixed(1) + '" cy="' + s.y.toFixed(1) + '" r="' + haloR(arr.length).toFixed(1) + '" fill="' + color + '" style="animation-delay:' + (k * 25) + 'ms"/>';
      // 이름표: 노선을 고르면 교수님 이름(편수), 교수님을 고르면 편수
      let text;
      if (mode.line) {
        const cnt = new Map();
        arr.forEach(({ p }) => cnt.set(p.name, (cnt.get(p.name) || 0) + 1));
        const names = [...cnt.entries()].sort((a, b) => b[1] - a[1]).map(([n, c]) => n + (c > 1 ? ' ' + c : ''));
        text = names.length > 3 ? names.slice(0, 3).join(', ') + ' 외 ' + (names.length - 3) + '명' : names.join(', ');
      } else text = arr.length + '편';
      const w = Math.ceil(tw(text, 12, 700) + 16), h = 22, b = chipSpot(s, w, h, used);
      // 이름표에서 역까지 가는 가는 선(어느 역 이름표인지 알 수 있게)
      const lx = Math.max(b[0], Math.min(s.x, b[2])), lyy = Math.max(b[1], Math.min(s.y, b[3]));
      const lead = Math.hypot(lx - s.x, lyy - s.y) > 16 ? '<line x1="' + s.x.toFixed(1) + '" y1="' + s.y.toFixed(1) + '" x2="' + lx.toFixed(1) + '" y2="' + lyy.toFixed(1) + '" stroke="' + color + '" stroke-width="1.6"/>' : '';
      g += '<g class="chip" style="animation-delay:' + (80 + k * 35) + 'ms">' + lead + '<rect x="' + b[0].toFixed(1) + '" y="' + b[1].toFixed(1) + '" width="' + w + '" height="' + h + '" rx="11" fill="' + color + '"/>'
        + '<text x="' + (b[0] + w / 2).toFixed(1) + '" y="' + (b[1] + 15.5).toFixed(1) + '" fill="' + inkColor(color) + '">' + esc(text) + '</text></g>';
      k++;
    });
    ov.innerHTML = g;
  }

  function apply() {
    const svg = $('#pmSvg');
    let onLines = null, onSt = null;
    if (mode && mode.line) { onLines = new Set([mode.line]); onSt = new Set(LBY[mode.line].st); }
    if (mode && mode.recent) { onLines = new Set(); onSt = new Set(RECENT); }
    if (mode && mode.prof != null) {
      const ws = PROFS[mode.prof].papers;
      onLines = new Set(ws.filter(w => w.line !== 'other').map(w => w.line));
      onSt = new Set(ws.map(w => w.near).filter(Boolean));
    }
    svg.classList.toggle('focus', !!mode);
    svg.classList.toggle('recent', !!(mode && mode.recent));
    svg.querySelectorAll('.ln, .ltag, .lchip').forEach(e => e.classList.toggle('hi', !!onLines && onLines.has(e.dataset.line)));
    svg.querySelectorAll('.lchip').forEach(e => e.classList.toggle('me', !!(mode && (e.dataset.recent ? mode.recent : mode.line === e.dataset.line))));
    svg.querySelectorAll('.st, .xf, .slab').forEach(e => {
      const inLine = !!onLines && e.dataset.lines.split(' ').some(l => onLines.has(l));
      e.classList.toggle('hi', inLine || (!!onSt && onSt.has(e.dataset.st)));
      e.classList.toggle('lit', !!onSt && onSt.has(e.dataset.st) && !!(mode && mode.prof != null));
    });
    svg.querySelectorAll('.xl').forEach(e => e.classList.toggle('hi', !!onSt && onSt.has(e.dataset.a) && onSt.has(e.dataset.b)));
    paint();
    overlay();
    detail();
  }
  function setMode(m) {
    const same = m && mode && ((m.line && m.line === mode.line) || (m.prof != null && m.prof === mode.prof) || (m.recent && mode.recent));
    mode = same ? null : m;
    apply();
    // 좁은 화면에서는 최근 역이 노선도 오른쪽 끝에 있으므로 노선도 끝(교수님 줄 앞)이 보이게 민다
    const fig = $('.pm-fig');
    if (mode && mode.recent && fig.scrollWidth > fig.clientWidth) fig.scrollTo({ left: Math.max(0, (MAPW + PAD) / W * fig.scrollWidth - fig.clientWidth), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  function paperLi(w) {
    const l = LINE(w.line), near = w.near && BY[w.near] ? ', 가까운 역 ' + esc(BY[w.near].l) : '';
    return '<li><span class="pm-line" style="--c:' + l.color + '">' + esc(l.name) + '</span>'
      + (w.u ? '<a href="' + esc(w.u) + '" target="_blank" rel="noopener">' + esc(w.t) + '</a>' : '<b>' + esc(w.t) + '</b>')
      + '<small>' + [w.y, w.v, '인용 ' + w.c].filter(Boolean).map(esc).join(', ') + near + '</small>'
      + (w.why ? '<small class="why">' + esc(w.why) + '</small>' : '') + '</li>';
  }
  function detail() {
    const box = $('#pmDetail');
    if (!mode) {
      box.innerHTML = '<p class="pm-hint">위의 노선 이름이나 교수님 이름을 눌러 보세요. 교수님 목록 위의 학과 단추로 한 학과만 볼 수 있습니다. 맨 앞 \'' + RECENT_NAME + '\'를 누르면 최근 논문만 남습니다. 노선을 누르면 그 분야 교수님이 역 옆에 나타나고, 교수님을 누르면 그 교수님 논문이 닿은 역과 노선만 남습니다. 한 번 더 누르면 풀립니다.</p>';
      return;
    }
    let h;
    if (mode.recent) {
      const rows = LINES.map(l => ({ l, ss: l.st.filter(isRecent).sort((a, b) => BY[a].d < BY[b].d ? -1 : 1) })).filter(r => r.ss.length);
      const none = LINES.filter(l => !l.st.some(isRecent)).map(l => l.name);
      h = '<div class="pm-dh"><h3><i class="rdot"></i>' + esc(RECENT_NAME) + '</h3><span>' + RECENT_FROM + '년 이후 논문 ' + RECENT.length + '편. 노선마다 발표 연도별로 인용이 많은 논문을 골랐습니다' + (none.length ? '. 기준을 넘는 논문이 없는 노선: ' + esc(none.join(', ')) : '') + '</span><button type="button" class="pm-clear">선택 풀기</button></div>'
        + rows.map(r => '<h4><span class="pm-line" style="--c:' + r.l.color + '">' + esc(r.l.name) + '</span></h4><ol class="pm-papers">' + r.ss.map(s => { const p = BY[s];
          return '<li><a href="' + esc(p.u) + '" target="_blank" rel="noopener">' + (p.t.toLowerCase().startsWith(p.l.toLowerCase()) ? '' : esc(p.l) + ': ') + esc(p.t) + '</a><small>' + esc([p.d || p.y, p.v, '인용 ' + p.c.toLocaleString('ko-KR')].filter(Boolean).join(', ')) + '</small></li>'; }).join('') + '</ol>').join('');
    } else if (mode.line) {
      const l = LBY[mode.line], rows = PROFS.filter(inDept).map(p => ({ p, ws: p.papers.filter(w => w.line === mode.line) })).filter(r => r.ws.length).sort((a, b) => b.ws.length - a.ws.length);
      h = '<div class="pm-dh"><h3><i style="background:' + l.color + '"></i>' + esc(l.name) + '</h3><span>' + esc(l.desc) + '. ' + (flt.dept ? esc(flt.dept) + ' ' : '') + '교수님 ' + rows.length + '명, 논문 ' + rows.reduce((a, r) => a + r.ws.length, 0) + '편</span><button type="button" class="pm-clear">선택 풀기</button></div>'
        + (rows.length ? rows.map(r => '<h4>' + esc(r.p.name) + ' <small>' + esc(r.p.dept) + '</small></h4><ol class="pm-papers">' + r.ws.map(paperLi).join('') + '</ol>').join('') : '<p class="pm-hint">이 노선에 든 교수님 논문이 없습니다.</p>');
    } else {
      const p = PROFS[mode.prof];
      h = '<div class="pm-dh"><h3>' + esc(p.name) + ' 교수님</h3><span>' + esc(p.dept) + (p.lab ? ', ' + (p.url ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.lab) + '</a>' : esc(p.lab)) : '') + '</span><button type="button" class="pm-clear">선택 풀기</button></div>'
        + (p.papers.length ? '<ol class="pm-papers">' + p.papers.map(paperLi).join('') + '</ol>' : '<p class="pm-hint">이 교수님 논문은 아직 찾지 못했습니다.</p>');
    }
    box.innerHTML = h;
    box.querySelector('.pm-clear').addEventListener('click', () => setMode(null));
  }

  // PNG에는 화면 오른쪽 교수님 목록 대신 노선도 아래에 목록을 붙인다(고른 학과만)
  function exportList(svg) {
    const foot = svg.querySelector('#pmFoot');
    const CW = 300, cols = Math.floor((MAPW - PAD) / CW), RH = 28;
    let y = geo.H - 30, g = '<g class="xlist"><line x1="' + PAD + '" x2="' + MAPW + '" y1="' + y + '" y2="' + y + '" class="sep"/>';
    y += 34;
    g += '<text x="' + PAD + '" y="' + y + '" class="h2">교수님' + (flt.dept ? ': ' + esc(flt.dept) : '') + '</text><text x="' + (PAD + 150) + '" y="' + y + '" class="t3">칸 하나가 논문 한 편, 색은 노선, 회색은 노선 밖</text>';
    y += 14;
    DEPTS.filter(d => !flt.dept || d === flt.dept).forEach(d => {
      const ps = PROFS.filter(p => p.dept === d);
      y += 26;
      g += '<text x="' + PAD + '" y="' + y + '" class="dept">' + esc(d) + ' ' + ps.length + '명</text>';
      y += 8;
      ps.forEach((p, k) => {
        const x = PAD + (k % cols) * CW, yy = y + Math.floor(k / cols) * RH;
        const me = mode && mode.prof === p.i, dim = mode && ((mode.line && !p.papers.some(w => w.line === mode.line)) || (mode.prof != null && !me));
        const ws = p.papers.slice().sort((a, b) => LINE_ORDER[a.line] - LINE_ORDER[b.line]);
        g += '<g class="xr' + (me ? ' me' : '') + (dim ? ' dim' : '') + '">' + (me ? '<rect x="' + (x - 6) + '" y="' + yy + '" width="' + (CW - 8) + '" height="' + (RH - 2) + '" rx="6" class="mebg"/>' : '')
          + '<text x="' + x + '" y="' + (yy + 18) + '" class="pn">' + esc(p.name) + '</text>';
        for (let i = 0; i < 5; i++) g += '<rect x="' + (x + 152 + i * 22) + '" y="' + (yy + 7) + '" width="19" height="13" rx="3" ' + (ws[i] ? 'fill="' + LINE(ws[i].line).color + '"' : 'fill="#eeece7"') + '/>';
        g += '</g>';
      });
      y += Math.ceil(ps.length / cols) * RH;
    });
    g += '</g>';
    const H = Math.ceil(y + 46);
    foot.setAttribute('y', H - 18);
    foot.insertAdjacentHTML('beforebegin', g);
    svg.querySelector('.bg').setAttribute('height', H);
    svg.setAttribute('height', H);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  }

  async function savePng(btn) {
    btn.disabled = true; const old = btn.textContent; btn.textContent = '만드는 중';
    try {
      const svg = $('#pmSvg').cloneNode(true);
      svg.classList.add('still');  // 저장 그림에는 움직임을 넣지 않는다
      exportList(svg);
      const css = await (await fetch('assets/profmap.css')).text();
      const svgCss = css.split('/* svg 시작 */')[1].split('/* svg 끝 */')[0];
      let face = '';
      if (fontBuf) {
        let bin = ''; const u = new Uint8Array(fontBuf);
        for (let i = 0; i < u.length; i += 0x8000) bin += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000));
        face = '@font-face{font-family:"PM Pretendard";src:url(data:font/woff2;base64,' + btoa(bin) + ') format("woff2");font-weight:100 900;}';
      }
      const st = document.createElementNS(NS, 'style');
      st.textContent = face + svgCss.replace(/#pmSvg/g, 'svg');
      svg.insertBefore(st, svg.firstChild);
      svg.setAttribute('xmlns', NS);
      const w = +svg.getAttribute('width'), h = +svg.getAttribute('height'), k = 2;
      const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml' }));
      const img = new Image();
      await new Promise((ok, no) => { img.onload = ok; img.onerror = no; img.src = url; });
      await new Promise(r => setTimeout(r, 150));
      const c = document.createElement('canvas'); c.width = w * k; c.height = h * k;
      const x = c.getContext('2d'); x.scale(k, k); x.drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      const blob = await new Promise(r => c.toBlob(r, 'image/png'));
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      const tag = (flt.dept ? '_' + flt.dept : '') + (!mode ? '' : mode.recent ? '_최근3년' : mode.line ? '_' + LBY[mode.line].name.replace(/\s+/g, '') : '_' + PROFS[mode.prof].name);
      a.download = 'AI분야노선도_교수님' + tag + '.png';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      btn.textContent = '저장했습니다';
    } catch (e) {
      btn.textContent = '저장하지 못했습니다';
    }
    setTimeout(() => { btn.textContent = old; btn.disabled = false; }, 1800);
  }

  async function start() {
    await loadFont();
    drawBase();
    side();
    apply();
    const svg = $('#pmSvg');
    const act = t => {
      const ln = t.closest('.lchip, .ltag');
      if (ln && ln.dataset.recent) return setMode({ recent: true }), true;
      if (ln) return setMode({ line: ln.dataset.line }), true;
      return false;
    };
    svg.addEventListener('click', e => { if (!act(e.target) && mode && !e.target.closest('.slab')) setMode(null); });
    svg.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && act(e.target)) e.preventDefault(); if (e.key === 'Escape') setMode(null); });
    $('#pmSave').addEventListener('click', e => savePng(e.currentTarget));
    if (location.hash === '#recent') setMode({ recent: true });  // 최근 3년만 보는 주소
    document.body.dataset.ready = '1';
  }
  start();
})();
