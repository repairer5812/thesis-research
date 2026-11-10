// 논문 노선도 그리기: 노선도, 갈래별 교수님 칸, 교수 고르기, PNG 저장. 배치는 profmap-layout.js(서재 코드)
(function () {
  'use strict';
  const PM = window.PROFMAP, LY = window.__PM_LAYOUT;
  const { metroLayout, placeLabels, roundedPath, inkColor, RS, RX, LBY, STATION_LINES } = LY;
  const BY = PM.papers, LINES = PM.lines;
  const OTHER = { id: 'other', name: '노선 밖', color: '#6f7075', desc: '아홉 노선 어디에도 가깝지 않은 논문' };
  const LINE = id => id === 'other' ? OTHER : LBY[id];
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // 글꼴: 화면과 PNG가 같은 글꼴로 폭을 재고 그리도록 Pretendard 전체 파일 하나를 받아 쓴다
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
    } catch (e) { fontBuf = null; }  // 못 받으면 시스템 글꼴로 그린다
  }
  const cv = document.createElement('canvas').getContext('2d');
  const tw = (t, size, wt) => { cv.font = wt + ' ' + size + 'px ' + FAM; return cv.measureText(t).width; };

  // 교수님 논문을 노선별로 모은다
  const PROFS = PM.profs.map((p, i) => ({ ...p, i }));
  const byLine = {};
  PROFS.forEach(p => p.papers.forEach(w => {
    const m = (byLine[w.line] = byLine[w.line] || new Map());
    m.set(p.i, (m.get(p.i) || 0) + 1);
  }));
  const CARD_LINES = LINES.map(l => l.id).concat(byLine.other ? ['other'] : []);

  const W = 1320, PAD = 28;
  let sel = null;  // 고른 교수 번호

  function draw() {
    const M = metroLayout(W);
    // 역 이름표: 이름 13px 600, 연도 11.5px 500, 좌우 6px, 사이 4px
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
      return { s, w, h, wn, cands, lw: 40, multi: STATION_LINES[s.slug].length > 1 };
    });
    // 노선 이름표: 이름 12px 700, 교수 수 칸
    const tags = M.lines.map(L => {
      const n = byLine[L.l.id] ? byLine[L.l.id].size : 0;
      const wn = tw(L.l.name, 12, 700), cnt = '교수 ' + n, wc = tw(cnt, 11, 700);
      const w = Math.ceil(9 + wn + 7 + wc + 12 + 5), h = 22;
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
      return { L, li: M.lines.indexOf(L), w, h, wn, cnt, n, cands, lw: 16 };
    });
    placeLabels(M, labels, tags);
    // 이름표가 오른쪽 끝을 넘으면 그림을 그만큼 넓힌다
    const WO = Math.max(W, Math.ceil(Math.max(...labels.concat(tags).map(o => o.r[2])) + 16));

    let minY = Infinity, maxY = -Infinity;
    M.lines.forEach(L => L.polys.forEach(v => v.forEach(p => { minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); })));
    labels.concat(tags).forEach(o => { minY = Math.min(minY, o.r[1]); maxY = Math.max(maxY, o.r[3]); });
    M.stations.forEach(s => { minY = Math.min(minY, s.y - s.hh); maxY = Math.max(maxY, s.y + s.hh); });
    const TOP = 92;                       // 제목 자리
    const dy = TOP + 22 - minY;
    const mapBottom = maxY + dy + 22;
    const T = v => (v + dy).toFixed(1);

    let g = '';
    // 제목
    g += '<text x="' + PAD + '" y="42" class="t1">유명 논문 노선도와 교수님 연구 갈래</text>';
    g += '<text x="' + PAD + '" y="68" class="t2">고려대 SW·AI융합대학원 인공지능학과 교수님과 컴퓨터학과 교수님 ' + PROFS.length + '명, 교수님마다 2023년 이후 논문 중 인용이 많은 5편(덜 모인 교수님은 그만큼). 점 하나가 논문 한 편입니다.</text>';
    // 환승 연결, 노선, 이름표 꼬리
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
    // 역
    M.stations.forEach(s => {
      const lines = STATION_LINES[s.slug].join(' ');
      if (s.k > 1) g += '<rect class="xf" data-lines="' + lines + '" x="' + (s.x - RX).toFixed(1) + '" y="' + T(s.y - s.hh) + '" width="' + (2 * RX) + '" height="' + (2 * s.hh).toFixed(1) + '" rx="' + RX + '"/>';
      else g += '<circle class="st" data-lines="' + lines + '" cx="' + s.x.toFixed(1) + '" cy="' + T(s.y) + '" r="' + RS + '" stroke="' + LBY[STATION_LINES[s.slug][0]].color + '"/>';
    });
    // 역 이름표
    labels.forEach(o => {
      const p = BY[o.s.slug], x = o.r[0], y = o.r[1] + dy;
      g += '<g class="slab" data-lines="' + STATION_LINES[o.s.slug].join(' ') + '"><rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + o.w + '" height="24" rx="7"/>'
        + '<text x="' + (x + 6).toFixed(1) + '" y="' + (y + 16.5).toFixed(1) + '" class="sn' + (o.multi ? ' sx' : '') + '">' + esc(p.l)
        + '<tspan class="sy" dx="4">' + p.y + '</tspan></text></g>';
    });
    // 노선 이름표와 교수 수
    tags.forEach(t => {
      const x = t.r[0], y = t.r[1] + dy, ink = inkColor(t.L.l.color), bx = x + 9 + t.wn + 7;
      g += '<g class="ltag" data-line="' + t.L.l.id + '"><rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + t.w + '" height="22" rx="6" fill="' + t.L.l.color + '"/>'
        + '<text x="' + (x + 9).toFixed(1) + '" y="' + (y + 15.5).toFixed(1) + '" class="tn" fill="' + ink + '">' + esc(t.L.l.name) + '</text>'
        + '<rect x="' + bx.toFixed(1) + '" y="' + (y + 3.5).toFixed(1) + '" width="' + (t.w - (bx - x) - 5).toFixed(1) + '" height="15" rx="4" fill="#fff" fill-opacity=".92"/>'
        + '<text x="' + (bx + 6).toFixed(1) + '" y="' + (y + 15).toFixed(1) + '" class="tc" fill="' + t.L.l.color + '">' + esc(t.cnt) + '</text></g>';
    });
    // 고른 교수님의 논문이 가까운 역 표시(번호 = 그 역 가까이 있는 논문 수)
    if (sel != null) {
      const near = {};
      PROFS[sel].papers.forEach(w => { if (w.near && STATION_LINES[w.near]) near[w.near] = (near[w.near] || 0) + 1; });
      Object.entries(near).forEach(([slug, n]) => {
        const s = M.stations.find(z => z.slug === slug);
        const cx = s.x + (s.k > 1 ? RX : RS) + 4, cy = s.y + dy - s.hh - 4;
        g += '<g class="pmk"><circle cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="10"/><text x="' + cx.toFixed(1) + '" y="' + (cy + 4.2).toFixed(1) + '">' + n + '</text></g>';
      });
    }

    // 갈래별 교수님 칸: 세 줄 격자, 칸 안은 두 단
    const COLS = 3, GAP = 16, cw = (WO - 2 * PAD - (COLS - 1) * GAP) / COLS;
    let y0 = mapBottom + 8;
    g += '<text x="' + PAD + '" y="' + (y0 + 18) + '" class="h2">갈래별 교수님</text>';
    g += '<text x="' + (PAD + tw('갈래별 교수님', 17, 800) + 12) + '" y="' + (y0 + 18) + '" class="t3">이름 옆 점이 그 갈래에 든 논문 수입니다. 이름을 누르면 노선도에서 그 교수님 갈래만 보입니다.</text>';
    y0 += 34;
    const cards = CARD_LINES.map(id => {
      const l = LINE(id), m = byLine[id] || new Map();
      const rows = [...m.entries()].sort((a, b) => b[1] - a[1] || PROFS[a[0]].name.localeCompare(PROFS[b[0]].name, 'ko'));
      const papers = rows.reduce((a, r) => a + r[1], 0);
      return { l, rows, papers, h: 48 + Math.max(1, Math.ceil(rows.length / 2)) * 26 + 10 };
    });
    for (let r = 0; r < cards.length; r += COLS) {
      const row = cards.slice(r, r + COLS), rh = Math.max(...row.map(c => c.h));
      row.forEach((c, j) => {
        const x = PAD + j * (cw + GAP), id = c.l.id;
        g += '<g class="card" data-line="' + id + '"><rect class="cbg" x="' + x.toFixed(1) + '" y="' + y0 + '" width="' + cw.toFixed(1) + '" height="' + rh + '" rx="12"/>'
          + '<rect x="' + x.toFixed(1) + '" y="' + y0 + '" width="6" height="' + rh + '" rx="3" fill="' + c.l.color + '"/>'
          + '<text x="' + (x + 20).toFixed(1) + '" y="' + (y0 + 28) + '" class="cn">' + esc(c.l.name) + '</text>'
          + '<text x="' + (x + cw - 16).toFixed(1) + '" y="' + (y0 + 28) + '" class="cm" text-anchor="end">교수 ' + c.rows.length + '명, 논문 ' + c.papers + '편</text>';
        if (!c.rows.length) g += '<text x="' + (x + 20).toFixed(1) + '" y="' + (y0 + 62) + '" class="ce">이 갈래에 든 논문이 없습니다</text>';
        const colW = (cw - 36) / 2;
        c.rows.forEach(([pi, n], k) => {
          const rx = x + 20 + (k % 2) * colW, ry = y0 + 48 + Math.floor(k / 2) * 26;
          const name = PROFS[pi].name, nw = tw(name, 13.5, 600);
          let dots = '';
          for (let d = 0; d < n; d++) dots += '<circle cx="' + (rx + nw + 12 + d * 12).toFixed(1) + '" cy="' + (ry + 13).toFixed(1) + '" r="4.6" fill="' + c.l.color + '"/>';
          g += '<g class="pr" data-p="' + pi + '" tabindex="0" role="button" aria-label="' + esc(name + ', ' + c.l.name + ' ' + n + '편') + '">'
            + '<rect class="hit" x="' + (rx - 6).toFixed(1) + '" y="' + ry.toFixed(1) + '" width="' + (colW - 4).toFixed(1) + '" height="24" rx="6"/>'
            + '<text x="' + rx.toFixed(1) + '" y="' + (ry + 17.5).toFixed(1) + '" class="pn">' + esc(name) + '</text>' + dots + '</g>';
        });
        g += '</g>';
      });
      y0 += rh + GAP;
    }
    const H = Math.ceil(y0 + 34);
    g += '<text x="' + PAD + '" y="' + (H - 16) + '" class="t3">노선도: AI 학습관 논문 서재(' + esc(PM.map_made) + '), 교수님 논문: OpenAlex(' + esc(PM.made) + ' 조회). repairer5812.github.io/thesis-research</text>';

    const svg = $('#pmSvg');
    svg.setAttribute('viewBox', '0 0 ' + WO + ' ' + H);
    svg.setAttribute('width', WO); svg.setAttribute('height', H);
    svg.innerHTML = '<rect class="bg" x="0" y="0" width="' + WO + '" height="' + H + '"/>' + g;
    applySel();
  }

  // 고른 교수님: 그 교수님 논문이 든 노선만 남기고 흐리게
  function applySel() {
    const svg = $('#pmSvg');
    const on = sel == null ? null : new Set(PROFS[sel].papers.map(w => w.line));
    svg.classList.toggle('focus', sel != null);
    svg.querySelectorAll('[data-line]').forEach(e => e.classList.toggle('hi', !!on && on.has(e.dataset.line)));
    svg.querySelectorAll('[data-lines]').forEach(e => e.classList.toggle('hi', !!on && e.dataset.lines.split(' ').some(l => on.has(l))));
    svg.querySelectorAll('.xl').forEach(e => e.classList.toggle('hi', !!on && [e.dataset.a, e.dataset.b].every(s => STATION_LINES[s].some(l => on.has(l)))));
    svg.querySelectorAll('.pr').forEach(e => e.classList.toggle('me', sel != null && +e.dataset.p === sel));
    document.querySelectorAll('#pmProfs button').forEach(b => b.setAttribute('aria-pressed', String(sel != null && +b.dataset.p === sel)));
    renderDetail();
  }
  function choose(i) {
    sel = sel === i ? null : i;
    draw();
  }

  function renderDetail() {
    const box = $('#pmDetail');
    if (sel == null) {
      box.innerHTML = '<p class="pm-hint">교수님 이름을 누르면 노선도에서 그 교수님 논문이 든 갈래만 남고, 논문이 가까운 역에 편수가 붙습니다. 아래에 논문 목록이 나옵니다.</p>';
      return;
    }
    const p = PROFS[sel];
    box.innerHTML = '<div class="pm-dh"><h3>' + esc(p.name) + ' 교수님</h3><span>' + esc(p.dept) + (p.lab ? ', ' + (p.url ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener">' + esc(p.lab) + '</a>' : esc(p.lab)) : '') + '</span>'
      + '<button type="button" class="pm-clear">선택 풀기</button></div>'
      + '<ol class="pm-papers">' + p.papers.map(w => {
        const l = LINE(w.line), near = w.near && BY[w.near] ? ', 가까운 역 ' + esc(BY[w.near].l) : '';
        return '<li><span class="pm-line" style="--c:' + l.color + '">' + esc(l.name) + '</span>'
          + (w.u ? '<a href="' + esc(w.u) + '" target="_blank" rel="noopener">' + esc(w.t) + '</a>' : '<b>' + esc(w.t) + '</b>')
          + '<small>' + [w.y, w.v, '인용 ' + w.c].filter(Boolean).map(esc).join(', ') + near + '</small>'
          + (w.why ? '<small class="why">' + esc(w.why) + '</small>' : '') + '</li>';
      }).join('') + '</ol>';
    box.querySelector('.pm-clear').addEventListener('click', () => choose(sel));
  }

  // 교수님 단추(학과별)
  function renderProfButtons() {
    const box = $('#pmProfs');
    const depts = [...new Set(PROFS.map(p => p.dept))];
    box.innerHTML = depts.map(d => '<div class="pm-dept"><b>' + esc(d) + '</b><div>' + PROFS.filter(p => p.dept === d).map(p =>
      '<button type="button" data-p="' + p.i + '" aria-pressed="false"' + (p.papers.length ? '' : ' disabled title="논문을 아직 찾지 못했습니다"') + '>' + esc(p.name) + '<i>' + (p.papers.length || '찾는 중') + '</i></button>').join('') + '</div></div>').join('');
    box.addEventListener('click', e => { const b = e.target.closest('button[data-p]'); if (b) choose(+b.dataset.p); });
  }

  // PNG 저장: 같은 SVG에 글꼴을 넣어 2배 크기로 그린다
  async function savePng(btn) {
    btn.disabled = true; const old = btn.textContent; btn.textContent = '만드는 중';
    try {
      const svg = $('#pmSvg').cloneNode(true);
      const css = await (await fetch('assets/profmap.css')).text();
      const svgCss = css.split('/* svg 시작 */')[1].split('/* svg 끝 */')[0];
      let face = '';
      if (fontBuf) {
        let bin = ''; const u = new Uint8Array(fontBuf);
        for (let i = 0; i < u.length; i += 0x8000) bin += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000));
        face = '@font-face{font-family:"PM Pretendard";src:url(data:font/woff2;base64,' + btoa(bin) + ') format("woff2");font-weight:100 900;}';
      }
      const st = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      st.textContent = face + svgCss.replace(/#pmSvg/g, 'svg');
      svg.insertBefore(st, svg.firstChild);
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      const w = +svg.getAttribute('width'), h = +svg.getAttribute('height'), k = 2;
      const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml' }));
      const img = new Image();
      await new Promise((ok, no) => { img.onload = ok; img.onerror = no; img.src = url; });
      await new Promise(r => setTimeout(r, 120));  // 글꼴이 붙을 틈
      const c = document.createElement('canvas'); c.width = w * k; c.height = h * k;
      const x = c.getContext('2d'); x.scale(k, k); x.drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      const blob = await new Promise(r => c.toBlob(r, 'image/png'));
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = '논문노선도_교수님갈래' + (sel != null ? '_' + PROFS[sel].name : '') + '.png';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      btn.textContent = '저장했습니다';
    } catch (e) {
      btn.textContent = '저장하지 못했습니다';
    }
    setTimeout(() => { btn.textContent = old; btn.disabled = false; }, 1800);
  }

  async function start() {
    renderProfButtons();
    await loadFont();
    draw();
    const svg = $('#pmSvg');
    svg.addEventListener('click', e => { const p = e.target.closest('.pr'); if (p) choose(+p.dataset.p); });
    svg.addEventListener('keydown', e => { const p = e.target.closest('.pr'); if (p && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); const i = +p.dataset.p, line = p.closest('.card').dataset.line; choose(i); const back = svg.querySelector('.card[data-line="' + line + '"] .pr[data-p="' + i + '"]'); if (back) back.focus(); } });
    $('#pmSave').addEventListener('click', e => savePng(e.currentTarget));
    document.body.dataset.ready = '1';
  }
  start();
})();
