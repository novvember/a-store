import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from 'react-router-dom';

import './Main.css';

type LinkType = {
  title: string;
  to: string;
};

const LINKS: LinkType[] = [
  {
    title: 'Сделано в Альфе',
    to: '/store',
  },
  {
    title: 'Свой дизайн',
    to: '/create',
  },
];

function Main() {
  return (
    <Space direction="horizontal" size={0} fullWidth>
      {LINKS.map((link) => (
        <Link to={link.to} key={link.title} className="main__link">
          <Typography.TitleResponsive
            view="medium"
            tag="h2"
            color="primary"
            weight="bold"
          >
            {link.title}
          </Typography.TitleResponsive>
        </Link>
      ))}
    </Space>
  );
}

export default Main;
