import { Typography } from '@alfalab/core-components/typography';
import { Space } from '@alfalab/core-components/space';
import { Spinner } from '@alfalab/core-components/spinner';
import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import data from '../../mocks/products.json';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

function Store() {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState<Product[]>([]);

  const fetchProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      const products = data.products;
      setCards(products);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Typography.TitleResponsive view="xlarge" tag="h2" weight="bold">
        Сделано в Альфе
      </Typography.TitleResponsive>

      <Typography.Text view="primary-large" tag="p" weight="bold">
        Хотим каждую из этих вещей! Себе, родным и друзьям
      </Typography.Text>

      {isLoading && (
        <div className="centered">
          <Spinner size="m" visible />
        </div>
      )}

      <Space direction="horizontal" wrap align="start" size="l">
        {cards.map((card) => (
          <Link to="/" key={card.id}>
            <Card product={card} />
          </Link>
        ))}
      </Space>
    </>
  );
}

export default Store;
