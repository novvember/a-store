const SPACE = ' ';
const DEVIDER = ',';
const SYM = '₽';

export default function formatPrice(price: number) {
  const digits = price.toString();
  const deviderPos = digits.indexOf('.');
  const length = deviderPos >= 0 ? deviderPos : digits.length;
  const res = [];

  for (let i = 0; i < length; i++) {
    res.push(digits[i]);

    if (length > 4 && i !== length - 1 && (length - i - 1) % 3 === 0) {
      res.push(SPACE);
    }
  }

  if (length !== digits.length) {
    res.push(DEVIDER);
    res.push(digits[length + 1] ?? 0);
    res.push(digits[length + 2] ?? 0);
  }

  res.push(SPACE);
  res.push(SYM);

  return res.join('');
}
