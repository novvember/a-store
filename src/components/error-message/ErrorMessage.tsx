import { Plate } from '@alfalab/core-components/plate';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@alfalab/core-components/link';
import './ErrorMessage.css';

function ErrorMessage() {
  return (
    <Plate title="Ошибка" view="attention">
      При загрузке данных произошла ошибка :( Попробуйте еще раз или{' '}
      <RouterLink to="/contact">
        <Link>сообщите нам</Link>.
      </RouterLink>
    </Plate>
  );
}

export default ErrorMessage;
