import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';
import { Product } from '../../types/product';
import formatPrice from '../../utils/formatPrice';

import './Card.css';

type CardProps = {
  product: Product;
};

function Card({ product }: CardProps) {
  const { id, preview, title, price } = product;

  return (
    <Space direction="vertical" key={id} className="card" size="s">
      <img src={preview} alt={title} className="card__preview" />
      <Typography.TitleResponsive view="xsmall" tag="h3">
        {title}
      </Typography.TitleResponsive>
      <Typography.Text view="primary-large" weight="bold" color="accent">
        {formatPrice(price)}
      </Typography.Text>
    </Space>
  );
}

export default Card;
