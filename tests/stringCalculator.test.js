const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  it('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
  it('returns the number itself if only one number is provided', () => {
    expect(add('1')).toBe(1);
  });
  it('returns the sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });
  it('returns the sum of multiple comma-separated numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });
  it('returns the sum when newlines are used as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });
  it('supports custom single-character delimiter using //[delimiter]\\n syntax', () => {
    expect(add('//;\n1;2')).toBe(3);
  });
});
