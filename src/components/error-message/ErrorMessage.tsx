import { Plate } from '@alfalab/core-components/plate';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@alfalab/core-components/link';
import './ErrorMessage.css';

function ErrorMessage() {
  return (
    <Plate title="Ошибка" view="attention">
      При загрузке данных произошла ошибка :( Попробуйте еще раз или{' '}
      <Link Component={RouterLink} href="/contact">
        сообщите нам
      </Link>
      .
    </Plate>
  );
}

export default ErrorMessage;
