import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';
import { Drawer } from '@alfalab/core-components/drawer';

import './Header.css';
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Menu from '../menu/Menu';
import CartButton from '../cart-button/CartButton';
import { useAppDispatch, useAppSelector } from '../../store';
import { drawerToggled, selectIsCartOpened } from '../../store/cartSlice';
import CartDrawer from '../cart-drawer/CartDrawer';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const dispatch = useAppDispatch();
  const isCartOpened = useAppSelector(selectIsCartOpened);

  const toggleMenu = useCallback(() => setIsMenuOpened((state) => !state), []);

  const toogleCart = () => dispatch(drawerToggled());

  return (
    <header className="header">
      <Link to="/">
        <Typography.TitleResponsive
          view="medium"
          tag="h1"
          color="accent"
          weight="bold"
        >
          A-Store
        </Typography.TitleResponsive>
      </Link>

      <Button view="ghost" onClick={toggleMenu}>
        <Typography.TitleResponsive view="medium" tag="div">
          <BurgerMIcon />
          <span className="header__menu-text"> меню</span>
        </Typography.TitleResponsive>
      </Button>

      <Drawer
        open={isMenuOpened}
        onClose={toggleMenu}
        className="header__drawer"
      >
        <Button
          view="ghost"
          className="header__close-button header__close-button_theme_dark"
          onClick={toggleMenu}
        >
          <CrossMIcon />
        </Button>
        <Menu onClick={toggleMenu} />
      </Drawer>

      <CartButton />

      <Drawer open={isCartOpened} onClose={toogleCart} className="header__cart">
        <Button
          view="ghost"
          className="header__close-button"
          onClick={toogleCart}
        >
          <CrossMIcon />
        </Button>
        <CartDrawer onClose={toogleCart} />
      </Drawer>
    </header>
  );
}

export default Header;
