import { Space } from '@alfalab/core-components/space';
import { useParams } from 'react-router-dom';
import './ItemPage.css';
import { Typography } from '@alfalab/core-components/typography';
import Gallery from '../gallery/Gallery';
import AddToCartForm from '../add-to-cart-form/AddToCartForm';
import Loader from '../loader/Loader';
import ErrorMessage from '../error-message/ErrorMessage';
import { Amount } from '@alfalab/core-components/amount';
import useGetItemByIdRequest from '../../api/useGetItemByIdRequest';

function ItemPage() {
  const { id } = useParams();
  const { item, isLoading, error } = useGetItemByIdRequest(id ?? '');

  if (isLoading) return <Loader />;
  if (!!error || !item) return <ErrorMessage />;

  const { images, title, price, description } = item;

  return (
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
          <Amount value={price} currency="RUR" minority={1} />
        </Typography.Text>

        <AddToCartForm product={item} />

        <Typography.Text
          view="primary-medium"
          color="primary"
          dataTestId="description"
        >
          {description}
        </Typography.Text>
      </Space>
    </Space>
  );
}

export default ItemPage;
