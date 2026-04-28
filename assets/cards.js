// 추천 논문 카드 공통 렌더링
// 의존: data.js (RECOMMENDATIONS, CATEGORY_LABELS, CLOUD_BASE_URL, CLOUD_REQUIRES_PASSWORD, buildCloudUrl)

function renderRecCard(r, opts = {}) {
  const schoolColor = opts.schoolColor || null;
  const schoolBadgeStyle = schoolColor ? `style="background:${schoolColor}"` : '';

  const cloudUrl = r.pdf ? buildCloudUrl(r.pdf) : null;
  const cloudPending = !CLOUD_BASE_URL && r.pdf;
  const cloudUnsupported = !r.pdf;

  let cloudButton;
  if (cloudUrl) {
    cloudButton = `<a class="rec-btn rec-btn-cloud" href="${cloudUrl}" target="_blank" rel="noopener">
      <span class="rec-btn-icon">☁</span>
      <span>클라우드 다운로드</span>
      ${CLOUD_REQUIRES_PASSWORD ? '<span class="rec-btn-meta">🔒 비번 필요</span>' : ''}
    </a>`;
  } else if (cloudPending) {
    cloudButton = `<span class="rec-btn rec-btn-cloud-disabled" title="OpenClaw가 Nextcloud 공유 링크를 만들면 활성화됩니다">
      <span class="rec-btn-icon">☁</span>
      <span>클라우드 (준비 중)</span>
    </span>`;
  } else {
    cloudButton = `<span class="rec-btn rec-btn-cloud-disabled" title="이 논문은 외부 IP에서 PDF 자동수집 불가 — 원본 페이지에서 RISS/학내 인증 후 다운로드">
      <span class="rec-btn-icon">☁</span>
      <span>클라우드 미수집</span>
    </span>`;
  }

  const originalBtn = `<a class="rec-btn rec-btn-original" href="${r.originalUrl}" target="_blank" rel="noopener">
    <span class="rec-btn-icon">↗</span>
    <span>원본 보기</span>
  </a>`;

  return `<article class="rec-card">
    <div class="rec-card-head">
      <span class="rec-school" ${schoolBadgeStyle}>${r.school}</span>
      <span class="rec-year">${r.year}</span>
    </div>
    <div class="rec-title">${r.title}</div>
    <div class="rec-author">${r.author}</div>

    ${r.summary ? `<div class="rec-block rec-summary">
      <div class="rec-block-label">📌 핵심 내용</div>
      <div class="rec-block-text">${r.summary}</div>
    </div>` : ''}

    <div class="rec-block rec-reason">
      <div class="rec-block-label">💡 추천 이유</div>
      <div class="rec-block-text">${r.reason}</div>
    </div>

    <div class="rec-cats">
      ${r.category.map(c => `<span class="cat-badge cat-${c}">${CATEGORY_LABELS[c] || c}</span>`).join('')}
    </div>

    <div class="rec-actions">
      ${originalBtn}
      ${cloudButton}
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
