const LABELS: Record<string, string> = {
  color: 'Цвет',
  size: 'Размер',
  stickerNumber: 'Стикер',
};

export default function getParamLabel(key: string): string {
  return LABELS[key] ?? key;
}
