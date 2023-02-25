import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { NavLink } from 'react-router-dom';
import { Badge } from '@alfalab/core-components/badge';
import { useAppSelector } from '../../store';
import { selectCartCount } from '../../store/cartSlice';

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
  const cartCount = useAppSelector(selectCartCount);

  return (
    <nav>
      <Space>
        {MENU_ITEMS.map((item) => (
          <NavLink to={item.to} key={item.title} onClick={onClick}>
            {({ isActive }) => {
              if (item.title === 'Корзина' && cartCount < 1) {
                return null;
              }

              return (
                <Space direction="horizontal" align="center">
                  <Typography.Title
                    view="medium"
                    tag="div"
                    color={isActive ? 'accent' : 'primary-inverted'}
                  >
                    {item.title}
                  </Typography.Title>
                  {item.title === 'Корзина' && (
                    <Badge view="count" content={cartCount} height={24} />
                  )}
                </Space>
              );
            }}
          </NavLink>
        ))}
      </Space>
    </nav>
  );
}

export default Menu;
