import formatPrice from './formatPrice';

describe('formatPrice', () => {
  it('should format 1 to 1 ₽', () => {
    expect(formatPrice(1)).toBe('1 ₽');
  });
  it('should format 1000 to 1000 ₽', () => {
    expect(formatPrice(1000)).toBe('1000 ₽');
  });
  it('should format 10000 to 10 000 ₽', () => {
    expect(formatPrice(10000)).toBe('10 000 ₽');
  });
  it('should format 1000000 to 1 000 000 ₽', () => {
    expect(formatPrice(1000000)).toBe('1 000 000 ₽');
  });
  it('should format 1.09 to 1,09 ₽', () => {
    expect(formatPrice(1.09)).toBe('1,09 ₽');
  });
  it('should format 1.2 to 1,20 ₽', () => {
    expect(formatPrice(1.2)).toBe('1,20 ₽');
  });
});
