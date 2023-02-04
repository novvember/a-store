import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { Space } from '@alfalab/core-components/space';
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';
import { Drawer } from '@alfalab/core-components/drawer';

import './Header.css';
import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';
import Menu from '../menu/Menu';

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = useCallback(() => setIsMenuOpened((state) => !state), []);

  return (
    <header className="header">
      <Link to="/">
        <Typography.TitleResponsive
          view="xlarge"
          tag="h1"
          color="accent"
          weight="bold"
        >
          A-Store
        </Typography.TitleResponsive>
      </Link>

      <Button view="ghost" onClick={toggleMenu}>
        <Space direction="horizontal" align="end" size="s">
          <BurgerMIcon />
          <Typography.TitleResponsive view="medium" tag="div">
            меню
          </Typography.TitleResponsive>
        </Space>
      </Button>

      <Drawer
        open={isMenuOpened}
        onClose={toggleMenu}
        className="header__drawer"
      >
        <Menu onClick={toggleMenu} />
      </Drawer>
    </header>
  );
}

export default Header;
