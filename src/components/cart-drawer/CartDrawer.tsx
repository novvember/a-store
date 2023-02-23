import { Button } from '@alfalab/core-components/button';
import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import CartList from '../cart-list/CartList';
import { useAppSelector } from '../../store';
import { selectCartItems, selectTotalCartCost } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import formatPrice from '../../utils/formatPrice';

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
    <Space direction="vertical">
      <Typography.TitleResponsive tag="h2" view="medium">
        Корзина
      </Typography.TitleResponsive>

      {isEmpty && <Typography.Text>Пока в корзине ничего нет</Typography.Text>}

      {!isEmpty && (
        <Space direction="vertical" size="l" align="end">
          <CartList />

          <Typography.Text view="primary-medium" weight="medium" defaultMargins>
            {`Сумма: ${formatPrice(totalCost)}`}
          </Typography.Text>
          <Button view="primary" onClick={handleButtonClick}>
            Оформить заказ
          </Button>
        </Space>
      )}
    </Space>
  );
}

export default CartDrawer;
