export default function getColorName(color: string) {
  const COLOR_NAMES: Record<string, string> = {
    white: 'Белый',
    black: 'Черный',
    red: 'Красный',
    green: 'Зеленый',
    gray: 'Серый',
  };

  return COLOR_NAMES[color] ?? color;
}
