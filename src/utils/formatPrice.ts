export default function formatPrice(price: number) {
  const SPACE = ' ';
  const DEVIDER = ',';
  const SYM = '₽';

  const digits = price.toString();
  const length = digits.includes('.') ? digits.indexOf('.') : digits.length;
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
