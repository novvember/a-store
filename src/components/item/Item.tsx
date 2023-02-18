import { Space } from '@alfalab/core-components/space';
import { useParams } from 'react-router-dom';
import data from '../../mocks/groups.json';
import './Item.css';
import { Typography } from '@alfalab/core-components/typography';
import formatPrice from '../../utils/formatPrice';
import Gallery from '../gallery/Gallery';
import AddToCartForm from '../add-to-cart-form/AddToCartForm';

function Item() {
  const { id } = useParams();
  const { images, title, price, description } = data.groups[0].products[1];

  return (
    <>
      <Space direction="horizontal" className="item" dataTestId="item">
        <Gallery images={images} title={title} />

        <Space>
          <Typography.TitleResponsive
            tag="h2"
            view="small"
            dataTestId="item-title"
          >
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

          <AddToCartForm id={id ?? ''} />

          <Typography.Text
            view="secondary-large"
            color="primary"
            dataTestId="description"
          >
            {description}
          </Typography.Text>
        </Space>
      </Space>
    </>
  );
}

export default Item;
