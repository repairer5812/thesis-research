#!/usr/bin/env python3
"""tools/landmarks.json의 역 논문을 Semantic Scholar에서 확인해 tools/landmarks_s2.json에 저장한다.

받는 것: 제목, 발표일, 학회, 인용 수, 중요 인용 수, 참고문헌 가운데 역 논문끼리의 인용(중요 인용 표시 포함).
키 없이 쓰므로 429가 오면 기다렸다 다시 한다. 이미 받은 논문은 다시 받지 않는다(--fresh로 처음부터).
"""
import json
import os
import sys
import time
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
API = 'https://api.semanticscholar.org/graph/v1'
OUT = os.path.join(HERE, 'landmarks_s2.json')


def call(url, body=None, tries=12):
    for i in range(tries):
        req = urllib.request.Request(url, data=json.dumps(body).encode() if body is not None else None,
                                     headers={'Content-Type': 'application/json', 'User-Agent': 'thesis-research-map'})
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503, 504):
                time.sleep(min(60, 4 * (i + 1)))
                continue
            raise
        except (urllib.error.URLError, TimeoutError):
            time.sleep(5 * (i + 1))
    sys.exit('Semantic Scholar 응답 없음: ' + url)


def main():
    lm = json.load(open(os.path.join(HERE, 'landmarks.json'), encoding='utf-8'))
    old = {} if '--fresh' in sys.argv or not os.path.exists(OUT) else json.load(open(OUT, encoding='utf-8'))['papers']
    todo = [p for p in lm['papers'] if p['slug'] not in old or old[p['slug']].get('id') != p['id']]
    if todo:
        got = call(API + '/paper/batch?fields=title,year,publicationDate,venue,citationCount,influentialCitationCount,externalIds',
                   {'ids': [p['id'] for p in todo]})
        for p, g in zip(todo, got):
            if not g:
                print('못 찾음:', p['slug'], p['id'])
                continue
            old[p['slug']] = {'id': p['id'], 'paperId': g['paperId'], 'title': g['title'], 'year': g.get('year'),
                              'date': g.get('publicationDate'), 'venue': g.get('venue'), 'cites': g.get('citationCount'),
                              'influential': g.get('influentialCitationCount'), 'arxiv': (g.get('externalIds') or {}).get('ArXiv')}
    pid2slug = {v['paperId']: s for s, v in old.items()}
    # 참고문헌: 역 논문마다 references를 받아 역 논문끼리만 남긴다
    for s, v in old.items():
        if 'refs' in v:
            continue
        refs, off = [], 0
        while True:
            r = call(API + '/paper/%s/references?fields=paperId,isInfluential,intents&limit=1000&offset=%d' % (v['paperId'], off))
            refs += r.get('data') or []
            if r.get('next') is None:
                break
            off = r['next']
        v['n_refs'] = len(refs)
        v['refs'] = [{'to': pid2slug[x['citedPaper']['paperId']], 'inf': bool(x.get('isInfluential')), 'intents': x.get('intents') or []}
                     for x in refs if (x.get('citedPaper') or {}).get('paperId') in pid2slug]
        json.dump({'made': time.strftime('%Y-%m-%d'), 'source': 'Semantic Scholar Graph API', 'papers': old},
                  open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print(s, v['cites'], len(v['refs']), flush=True)
        time.sleep(1.2)
    json.dump({'made': time.strftime('%Y-%m-%d'), 'source': 'Semantic Scholar Graph API', 'papers': old},
              open(OUT, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('역 %d편 확인' % len(old))


if __name__ == '__main__':
    main()
