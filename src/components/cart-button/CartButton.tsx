import { useAppDispatch, useAppSelector } from '../../store';
import { drawerToggled, selectCartCount } from '../../store/cartSlice';
import { SupermarketTrolleyMIcon } from '@alfalab/icons-glyph/SupermarketTrolleyMIcon';

import './CartButton.css';
import classNames from 'classnames';

function CartButton() {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);

  const isVisible = cartCount > 0;

  const handleClick = () => {
    dispatch(drawerToggled());
  };

  return (
    <button
      className={classNames('cart-button', {
        'cart-button_visible': isVisible,
      })}
      onClick={handleClick}
    >
      <span className="cart-button__icon" />
      <SupermarketTrolleyMIcon color="#fff" />
      <span className="cart-button__count">{cartCount}</span>
    </button>
  );
}

export default CartButton;
