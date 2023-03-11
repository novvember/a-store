import { Space } from '@alfalab/core-components/space';
import { useEffect } from 'react';
import Card from '../card/Card';
import SectionHeader from '../section-header/SectionHeader';
import Loader from '../loader/Loader';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  fetchStoreItems,
  selectAllStoreItems,
  selectStoreStatus,
} from '../../store/storeSlice';
import ErrorMessage from '../error-message/ErrorMessage';

function StorePage() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectAllStoreItems);
  const status = useAppSelector(selectStoreStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStoreItems());
    }
  }, [dispatch, status]);

  return (
    <>
      <SectionHeader
        title="Сделано в Альфе"
        subtitle="Хотим каждую из этих вещей! Себе, родным и друзьям"
        type="primary"
      />

      {status === 'loading' && <Loader />}

      {status === 'failed' && <ErrorMessage />}

      {status === 'succeeded' && (
        <Space direction="horizontal" wrap align="start" size="l">
          {cards.map((card) => (
            <Card product={card} key={card.id} />
          ))}
        </Space>
      )}
    </>
  );
}

export default StorePage;
