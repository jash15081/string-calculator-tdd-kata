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
  it('throws exception when a negative number is passed', () => {
    expect(() => add('1,-2')).toThrow('negatives not allowed: -2');
  });
  it('throws exception with all negative numbers listed', () => {
    expect(() => add('1,-2,3,-5')).toThrow('negatives not allowed: -2, -5');
  });
  it('ignores numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2);
  });
  it('includes number 1000 (boundary case)', () => {
    expect(add('2,1000')).toBe(1002);
  });
});
