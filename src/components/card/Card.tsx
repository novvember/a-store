import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { Product } from '../../types/product';
import formatPrice from '../../utils/formatPrice';

import './Card.css';

import { configure } from '@testing-library/dom';

configure({
  testIdAttribute: 'data-test-id',
});

type CardProps = {
  product: Product;
};

function Card({ product }: CardProps) {
  const { id, preview, title, price } = product;

  return (
    <Space
      direction="vertical"
      key={id}
      className="card"
      size="s"
      dataTestId="card"
    >
      <img
        src={preview}
        alt={title}
        className="card__preview"
        data-test-id="img"
      />
      <Typography.TitleResponsive view="xsmall" tag="h3" dataTestId="title">
        {title}
      </Typography.TitleResponsive>
      <Typography.Text
        view="primary-large"
        weight="bold"
        color="accent"
        dataTestId="price"
      >
        {formatPrice(price)}
      </Typography.Text>
    </Space>
  );
}

export default Card;
