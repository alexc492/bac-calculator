export function calculateBAC({ weight, sex, alcoholGrams, hours }) {
  const distributionRatio = sex === 'male' ? 0.73 : 0.66;

  const bac = ((alcoholGrams * 5.14) / (weight * distributionRatio)) - (0.015 * hours);
  return parseFloat(bac.toFixed(4));
}
