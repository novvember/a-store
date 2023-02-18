import getColorName from './getColorName';

describe('getColorName function', () => {
  it('should handle known color', () => {
    expect(getColorName('white')).toBe('Белый');
    expect(getColorName('black')).toBe('Черный');
    expect(getColorName('red')).toBe('Красный');
    expect(getColorName('green')).toBe('Зеленый');
    expect(getColorName('gray')).toBe('Серый');
  });

  it('should return initial value if unknown color', () => {
    expect(getColorName('test')).toBe('test');
  });
});
