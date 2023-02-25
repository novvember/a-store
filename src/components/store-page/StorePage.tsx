import { Space } from '@alfalab/core-components/space';
import { useEffect } from 'react';
import Card from '../card/Card';
import { Link } from 'react-router-dom';
import SectionHeader from '../section-header/SectionHeader';
import Loader from '../loader/Loader';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  fetchStoreItems,
  selectAllStoreItems,
  selectStoreError,
  selectStoreStatus,
} from '../../store/storeSlice';
import ErrorMessage from '../error-message/ErrorMessage';
import Page from '../page/Page';

function StorePage() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectAllStoreItems);
  const status = useAppSelector(selectStoreStatus);
  const error = useAppSelector(selectStoreError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStoreItems());
    }
  }, [dispatch, status]);

  return (
    <Page>
      <SectionHeader
        title="Сделано в Альфе"
        subtitle="Хотим каждую из этих вещей! Себе, родным и друзьям"
        type="primary"
      />

      {status === 'loading' && <Loader />}

      {status === 'failed' && <ErrorMessage>{error}</ErrorMessage>}

      {status === 'succeeded' && (
        <Space direction="horizontal" wrap align="start" size="l">
          {cards.map((card) => (
            <Link to={`/item/${card.id}`} key={card.id}>
              <Card product={card} />
            </Link>
          ))}
        </Space>
      )}
    </Page>
  );
}

export default StorePage;
