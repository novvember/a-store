import { Space } from '@alfalab/core-components/space';
import { useAppSelector } from '../../store';
import { selectCartItems, selectTotalCartCost } from '../../store/cartSlice';
import CartItem from '../cart-item/CartItem';
import { Divider } from '@alfalab/core-components/divider';
import { Amount } from '@alfalab/core-components/amount';
import { Typography } from '@alfalab/core-components/typography';

function CartList() {
  const items = useAppSelector(selectCartItems);
  const totalCost = useAppSelector(selectTotalCartCost);

  return (
    <Space direction="vertical" divider={<Divider />} fullWidth>
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
