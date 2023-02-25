import { useAppDispatch, useAppSelector } from '../../store';
import { drawerToggled, selectCartCount } from '../../store/cartSlice';
import { SupermarketTrolleyMIcon } from '@alfalab/icons-glyph/SupermarketTrolleyMIcon';

import './CartButton.css';
import classNames from 'classnames';
import { Badge } from '@alfalab/core-components/badge';
import { useLocation } from 'react-router-dom';

function CartButton() {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);

  const location = useLocation();

  const isVisible = cartCount > 0 && !location.pathname.includes('cart');

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
      <Badge
        view="count"
        content={cartCount}
        height={24}
        className="cart-button__count"
        visibleIconOutline
      />
    </button>
  );
}

export default CartButton;
