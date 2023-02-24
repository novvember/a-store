import { Button } from '@alfalab/core-components/button';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import CartList from '../cart-list/CartList';
import { useAppSelector } from '../../store';
import { selectCartItems, selectTotalCartCost } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Amount } from '@alfalab/core-components/amount';

type CartDrawerProps = {
  onClose: () => void;
};

function CartDrawer({ onClose }: CartDrawerProps) {
  const items = useAppSelector(selectCartItems);
  const totalCost = useAppSelector(selectTotalCartCost);
  const isEmpty = items.length === 0;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <Space direction="vertical" fullWidth>
      <Typography.TitleResponsive tag="h2" view="medium">
        Корзина
      </Typography.TitleResponsive>

      {isEmpty && <Typography.Text>Пока в корзине ничего нет</Typography.Text>}

      {!isEmpty && (
        <Space direction="vertical" size="l" fullWidth>
          <CartList />
          <Button
            view="primary"
            onClick={handleButtonClick}
            rightAddons={
              <Amount value={totalCost} currency="RUR" minority={1} />
            }
            block
          >
            Оформить заказ
          </Button>
        </Space>
      )}
    </Space>
  );
}

export default CartDrawer;
