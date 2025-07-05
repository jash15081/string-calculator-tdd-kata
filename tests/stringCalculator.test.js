const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  it('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
  it('returns the number itself if only one number is provided', () => {
    expect(add('1')).toBe(1);
  });
});
