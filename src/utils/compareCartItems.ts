import { CartItem, ProductParams } from '../types/cartItem';

export default function compareCartItems(
  item1: CartItem,
  item2: CartItem,
): boolean {
  const haveSameId = item1.description.id === item2.description.id;

  if (!haveSameId) {
    return false;
  }

  const haveSameParams =
    Object.keys(item1.params).length === Object.keys(item2.params).length &&
    Object.keys(item1.params).every(
      (key) =>
        item1.params[key as keyof ProductParams] ===
        item2.params[key as keyof ProductParams],
    );

  if (!haveSameParams) {
    return false;
  }

  return true;
}
