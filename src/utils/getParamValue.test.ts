import getParamValue from './getParamValue';

describe('getParamValue function', () => {
  it('should handle known color', () => {
    expect(getParamValue('white')).toBe('Белый');
    expect(getParamValue('black')).toBe('Черный');
    expect(getParamValue('red')).toBe('Красный');
    expect(getParamValue('green')).toBe('Зеленый');
    expect(getParamValue('gray')).toBe('Серый');
  });

  it('should return initial value if unknown color', () => {
    expect(getParamValue('test')).toBe('test');
  });
});
