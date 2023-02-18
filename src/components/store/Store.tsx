import { Space } from '@alfalab/core-components/space';
import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import data from '../../mocks/products.json';
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import SectionHeader from '../section-header/SectionHeader';
import Loader from '../loader/Loader';

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
      <SectionHeader
        title="Сделано в Альфе"
        subtitle="Хотим каждую из этих вещей! Себе, родным и друзьям"
        type="primary"
      />

      {isLoading && <Loader />}

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
