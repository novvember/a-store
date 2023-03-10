import { Space } from '@alfalab/core-components/space';
import { useAppSelector } from '../../store';
import { selectCartItems, selectTotalCartCost } from '../../store/cartSlice';
import CartItem from '../cart-item/CartItem';
import { Divider } from '@alfalab/core-components/divider';
import { Amount } from '@alfalab/core-components/amount';
import { Typography } from '@alfalab/core-components/typography';

import './CartList.css';

function CartList() {
  const items = useAppSelector(selectCartItems);
  const totalCost = useAppSelector(selectTotalCartCost);

  if (items.length === 0) {
    return null;
  }

  return (
    <Space
      direction="vertical"
      divider={<Divider />}
      fullWidth
      className="cart-list"
    >
      {items.map((item) => (
        <CartItem key={item.description.id} item={item} />
      ))}
      <Space direction="horizontal">
        <Typography.Text>Сумма:</Typography.Text>
        <Typography.Text>
          <Amount value={totalCost} currency="RUR" minority={1} />
        </Typography.Text>
      </Space>
    </Space>
  );
}

export default CartList;
