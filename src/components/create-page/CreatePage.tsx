import { useEffect } from 'react';
import CardGroup from '../card-group/CardGroup';
import SectionHeader from '../section-header/SectionHeader';
import Loader from '../loader/Loader';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  fetchCreateItems,
  selectAllCreateGroups,
  selectCreateStatus,
} from '../../store/createSlice';
import ErrorMessage from '../error-message/ErrorMessage';
import { Space } from '@alfalab/core-components/space';

function CreatePage() {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(selectAllCreateGroups);
  const status = useAppSelector(selectCreateStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCreateItems());
    }
  }, [dispatch, status]);

  return (
    <>
      <SectionHeader
        title="Свой дизайн"
        subtitle="Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото"
        type="primary"
      />

      {status === 'loading' && <Loader />}

      {status === 'failed' && <ErrorMessage />}

      {status === 'succeeded' && (
        <Space direction="vertical" size="l">
          {groups.map((group) => (
            <CardGroup group={group} key={group.id} />
          ))}
        </Space>
      )}
    </>
  );
}

export default CreatePage;
