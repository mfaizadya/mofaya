import { PORTFOLIO_DATA } from './portfolioData';

function assertEqual<T>(actual: T, expected: T, message: string) {
  if (actual !== expected) throw new Error(`${message}: expected ${expected}, got ${actual}`);
}

function assertOk(value: boolean, message: string) {
  if (!value) throw new Error(message);
}

// ponytail: self-check to ensure ID and EN datasets remain synchronized across future additions
function checkPortfolioData() {
  const idData = PORTFOLIO_DATA.id;
  const enData = PORTFOLIO_DATA.en;

  assertEqual(idData.projects.length, enData.projects.length, 'Projects count mismatch');
  assertEqual(idData.experiences.length, enData.experiences.length, 'Experiences count mismatch');
  assertEqual(idData.certifications.length, enData.certifications.length, 'Certifications count mismatch');
  assertEqual(idData.achievements.length, enData.achievements.length, 'Achievements count mismatch');

  // Verify project IDs match
  idData.projects.forEach((p, idx) => {
    assertEqual(p.id, enData.projects[idx].id, `Project ID mismatch at index ${idx}`);
    assertOk(enData.projects[idx].summary.length > 0, `English summary empty for project ${p.id}`);
  });

  // Verify experience IDs match
  idData.experiences.forEach((e, idx) => {
    assertEqual(e.id, enData.experiences[idx].id, `Experience ID mismatch at index ${idx}`);
    assertOk(enData.experiences[idx].description.length > 0, `English description empty for experience ${e.id}`);
  });

  console.log('✅ Portfolio data self-check passed: ID and EN datasets are fully synchronized!');
}

checkPortfolioData();
