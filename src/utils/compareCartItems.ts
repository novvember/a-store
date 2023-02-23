import { CartItem, ProductParams } from '../types/cartItem';

export default function compareCartItems(
  item1: CartItem,
  item2: CartItem,
): boolean {
  console.log('item1', item1);
  console.log('item2', item2);

  const haveSameId = item1.description.id === item2.description.id;
  console.log('haveSameId', haveSameId);

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

  console.log('haveSameParams', haveSameParams);

  if (!haveSameParams) {
    return false;
  }

  return true;
}
