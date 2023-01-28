import { Typography } from '@alfalab/core-components/typography';
import { Button } from '@alfalab/core-components/button';
import { Space } from '@alfalab/core-components/space';
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';

import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <Typography.TitleResponsive
          view="large"
          tag="h1"
          color="accent"
          weight="bold"
        >
          A-Store
        </Typography.TitleResponsive>
      </Link>

      <Button view="ghost">
        <Space direction="horizontal" align="end" size="s">
          <BurgerMIcon />
          <Typography.TitleResponsive view="medium" tag="div">
            меню
          </Typography.TitleResponsive>
        </Space>
      </Button>
    </header>
  );
}

export default Header;
