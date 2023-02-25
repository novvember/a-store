import { useEffect } from 'react';
import CardGroup from '../card-group/CardGroup';
import SectionHeader from '../section-header/SectionHeader';
import Loader from '../loader/Loader';
import { useAppDispatch, useAppSelector } from '../../store';
import {
  fetchCreateItems,
  selectAllCreateGroups,
  selectCreateError,
  selectCreateStatus,
} from '../../store/createSlice';
import ErrorMessage from '../error-message/ErrorMessage';
import Page from '../page/Page';

function CreatePage() {
  const dispatch = useAppDispatch();
  const groups = useAppSelector(selectAllCreateGroups);
  const status = useAppSelector(selectCreateStatus);
  const error = useAppSelector(selectCreateError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCreateItems());
    }
  }, [dispatch, status]);

  return (
    <Page>
      <SectionHeader
        title="Свой дизайн"
        subtitle="Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото"
        type="primary"
      />

      {status === 'loading' && <Loader />}

      {status === 'failed' && <ErrorMessage>{error}</ErrorMessage>}

      {status === 'succeeded' &&
        groups.map((group) => <CardGroup group={group} key={group.id} />)}
    </Page>
  );
}

export default CreatePage;
