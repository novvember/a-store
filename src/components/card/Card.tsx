import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';

import './Card.css';

import { configure } from '@testing-library/dom';
import { PreviewProduct } from '../../types/product';
import { Amount } from '@alfalab/core-components/amount';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

configure({
  testIdAttribute: 'data-test-id',
});

type CardProps = {
  product: PreviewProduct;
};

function Card({ product }: CardProps) {
  const { id, preview, title, price, availability } = product;

  return (
    <Link
      to={`/item/${id}`}
      className={classNames('card', { card_disabled: !availability })}
    >
      <Space direction="vertical" size={4} dataTestId="card">
        <img
          src={preview}
          alt={title}
          className="card__preview"
          data-test-id="img"
        />
        <Typography.TitleResponsive view="small" tag="h3" dataTestId="title">
          {title}
        </Typography.TitleResponsive>
        <Typography.Text
          view="primary-large"
          weight="bold"
          color="accent"
          dataTestId="price"
        >
          {availability && <Amount value={price} currency="RUR" minority={1} />}
          {!availability && 'Сейчас нет в наличии'}
        </Typography.Text>
      </Space>
    </Link>
  );
}

export default Card;
