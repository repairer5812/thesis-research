#!/usr/bin/env python3
"""논문 노선도(profmap.html) 데이터 만들기.

입력
- 유명 논문 노선도: AI 학습관 논문 서재의 catalog/papermap.json, catalog/papers/*.json
  (~/dev/ai-hakseupgwan/library/catalog, 다른 곳이면 --library로 준다)
- 교수 논문: tools/prof_papers.json (OpenAlex에서 2023년 이후 인용 상위 5편)
- 갈래 분류: tools/prof_lines.json (논문 OpenAlex ID마다 노선 id 또는 "other", 까닭 한 줄)

출력: assets/profmap.js (window.PROFMAP)
서재 build.ts의 mapData와 같은 규칙(원문이 있는 논문만, MAP_LABEL 짧은 이름)으로 노선을 거른다.
"""
import argparse
import glob
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
# 서재 labels.ts의 MAP_LABEL과 같게 둔다
MAP_LABEL = {
    'graphrag': 'GraphRAG', 'ldm': 'LDM', 'cot': 'CoT', 'vllm': 'vLLM',
    'tracing-representation-geometry': 'Tracing Geometry', 'reasoning-trajectories': 'Reasoning Trajectories',
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--library', default=os.path.expanduser('~/dev/ai-hakseupgwan/library/catalog'))
    ap.add_argument('--papers', default=os.path.join(HERE, 'prof_papers.json'))
    ap.add_argument('--lines', default=os.path.join(HERE, 'prof_lines.json'))
    ap.add_argument('--out', default=os.path.join(ROOT, 'assets', 'profmap.js'))
    a = ap.parse_args()

    pm = json.load(open(os.path.join(a.library, 'papermap.json'), encoding='utf-8'))
    full = set()
    for f in glob.glob(os.path.join(a.library, 'papers', '*.json')):
        d = json.load(open(f, encoding='utf-8'))
        if d.get('availability') == 'full':
            full.add(d['slug'])
    meta = {p['slug']: p for p in pm['papers']}
    has = lambda s: s in full and s in meta

    lines = []
    for l in pm['lines']:
        st = [x['slug'] for x in l['stations'] if has(x['slug'])]
        if not st:
            continue
        paths = [[s for s in p if has(s)] for p in (l.get('paths') or [st])]
        paths = [p for p in paths if len(p) > 1] or [[st[0]]]
        lines.append({'id': l['id'], 'name': l['name'], 'color': l['color'], 'desc': l.get('desc', ''), 'st': st, 'paths': paths})
    on_map = {s for l in lines for s in l['st']}
    papers = {s: {'l': MAP_LABEL.get(s, meta[s]['short']), 'y': meta[s]['year'], 'd': meta[s].get('date') or str(meta[s]['year'])}
              for s in meta if s in on_map}
    xl = [[x['from'], x['to'], 1 if x.get('main') else 0] for x in pm.get('transfer_links', []) if has(x['from']) and has(x['to'])]

    pp = json.load(open(a.papers, encoding='utf-8'))
    cls_path = a.lines
    cls = json.load(open(cls_path, encoding='utf-8'))['papers'] if os.path.exists(cls_path) else {}
    line_ids = {l['id'] for l in lines} | {'other'}
    profs, missing = [], []
    for p in pp['profs']:
        rows = []
        for w in p.get('papers', []):
            c = cls.get(w.get('openalex') or w['title'])
            if not c:
                missing.append(p['name'] + ': ' + w['title'])
                continue
            if c['line'] not in line_ids:
                sys.exit('알 수 없는 노선 id: %s (%s)' % (c['line'], w['title']))
            rows.append({'t': w['title'], 'y': w.get('year'), 'v': w.get('venue') or '', 'c': w.get('cites') or 0,
                         'u': w.get('url') or '', 'line': c['line'], 'near': c.get('near') or '', 'why': c.get('why', '')})
        profs.append({'name': p['name'], 'dept': p['dept'], 'lab': p.get('lab') or '', 'url': p.get('lab_url') or '', 'papers': rows})
    if missing:
        sys.exit('분류가 없는 논문 %d편:\n  ' % len(missing) + '\n  '.join(missing))

    out = {'made': pp.get('made', ''), 'rule': pp.get('rule', ''), 'map_made': pm.get('made', ''),
           'papers': papers, 'lines': lines, 'xl': xl, 'profs': profs}
    js = '// tools/build_profmap.py가 만든 파일. 직접 고치지 않는다\nwindow.PROFMAP = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n'
    open(a.out, 'w', encoding='utf-8').write(js)
    n = sum(len(p['papers']) for p in profs)
    print('노선 %d개, 역 %d개, 교수 %d명, 논문 %d편' % (len(lines), len(papers), len(profs), n))


if __name__ == '__main__':
    main()
