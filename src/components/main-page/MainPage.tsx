import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from 'react-router-dom';

import './MainPage.css';

type LinkType = {
  title: string;
  to: string;
  className: string;
};

const LINKS: LinkType[] = [
  {
    title: 'Сделано в Альфе',
    to: '/store',
    className: 'main__link_type_store',
  },
  {
    title: 'Свой дизайн',
    to: '/create',
    className: 'main__link_type_create',
  },
];

function MainPage() {
  return (
    <div className="main">
      {LINKS.map((link) => (
        <Link
          to={link.to}
          key={link.title}
          className={`main__link ${link.className}`}
        >
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
    </div>
  );
}

export default MainPage;
