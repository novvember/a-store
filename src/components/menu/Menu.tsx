import { Space } from '@alfalab/core-components/space';
import { Link } from 'react-router-dom';
import { Typography } from '@alfalab/core-components/typography';

type MenuItem = {
  title: string;
  to: string;
};

const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Сделано в Альфе',
    to: '/store',
  },
  {
    title: 'Свой дизайн',
    to: '/create',
  },
  {
    title: 'Корзина',
    to: '/cart',
  },
  {
    title: 'Контакты',
    to: '/contact',
  },
];

type MenuProps = {
  onClick: () => void;
};

function Menu({ onClick }: MenuProps) {
  return (
    <nav>
      <Space>
        {MENU_ITEMS.map((item) => (
          <Link
            to={item.to}
            key={item.title}
            className="menu__link"
            onClick={onClick}
          >
            <Typography.Title view="medium" tag="div" color="primary-inverted">
              {item.title}
            </Typography.Title>
          </Link>
        ))}
      </Space>
    </nav>
  );
}

export default Menu;
