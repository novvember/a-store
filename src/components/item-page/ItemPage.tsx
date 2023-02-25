import { Space } from '@alfalab/core-components/space';
import { useParams } from 'react-router-dom';
import './ItemPage.css';
import { Typography } from '@alfalab/core-components/typography';
import Gallery from '../gallery/Gallery';
import AddToCartForm from '../add-to-cart-form/AddToCartForm';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import Loader from '../loader/Loader';
import ErrorMessage from '../error-message/ErrorMessage';
import { FullProduct } from '../../types/product';
import { Amount } from '@alfalab/core-components/amount';

function ItemPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<FullProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!product && id) {
      const fetchProduct = async () => {
        setIsLoading(true);
        setError('');

        try {
          const product = await api.getItemById(+id);
          setProduct(product);
        } catch {
          setError('Не удалось получить информацию о товаре');
        } finally {
          setIsLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id, product]);

  if (isLoading) return <Loader />;
  if (!!error || !product) return <ErrorMessage>{error}</ErrorMessage>;

  const { images, title, price, description } = product;

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

        <AddToCartForm product={product} />

        <Typography.Text
          view="secondary-large"
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
