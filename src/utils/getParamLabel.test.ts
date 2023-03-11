import getParamLabel from './getParamLabel';

describe('getParamLabel function', () => {
  it('should return color', () => {
    expect(getParamLabel('color')).toBe('Цвет');
  });
  it('should return size', () => {
    expect(getParamLabel('size')).toBe('Размер');
  });
  it('should return stickerNumber', () => {
    expect(getParamLabel('stickerNumber')).toBe('Стикер');
  });
  it('should return key if no matching', () => {
    expect(getParamLabel('test')).toBe('test');
  });
});
