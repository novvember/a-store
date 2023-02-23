import { Space } from '@alfalab/core-components/space';
import { useAppSelector } from '../../store';
import { selectCartItems } from '../../store/cartSlice';
import CartItem from '../cart-item/CartItem';
import { Divider } from '@alfalab/core-components/divider';

function CartList() {
  const items = useAppSelector(selectCartItems);

  return (
    <Space direction="vertical" divider={<Divider />}>
      {items.map((item) => (
        <CartItem key={item.description.id} item={item} />
      ))}
    </Space>
  );
}

export default CartList;
