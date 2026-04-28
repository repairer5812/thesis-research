// 추천 논문 카드 — 객관 지표 중심
// 의존: data.js (RECOMMENDATIONS, CATEGORY_LABELS, VENUE_TIER_LABELS, CLOUD_BASE_URL, ...)

function scoreColor(s) {
  if (s >= 70) return '#7a0019';   // S — 진한 크림슨
  if (s >= 40) return '#b91c52';   // A — 크림슨
  if (s >= 20) return '#1e2a4a';   // B — 네이비
  return '#948b7c';                // C — 회색
}

function scoreLabel(s) {
  if (s >= 70) return 'S';
  if (s >= 40) return 'A';
  if (s >= 20) return 'B';
  return 'C';
}

function renderRecCard(r, opts = {}) {
  const m = r.metrics || {};
  const s = m.score || 0;
  const sColor = scoreColor(s);
  const sLabel = scoreLabel(s);

  // 학교 배지 (학교 색상 우선)
  const schoolColor = opts.schoolColor || null;
  const schoolBadgeStyle = schoolColor ? `style="background:${schoolColor}"` : '';

  // deptType 배지
  const deptBadge = r.deptType === '특수'
    ? `<span class="dept-badge dept-special">🏛️ 특수</span>`
    : `<span class="dept-badge dept-general">🎓 일반</span>`;

  // 객관 지표 행
  const metricsRow = [];
  if (m.venue) {
    const tier = m.venueTier || '';
    metricsRow.push(`<span class="metric-pill metric-venue tier-${tier.toLowerCase()}">${tier ? `<b>${tier}</b>` : ''} ${m.venue}</span>`);
  }
  if (m.citations > 0) {
    metricsRow.push(`<span class="metric-pill metric-cite">📊 ${m.citations} cites</span>`);
  }
  if (m.githubUrl) {
    const stars = m.githubStars > 0 ? ` ${m.githubStars}⭐` : '';
    metricsRow.push(`<a class="metric-pill metric-code" href="${m.githubUrl}" target="_blank" rel="noopener">💻 Code${stars}</a>`);
  }
  if (m.award) {
    metricsRow.push(`<span class="metric-pill metric-award">🏆 ${m.award}</span>`);
  }
  if (m.arxivId) {
    metricsRow.push(`<a class="metric-pill metric-arxiv" href="https://arxiv.org/abs/${m.arxivId}" target="_blank" rel="noopener">arXiv:${m.arxivId}</a>`);
  }

  // 점수 분해 (mini 표)
  const breakdownItems = [];
  if (m.venueScore > 0) breakdownItems.push(`<span>+${m.venueScore} venue</span>`);
  if (m.citationsScore > 0) breakdownItems.push(`<span>+${m.citationsScore} cites</span>`);
  if (m.githubScore > 0) breakdownItems.push(`<span>+${m.githubScore} code</span>`);
  if (m.awardScore > 0) breakdownItems.push(`<span>+${m.awardScore} award</span>`);
  if (m.recencyScore > 0) breakdownItems.push(`<span>+${m.recencyScore} recency</span>`);
  const breakdown = breakdownItems.join(' · ') || '점수 검증 안 됨';

  // 액션 버튼 (원본 페이지로 이동 — 단일 버튼)
  const originalUrl = r.originalUrl || r.evidenceUrls?.[0] || '#';
  const originalBtn = `<a class="rec-btn rec-btn-original" href="${originalUrl}" target="_blank" rel="noopener">
    <span class="rec-btn-icon">↗</span><span>원본 보기 / 다운로드</span>
  </a>`;

  return `<article class="rec-card" data-score="${s}">
    <div class="rec-card-head">
      <div class="rec-head-left">
        <span class="rec-school" ${schoolBadgeStyle}>${r.school}</span>
        ${deptBadge}
      </div>
      <div class="rec-score-wrap" style="--score-color:${sColor}">
        <span class="rec-score-tier">${sLabel}</span>
        <span class="rec-score-value">${s}</span>
      </div>
    </div>

    <div class="rec-title">${r.title}</div>
    <div class="rec-author">${r.author}${r.authorKr ? ' · '+r.authorKr : ''}${r.year ? ' · '+r.year : ''}${r.advisor ? ' · 지도: '+r.advisor : ''}</div>

    ${metricsRow.length ? `<div class="rec-metrics-row">${metricsRow.join('')}</div>` : '<div class="rec-metrics-empty">검증된 외부 지표 없음 (학위논문만 존재)</div>'}

    <div class="rec-breakdown" title="객관 점수 분해">${breakdown}</div>

    <div class="rec-cats">
      ${(r.category || []).map(c => `<span class="cat-badge cat-${c}">${CATEGORY_LABELS[c] || c}</span>`).join('')}
    </div>

    ${r.notes ? `<details class="rec-notes"><summary>📝 검증 노트</summary><div class="rec-notes-body">${r.notes}</div></details>` : ''}

    <div class="rec-actions">
      ${originalBtn}
    </div>
  </article>`;
}

function renderRecGrid(items, containerId, opts = {}) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--color-text-muted);">조건에 맞는 논문이 없습니다.</div>`;
    return;
  }
  grid.innerHTML = items.map(r => renderRecCard(r, opts)).join('');
}

// 학교 departments 헬퍼 — 코어/도메인 두 그룹 표시 또는 폴백 처리
function renderSchoolDepts(s) {
  if (s.departmentsCore || s.departmentsDomain) {
    const core = s.departmentsCore || [];
    const domain = s.departmentsDomain || [];
    const parts = [];
    if (core.length) parts.push(`<span class="dept-core-label">🎯 AI 코어</span> ${core.join(' · ')}`);
    if (domain.length) parts.push(`<span class="dept-domain-label">📚 AI 도메인</span> ${domain.join(' · ')}`);
    return parts.join('<br>');
  }
  return (s.departments || []).join(' · ');
}
