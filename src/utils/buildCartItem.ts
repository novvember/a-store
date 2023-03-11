import { CartItem, ProductParams } from '../types/cartItem';
import { FullProduct } from '../types/product';

export default function buildCartItem(
  { id, title, preview, price }: FullProduct,
  params: ProductParams,
): CartItem {
  const item: CartItem = {
    description: { id, title, preview, price },
    params: { ...params },
    totalCount: 1,
    totalPrice: price,
  };

  return item;
}
