// 논문 노선도(profmap.html): 유명 논문 노선도 위에 교수님 논문 갈래를 겹쳐 그리고 PNG로 저장한다.
// 아래 "서재에서 옮긴 배치 코드" 구간은 AI 학습관 논문 서재 library/app/src/lib/map/map.js(커밋 1ff4d12)의
// 122~445줄을 그대로 옮겼다(역 칸, 순서, 높이, 노선 경로, 이름표 자리 고르기). 서재 쪽을 고치면 여기도 같이 옮긴다.
// 바꾼 것: 이름표 폭을 DOM 대신 캔버스 measureText로 재고, 이름표까지 모두 SVG 하나에 그린다(PNG 저장용).
(function () {
  'use strict';
  const PM = window.PROFMAP;
  const BY = PM.papers, LINES = PM.lines;
  const LBY = {};
  LINES.forEach((l, i) => { l.ix = i; LBY[l.id] = l; });
  const STATION_LINES = {};
  LINES.forEach(l => {
    if (!l.paths || !l.paths.length) l.paths = [l.st];
    const seen = new Set(l.st.concat(...l.paths));
    seen.forEach(s => (STATION_LINES[s] = STATION_LINES[s] || []).push(l.id));
  });
  const XL = (PM.xl || []).filter(x => STATION_LINES[x[0]] && STATION_LINES[x[1]]);
  const XLM = XL.filter(x => x[2]);

  /* ---------- 서재에서 옮긴 배치 코드 시작 ---------- */
  /* ---------- 학습 노선도 ---------- */
  const G = 8;            // 환승역 안에서 노선 사이 간격
  const RS = 7, RX = 10;  // 보통 역, 환승역 반지름
  function markerHalf(k) { return k > 1 ? (k - 1) * G / 2 + RX : RS + 2; }

  let metroCore = null;  // 칸, 순서, 높이는 데이터로만 정해지므로 한 번만 계산한다
  function buildCore() {
    // 1. 역과 구간(갈래마다 이웃 역 쌍), 층(왼쪽에서 몇 번째 칸)
    //    칸은 노선 구간과 환승 연결의 앞뒤를 지키고(뒤 역은 앞 역보다 오른쪽), 발표 날짜 순위로 정한 최소 칸보다 왼쪽에 두지 않는다
    const segs = [], seenSeg = {};
    LINES.forEach(l => l.paths.forEach(p => p.forEach((s, i) => {
      if (!i) return;
      const k = l.id + '|' + p[i - 1] + '|' + s;
      if (!seenSeg[k]) { seenSeg[k] = 1; segs.push({ a: p[i - 1], b: s, line: l.id }); }
    })));
    const ids = Object.keys(STATION_LINES);
    const prec = segs.map(g => [g.a, g.b]).concat(XL.map(x => [x[0], x[1]]));
    const relax = L => {
      for (let it = 0; it <= ids.length; it++) {
        let ch = false;
        prec.forEach(([a, b]) => { if (L[b] < L[a] + 1) { L[b] = L[a] + 1; ch = true; } });
        if (!ch) break;
      }
      return L;
    };
    const depth = Math.max(0, ...Object.values(relax(Object.fromEntries(ids.map(s => [s, 0])))));
    const dkey = s => (BY[s] && BY[s].d) || String(BY[s] ? BY[s].y : 0);
    const byDate = ids.slice().sort((a, b) => dkey(a) < dkey(b) ? -1 : dkey(a) > dkey(b) ? 1 : 0);
    const floorL = {};
    byDate.forEach((s, i) => floorL[s] = Math.floor(i * (depth + 2) / ids.length));
    const layer = relax(Object.assign({}, floorL));
    // 노선의 출발역(앞 역이 없는 역)은 다음 역 앞쪽 칸 가운데 연도가 가장 가까운 칸으로 옮긴다
    const succ = {}, hasPred = {};
    prec.forEach(([a, b]) => { (succ[a] = succ[a] || []).push(b); hasPred[b] = 1; });
    const yrs = {};
    ids.forEach(s => (yrs[layer[s]] = yrs[layer[s]] || []).push(BY[s] ? BY[s].y : 0));
    const meanY = k => yrs[k] ? yrs[k].reduce((a, b) => a + b, 0) / yrs[k].length : null;
    ids.forEach(s => {
      if (hasPred[s] || !succ[s]) return;
      const maxL = Math.min(...succ[s].map(x => layer[x])) - 1;
      let bestL = layer[s], bd = Infinity;
      for (let k = floorL[s]; k <= maxL; k++) { const m = meanY(k); if (m == null) continue; const d = Math.abs(m - BY[s].y); if (d < bd - 0.01) { bd = d; bestL = k; } }
      layer[s] = bestL;
    });
    // 2. 여러 칸을 건너는 구간에는 빈 점(더미)을 둔다
    const N = {};
    ids.forEach(s => N[s] = { id: s, slug: s, lines: STATION_LINES[s], layer: layer[s], up: [], dn: [], xw: [] });
    XLM.forEach(([a, b]) => { N[a].xw.push([b, 0.4]); N[b].xw.push([a, 0.4]); });  // 주요 환승 연결은 위아래로 약하게 당긴다
    const chains = {};
    segs.forEach(g => {
      const ch = [g.a];
      for (let k = layer[g.a] + 1; k < layer[g.b]; k++) {
        const id = '~' + g.line + '~' + g.a + '~' + k;
        N[id] = { id, slug: null, line: g.line, layer: k, up: [], dn: [] };
        ch.push(id);
      }
      ch.push(g.b);
      for (let i = 1; i < ch.length; i++) {
        const u = N[ch[i - 1]], v = N[ch[i]];
        const w = (u.slug ? 1 : 2) * (v.slug ? 1 : 2);
        u.dn.push([v.id, w, g.line]); v.up.push([u.id, w, g.line]);
      }
      chains[g.line + '|' + g.a + '|' + g.b] = ch;
    });
    const K = Math.max(0, ...ids.map(s => layer[s]));
    let LY = [];
    const lineKey = (n, rk) => n.slug ? Math.min(...n.lines.map(l => rk[l])) : rk[n.line];
    function initOrder(rk) {
      LY = [];
      for (let k = 0; k <= K; k++) LY.push([]);
      Object.values(N).forEach(n => LY[n.layer].push(n.id));
      LY.forEach(L => L.sort((a, b) => lineKey(N[a], rk) - lineKey(N[b], rk) || (a < b ? -1 : 1)));
    }

    // 3. 칸 안 순서: 무게중심 정렬과 이웃 바꾸기로 노선이 덜 엇갈리게
    const pos = {};
    const setPos = () => LY.forEach(L => L.forEach((id, i) => pos[id] = i));
    function crossings() {
      let c = 0;
      for (let k = 0; k < K; k++) {
        const E = [];
        LY[k].forEach(u => N[u].dn.forEach(([v]) => E.push([pos[u], pos[v]])));
        for (let i = 0; i < E.length; i++) for (let j = i + 1; j < E.length; j++) {
          if ((E[i][0] - E[j][0]) * (E[i][1] - E[j][1]) < 0) c++;
        }
      }
      return c;
    }
    function bary(k, dir) {
      const L = LY[k];
      const key = {};
      L.forEach(id => {
        const ns = N[id][dir];
        key[id] = ns.length ? ns.reduce((a, [n]) => a + pos[n], 0) / ns.length : pos[id];
      });
      L.sort((a, b) => key[a] - key[b] || pos[a] - pos[b]);
      L.forEach((id, i) => pos[id] = i);
    }
    function pairCross(u, v) {
      let c = 0;
      ['up', 'dn'].forEach(d => N[u][d].forEach(([a]) => N[v][d].forEach(([b]) => { if (pos[a] > pos[b]) c++; })));
      return c;
    }
    function transpose() {
      let improved = true, guard = 0;
      while (improved && guard++ < 20) {
        improved = false;
        LY.forEach(L => {
          for (let i = 0; i + 1 < L.length; i++) {
            const u = L[i], v = L[i + 1];
            if (pairCross(v, u) < pairCross(u, v)) { L[i] = v; L[i + 1] = u; pos[v] = i; pos[u] = i + 1; improved = true; }
          }
        });
      }
    }
    function orderFrom(rk) {
      initOrder(rk); setPos();
      let best = LY.map(L => L.slice()), bestC = crossings();
      for (let it = 0; it < 24; it++) {
        if (it % 2 === 0) for (let k = 1; k <= K; k++) bary(k, 'up');
        else for (let k = K - 1; k >= 0; k--) bary(k, 'dn');
        transpose();
        const c = crossings();
        if (c < bestC) { bestC = c; best = LY.map(L => L.slice()); }
      }
      LY = best; setPos();
      return bestC;
    }

    // 4. 세로 위치: 같은 칸 안 최소 간격을 지키며 노선이 곧게 가도록 이웃 평균으로 여러 번 당긴다
    const half = n => n.slug ? markerHalf(n.lines.length) : 3;
    const gapOf = (u, v) => (u.slug && v.slug) ? 68 : (u.slug || v.slug) ? 36 : 14;
    let y = {};
    function project(L, want, wt) {
      const n = L.length, c = [0];
      for (let i = 1; i < n; i++) c[i] = c[i - 1] + half(N[L[i - 1]]) + half(N[L[i]]) + gapOf(N[L[i - 1]], N[L[i]]);
      const blocks = [];
      for (let i = 0; i < n; i++) {
        blocks.push({ v: want[i] - c[i], w: wt[i], n: 1 });
        while (blocks.length > 1 && blocks[blocks.length - 2].v > blocks[blocks.length - 1].v) {
          const b = blocks.pop(), a = blocks[blocks.length - 1];
          a.v = (a.v * a.w + b.v * b.w) / (a.w + b.w); a.w += b.w; a.n += b.n;
        }
      }
      let i = 0;
      blocks.forEach(b => { for (let j = 0; j < b.n; j++, i++) y[L[i]] = b.v + c[i]; });
    }
    function assignY(iters) {
      y = {};
      LY.forEach(L => { let acc = 0; L.forEach((id, i) => { if (i) acc += half(N[L[i - 1]]) + half(N[id]) + gapOf(N[L[i - 1]], N[id]); y[id] = acc; }); });
      for (let it = 0; it < iters; it++) {
        const order = it % 2 ? [...LY.keys()].reverse() : [...LY.keys()];
        order.forEach(k => {
          const L = LY[k];
          const want = [], wt = [];
          L.forEach(id => {
            const ns = N[id].up.concat(N[id].dn, N[id].xw || []);
            if (!ns.length) { want.push(y[id]); wt.push(0.01); return; }
            let s = 0, w = 0;
            ns.forEach(([n, ww]) => { s += y[n] * ww; w += ww; });
            want.push(s / w); wt.push(w);
          });
          project(L, want, wt);
        });
      }
      let len = 0;  // 노선이 위아래로 움직인 거리(무게 곱)
      Object.values(N).forEach(n => n.dn.forEach(([v, w]) => len += Math.abs(y[n.id] - y[v]) * w));
      return len;
    }
    // 여러 노선 순서에서 출발해 보고, 엇갈림과 위아래 이동이 가장 적은 배치를 고른다(난수 씨앗 고정이라 늘 같은 결과)
    let seed = 20261108;
    const rnd = () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let r = Math.imul(seed ^ seed >>> 15, 1 | seed); r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r; return ((r ^ r >>> 14) >>> 0) / 4294967296; };
    let bestS = Infinity, bestLY = null;
    for (let trial = 0; trial < 40; trial++) {
      const ord = LINES.map(l => l.id);
      if (trial) for (let i = ord.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [ord[i], ord[j]] = [ord[j], ord[i]]; }
      const rk = {}; ord.forEach((id, i) => rk[id] = i);
      const c = orderFrom(rk);
      const s = c * 400 + assignY(40);
      if (s < bestS) { bestS = s; bestLY = LY.map(L => L.slice()); }
    }
    LY = bestLY; setPos(); assignY(120);

    // 5. 환승역 안 노선 자리: 들어오고 나가는 이웃의 높이 순서대로
    const slot = {};
    ids.forEach(s => {
      const n = N[s];
      if (n.lines.length < 2) { slot[s] = { [n.lines[0]]: 0 }; return; }
      const key = {};
      n.lines.forEach(l => {
        const ns = n.up.concat(n.dn).filter(x => x[2] === l).map(x => y[x[0]]);
        key[l] = ns.length ? ns.reduce((a, b) => a + b, 0) / ns.length : y[s];
      });
      const ord = n.lines.slice().sort((a, b) => key[a] - key[b] || LBY[a].ix - LBY[b].ix);
      slot[s] = {};
      ord.forEach((l, i) => slot[s][l] = (i - (ord.length - 1) / 2) * G);
    });

    return { N, chains, y, slot, layer, K, ids };
  }

  function metroLayout(W) {
    if (!metroCore) metroCore = buildCore();
    const { N, chains, y, slot, layer, K, ids } = metroCore;
    // 6. 가로 위치와 노선 경로(가로, 45도, 세로만 쓰고 모서리를 둥글린다)
    const ML = 64, MR = 176;
    const CW = K ? Math.max(70, (W - ML - MR) / K) : 0;
    const X = id => ML + N[id].layer * CW;
    const route = (l, p) => {
      const seq = [p[0]];
      for (let i = 1; i < p.length; i++) chains[l.id + '|' + p[i - 1] + '|' + p[i]].slice(1).forEach(id => seq.push(id));
      const pts = seq.map(id => [X(id), y[id] + (N[id].slug ? slot[id][l.id] : 0)]);
      const v = [pts[0]];
      for (let i = 1; i < pts.length; i++) {
        const p = pts[i - 1], q = pts[i], dy = q[1] - p[1], a = Math.abs(dy);
        if (a > 0.5) {
          const xm = (p[0] + q[0]) / 2, dx = q[0] - p[0];
          if (a <= dx - 30) v.push([xm - a / 2, p[1]], [xm + a / 2, q[1]]);
          else v.push([xm, p[1]], [xm, q[1]]);
        }
        v.push(q);
      }
      // 같은 방향으로 이어지는 점 빼기
      const s2 = [v[0]];
      for (let i = 1; i < v.length; i++) {
        const a = s2[s2.length - 1], b = v[i];
        if (Math.hypot(b[0] - a[0], b[1] - a[1]) < 0.5) continue;
        if (s2.length >= 2) {
          const o = s2[s2.length - 2];
          const cr = (a[0] - o[0]) * (b[1] - a[1]) - (a[1] - o[1]) * (b[0] - a[0]);
          if (Math.abs(cr) < 0.5 && (a[0] - o[0]) * (b[0] - a[0]) + (a[1] - o[1]) * (b[1] - a[1]) > 0) { s2[s2.length - 1] = b; continue; }
        }
        s2.push(b);
      }
      return s2;
    };
    // 노선마다 갈래 선 여러 줄. 첫 줄(본선)의 끝역에 노선 이름표를 먼저 붙여 본다
    const lines = LINES.map(l => ({ l, polys: l.paths.map(p => route(l, p)), first: l.paths[0][0], last: l.paths[0][l.paths[0].length - 1] }));
    const stations = ids.map(s => ({ slug: s, x: X(s), y: y[s], k: N[s].lines.length, hh: markerHalf(N[s].lines.length), layer: layer[s] }));
    // 주요 환승 연결: 두 역 가운데를 잇는 완만한 곡선(점선)
    const xls = XLM.map(([a, b]) => {
      const x1 = X(a), y1 = y[a], x2 = X(b), y2 = y[b], xm = (x1 + x2) / 2;
      const c = [[x1, y1], [xm, y1], [xm, y2], [x2, y2]];
      const pts = [];
      for (let i = 0; i <= 24; i++) {
        const u = i / 24, w0 = (1 - u) ** 3, w1 = 3 * u * (1 - u) ** 2, w2 = 3 * u * u * (1 - u), w3 = u ** 3;
        pts.push([w0 * c[0][0] + w1 * c[1][0] + w2 * c[2][0] + w3 * c[3][0], w0 * c[0][1] + w1 * c[1][1] + w2 * c[2][1] + w3 * c[3][1]]);
      }
      return { a, b, c, pts };
    });
    return { W, K, CW, lines, stations, slot, xls };
  }

  function roundedPath(v, r) {
    let d = 'M' + v[0][0].toFixed(1) + ',' + v[0][1].toFixed(1);
    for (let i = 1; i < v.length - 1; i++) {
      const a = v[i - 1], b = v[i], c = v[i + 1];
      const l1 = Math.hypot(b[0] - a[0], b[1] - a[1]), l2 = Math.hypot(c[0] - b[0], c[1] - b[1]);
      const rr = Math.min(r, l1 / 2, l2 / 2);
      const p1 = [b[0] - (b[0] - a[0]) / l1 * rr, b[1] - (b[1] - a[1]) / l1 * rr];
      const p2 = [b[0] + (c[0] - b[0]) / l2 * rr, b[1] + (c[1] - b[1]) / l2 * rr];
      d += ' L' + p1[0].toFixed(1) + ',' + p1[1].toFixed(1) + ' Q' + b[0].toFixed(1) + ',' + b[1].toFixed(1) + ' ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1);
    }
    const e = v[v.length - 1];
    return d + ' L' + e[0].toFixed(1) + ',' + e[1].toFixed(1);
  }
  function inkColor(hex) {
    const n = parseInt(hex.slice(1), 16), r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    const L = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    const lum = 0.2126 * L(r) + 0.7152 * L(g) + 0.0722 * L(b);
    return (1.05 / (lum + 0.05)) >= 4.5 ? '#fff' : '#1d1d1f';
  }

  // 이름표 자리 고르기: 다른 이름표, 역 표시, 노선과 덜 겹치는 후보
  function placeLabels(M, labels, tags) {
    const W = M.W;
    const samples = [];  // 노선 위 4px 간격 점: x, y, 노선 번호
    M.lines.forEach((L, li) => L.polys.forEach(v => {
      for (let i = 1; i < v.length; i++) {
        const a = v[i - 1], b = v[i], len = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.max(1, Math.round(len / 4));
        for (let j = 0; j <= n; j++) samples.push(a[0] + (b[0] - a[0]) * j / n, a[1] + (b[1] - a[1]) * j / n, li);
      }
    }));
    M.xls.forEach(x => x.pts.forEach(p => samples.push(p[0], p[1], -1)));  // 환승 연결 점선도 피하되, 실선 노선보다 가볍게 본다
    const marks = M.stations.map(s => [s.x - (s.k > 1 ? RX : RS + 2), s.y - s.hh, s.x + (s.k > 1 ? RX : RS + 2), s.y + s.hh]);
    const ov = (a, b) => Math.max(0, Math.min(a[2], b[2]) - Math.max(a[0], b[0])) * Math.max(0, Math.min(a[3], b[3]) - Math.max(a[1], b[1]));
    // 이름표는 모든 노선을 피하고, 노선 이름표는 다른 노선만 피하되 자기 노선 가까이에 붙는다
    function lineHits(r, own) {
      let c = 0, near = false;
      const pad = own == null ? 3 : 7;
      for (let i = 0; i < samples.length; i += 3) {
        const x = samples[i], yy = samples[i + 1];
        if (x > r[0] - pad && x < r[2] + pad && yy > r[1] - pad && yy < r[3] + pad) c += samples[i + 2] === -1 ? 0.3 : samples[i + 2] !== own ? 1 : (x > r[0] && x < r[2] && yy > r[1] && yy < r[3] ? 0.3 : 0);
        if (own != null && !near && samples[i + 2] === own && x > r[0] - 26 && x < r[2] + 26 && yy > r[1] - 26 && yy < r[3] + 26) near = true;
      }
      return c + (own != null && !near ? 6 : 0);
    }
    function cost(r, self, base, lw) {
      let c = base;
      if (r[0] < 4) c += (4 - r[0]) * 60;
      if (r[2] > W - 4) c += (r[2] - W + 4) * 60;
      labels.concat(tags).forEach(o => { if (o !== self && o.r) c += ov(r, o.r) * 3; });
      marks.forEach(m => c += ov(r, m) * 4);
      c += lineHits(r, self.li) * lw;
      if (self.s) {  // 역 이름표: 다른 역이 자기 역보다 가까우면 어느 역 이름인지 헷갈린다
        const dist = s => Math.hypot(Math.max(r[0] - s.x, 0, s.x - r[2]), Math.max(r[1] - s.y, 0, s.y - r[3]));
        const own = dist(self.s);
        let other = Infinity;
        M.stations.forEach(s => { if (s !== self.s) other = Math.min(other, dist(s)); });
        if (other < own + 8) c += 60 + (own + 8 - other) * 4;
      }
      return c;
    }
    function best(item) {
      let bc = Infinity, br = null, bk = null;
      item.cands.forEach(([r, base, kind]) => { const c = cost(r, item, base, item.lw); if (c < bc) { bc = c; br = r; bk = kind; } });
      item.r = br; item.kind = bk;
    }
    for (let pass = 0; pass < 4; pass++) {
      labels.forEach(best);
      tags.forEach(best);
    }
  }

  /* ---------- 서재에서 옮긴 배치 코드 끝 ---------- */
  window.__PM_LAYOUT = { metroLayout, placeLabels, roundedPath, inkColor, markerHalf, G, RS, RX, LBY, STATION_LINES };
})();
