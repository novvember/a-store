import { CartItem, ProductParams } from '../types/cartItem';
import { FullProduct } from '../types/product';

export default function buidCartItem(
  { id, title, preview, price }: FullProduct,
  params: ProductParams,
): CartItem {
  const item: CartItem = {
    description: { id, title, preview, price },
    params,
    quantity: 1,
  };

  return item;
}
