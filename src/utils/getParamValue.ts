const PARAM_VALUES: Record<string, string> = {
  white: 'Белый',
  black: 'Черный',
  red: 'Красный',
  green: 'Зеленый',
  gray: 'Серый',
};

export default function getParamValue(value: string) {
  return PARAM_VALUES[value] ?? value;
}
