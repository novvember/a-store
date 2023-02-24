import { Space } from '@alfalab/core-components/space';
import { Typography } from '@alfalab/core-components/typography';

import './Card.css';

import { configure } from '@testing-library/dom';
import { PreviewProduct } from '../../types/product';
import { Amount } from '@alfalab/core-components/amount';

configure({
  testIdAttribute: 'data-test-id',
});

type CardProps = {
  product: PreviewProduct;
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
        {
          <Amount
            value={price}
            currency="RUR"
            minority={1}
          />
        }
      </Typography.Text>
    </Space>
  );
}

export default Card;
