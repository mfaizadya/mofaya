import { PORTFOLIO_DATA } from './portfolioData.js';
import assert from 'node:assert';

// ponytail: self-check to ensure ID and EN datasets remain synchronized across future additions
function checkPortfolioData() {
  const idData = PORTFOLIO_DATA.id;
  const enData = PORTFOLIO_DATA.en;

  assert.strictEqual(idData.projects.length, enData.projects.length, 'Projects count mismatch');
  assert.strictEqual(idData.experiences.length, enData.experiences.length, 'Experiences count mismatch');
  assert.strictEqual(idData.certifications.length, enData.certifications.length, 'Certifications count mismatch');
  assert.strictEqual(idData.achievements.length, enData.achievements.length, 'Achievements count mismatch');

  // Verify project IDs match
  idData.projects.forEach((p, idx) => {
    assert.strictEqual(p.id, enData.projects[idx].id, `Project ID mismatch at index ${idx}`);
    assert.ok(enData.projects[idx].summary.length > 0, `English summary empty for project ${p.id}`);
  });

  // Verify experience IDs match
  idData.experiences.forEach((e, idx) => {
    assert.strictEqual(e.id, enData.experiences[idx].id, `Experience ID mismatch at index ${idx}`);
    assert.ok(enData.experiences[idx].description.length > 0, `English description empty for experience ${e.id}`);
  });

  console.log('✅ Portfolio data self-check passed: ID and EN datasets are fully synchronized!');
}

checkPortfolioData();
