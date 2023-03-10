import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { CartItem as CartItemType } from '../../types/cartItem';
import getColorName from '../../utils/getParamValue';
import getParamLabel from '../../utils/getParamLabel';
import './CartItem.css';
import { Button } from '@alfalab/core-components/button';
import { MinusCircleMIcon } from '@alfalab/icons-glyph/MinusCircleMIcon';
import { AddCircleMIcon } from '@alfalab/icons-glyph/AddCircleMIcon';
import { TrashCanMIcon } from '@alfalab/icons-glyph/TrashCanMIcon';
import { useAppDispatch } from '../../store';
import {
  drawerClosed,
  itemDeleted,
  itemMinused,
  itemPlused,
} from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import { Amount } from '@alfalab/core-components/amount';

type CartItemProps = {
  item: CartItemType;
};

function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const {
    description: { preview, title, price, id },
    totalCount,
    totalPrice,
  } = item;

  const handlePlus = () => {
    dispatch(itemPlused(item));
  };

  const handleMinus = () => {
    if (totalCount > 1) {
      dispatch(itemMinused(item));
    } else {
      handleDelete();
    }
  };

  const handleDelete = () => {
    dispatch(itemDeleted(item));
  };

  const handleTitleClick = () => {
    dispatch(drawerClosed());
  };

  return (
    <div className="cart-item">
      <img className="cart-item__image" src={preview} alt={title} />

      <Link
        to={`/item/${id}`}
        className="cart-item__title"
        onClick={handleTitleClick}
      >
        <Typography.Text view="primary-medium" weight="medium">
          {title}
        </Typography.Text>
      </Link>

      <Space direction="vertical" size={0} className="cart-item__params">
        {Object.entries(item.params).map(([key, value]) => (
          <Typography.Text key={key} view="secondary-small">{`${getParamLabel(
            key,
          )}: ${getColorName(value)}`}</Typography.Text>
        ))}
      </Space>

      <div className="cart-item__quantity">
        <Button
          view="ghost"
          onClick={handleMinus}
          className="cart-item__button cart-item__quantity-button cart-item__quantity-button_type_minus"
        >
          <MinusCircleMIcon />
        </Button>
        {`${totalCount}??????.`}
        <Button
          view="ghost"
          onClick={handlePlus}
          className="cart-item__button cart-item__quantity-button cart-item__quantity-button_type_plus"
        >
          <AddCircleMIcon />
        </Button>
      </div>

      <Typography.Text
        view="primary-medium"
        className="cart-item__cost"
        color="accent"
      >
        <Amount value={totalPrice} currency="RUR" minority={1} />
      </Typography.Text>

      <Button
        view="ghost"
        onClick={handleDelete}
        className="cart-item__delete-button cart-item__button"
      >
        <TrashCanMIcon />
      </Button>
    </div>
  );
}

export default CartItem;
