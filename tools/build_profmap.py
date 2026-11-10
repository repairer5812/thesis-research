#!/usr/bin/env python3
"""논문 노선도(profmap.html) 데이터 만들기.

입력
- tools/landmarks.json: 노선과 역(분야별 대표 논문)
- tools/landmarks_s2.json: Semantic Scholar에서 받은 발표일, 인용 수, 역 논문끼리의 인용(fetch_landmarks.py)
- tools/prof_papers.json: 교수님 논문(2023년 이후 인용 상위 5편)
- tools/prof_lines.json: 교수님 논문마다 노선(line)과 가장 가까운 역(near)

노선 그리기 규칙(사람 판단 없이 인용 관계로 정한다)
- 노선 안 역을 발표일 순으로 놓는다.
- 각 역의 앞 역은 같은 노선의 앞선 역 가운데 그 논문이 인용한 역이다. 중요 인용(isInfluential)을 먼저 보고, 그중 가장 최근 역을 고른다.
  인용한 역이 없으면 같은 노선에서 바로 앞 날짜의 역에 잇고 'order'로 표시한다.
- 이렇게 생긴 나무를 가장 긴 줄기부터 선으로 나눈다(paths).
- 환승 연결(점선): 노선을 같이 쓰지 않는 두 역 사이의 중요 인용. 인용한 역마다 가장 많이 인용된 한 역만 남긴다.

출력: assets/profmap.js (window.PROFMAP)
"""
import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--papers', default=os.path.join(HERE, 'prof_papers.json'))
    ap.add_argument('--lines', default=os.path.join(HERE, 'prof_lines.json'))
    ap.add_argument('--out', default=os.path.join(ROOT, 'assets', 'profmap.js'))
    a = ap.parse_args()

    lm = json.load(open(os.path.join(HERE, 'landmarks.json'), encoding='utf-8'))
    s2 = json.load(open(os.path.join(HERE, 'landmarks_s2.json'), encoding='utf-8'))
    S = s2['papers']
    meta = {p['slug']: p for p in lm['papers']}
    miss = [s for s in meta if s not in S or 'refs' not in S[s]]
    if miss:
        sys.exit('Semantic Scholar 자료가 없는 역: ' + ', '.join(miss))
    date = lambda s: meta[s].get('date') or S[s].get('date') or str(meta[s].get('year') or S[s]['year'])
    year = lambda s: meta[s].get('year') or S[s]['year']
    refs = {s: {r['to']: r['inf'] for r in S[s]['refs']} for s in meta}

    lines, lines_of = [], {}
    for p in lm['papers']:
        for l in p['lines']:
            lines_of.setdefault(p['slug'], []).append(l)
    for L in lm['lines']:
        st = sorted([s for s in meta if L['id'] in meta[s]['lines']], key=lambda s: (date(s), s))
        prev, kind = {}, {}
        for i, s in enumerate(st):
            if not i:
                continue
            before = [t for t in st[:i] if date(t) < date(s) or (date(t) == date(s) and t < s)]
            cited = [t for t in before if t in refs[s]]
            if cited:
                inf = [t for t in cited if refs[s][t]]
                pick = max(inf or cited, key=lambda t: (date(t), S[t]['cites'] or 0))
                prev[s], kind[s] = pick, 'influential' if inf else 'cites'
            else:
                prev[s], kind[s] = before[-1], 'order'
        kids = {s: [] for s in st}
        for s, p in prev.items():
            kids[p].append(s)
        size = {}

        def sz(s):
            size[s] = 1 + sum(sz(c) for c in kids[s])
            return size[s]
        sz(st[0])
        paths = []

        def walk(s, path):
            path.append(s)
            ks = sorted(kids[s], key=lambda c: (-size[c], date(c)))
            if not ks:
                paths.append(path)
                return
            walk(ks[0], path)
            for c in ks[1:]:
                walk(c, [s])
        walk(st[0], [])
        lines.append({'id': L['id'], 'name': L['name'], 'color': L['color'], 'desc': L['desc'], 'st': st,
                      'paths': [p for p in paths if len(p) > 1] or [[st[0]]],
                      'links': {s: [prev[s], kind[s]] for s in prev}})

    xl = []
    for s in meta:
        best = None
        for t, inf in refs[s].items():
            if not inf or set(lines_of[s]) & set(lines_of[t]) or date(t) >= date(s):
                continue
            if best is None or (S[t]['cites'] or 0) > (S[best]['cites'] or 0):
                best = t
        if best:
            xl.append([best, s, 1])
    # 점선이 많으면 노선도가 엉킨다. 인용된 역마다 하나, 인용 수가 큰 순으로 14개만 남긴다
    xl.sort(key=lambda x: -(S[x[0]]['cites'] or 0))
    seen, keep = set(), []
    for x in xl:
        if x[0] in seen:
            continue
        seen.add(x[0]); keep.append(x)
    xl = keep[:14]

    papers = {s: {'l': meta[s]['short'], 'y': year(s), 'd': date(s), 'c': S[s]['cites'] or 0, 't': S[s]['title'],
                  'v': S[s].get('venue') or '', 'u': ('https://arxiv.org/abs/' + S[s]['arxiv']) if S[s].get('arxiv') else
                  'https://www.semanticscholar.org/paper/' + S[s]['paperId']} for s in meta}

    pp = json.load(open(a.papers, encoding='utf-8'))
    cls = json.load(open(a.lines, encoding='utf-8'))['papers'] if os.path.exists(a.lines) else {}
    line_ids = {l['id'] for l in lines}
    profs, missing, bad = [], [], []
    for p in pp['profs']:
        rows = []
        for w in p.get('papers', []):
            c = cls.get(w.get('openalex') or w['title'])
            if not c:
                missing.append(p['name'] + ': ' + w['title'])
                continue
            if c['line'] != 'other' and (c['line'] not in line_ids or (c.get('near') and (c['near'] not in meta or c['line'] not in meta[c['near']]['lines']))):
                bad.append('%s: %s (%s, %s)' % (p['name'], w['title'][:60], c['line'], c.get('near')))
                continue
            rows.append({'t': w['title'], 'y': w.get('year'), 'v': w.get('venue') or '', 'c': w.get('cites') or 0,
                         'u': w.get('url') or '', 'line': c['line'], 'near': c.get('near') or '', 'why': c.get('why', '')})
        profs.append({'name': p['name'], 'dept': p['dept'], 'lab': p.get('lab') or '', 'url': p.get('lab_url') or '', 'papers': rows})
    if missing or bad:
        sys.exit('분류가 없는 논문 %d편, 노선과 역이 안 맞는 논문 %d편\n  ' % (len(missing), len(bad)) + '\n  '.join(missing + bad))

    out = {'made': pp.get('made', ''), 's2_made': s2.get('made', ''), 'papers': papers, 'lines': lines, 'xl': xl, 'profs': profs}
    js = '// tools/build_profmap.py가 만든 파일. 직접 고치지 않는다\nwindow.PROFMAP = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n'
    open(a.out, 'w', encoding='utf-8').write(js)
    n = sum(len(p['papers']) for p in profs)
    o = sum(1 for p in profs for w in p['papers'] if w['line'] == 'other')
    print('노선 %d개, 역 %d개, 환승 연결 %d개, 교수 %d명, 논문 %d편(노선 밖 %d편)' % (len(lines), len(papers), len(xl), len(profs), n, o))


if __name__ == '__main__':
    main()
