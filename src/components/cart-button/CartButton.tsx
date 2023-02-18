import { useAppDispatch, useAppSelector } from '../../store';
import { drawerToggled, selectCartCount } from '../../store/cartSlice';
import { SupermarketTrolleyMIcon } from '@alfalab/icons-glyph/SupermarketTrolleyMIcon';

import './CartButton.css';

function CartButton() {
  const dispatch = useAppDispatch();
  const cartCount = useAppSelector(selectCartCount);

  if (!cartCount) return null;

  const handleClick = () => {
    dispatch(drawerToggled());
  };

  return (
    <button className="cart-button" onClick={handleClick}>
      <span className="cart-button__icon" />
      <SupermarketTrolleyMIcon color="#fff" />
      <span className="cart-button__count">{cartCount}</span>
    </button>
  );
}

export default CartButton;
