import { Typography } from '@alfalab/core-components/typography';
import { Plate } from '@alfalab/core-components/plate';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link } from '@alfalab/core-components/link';
import { Badge } from '@alfalab/core-components/badge';
import { CheckmarkOnCircleMIcon } from '@alfalab/icons-glyph/CheckmarkOnCircleMIcon';
import { Space } from '@alfalab/core-components/space';

type OrderConfirmedMessageProps = {
  title?: string;
};

function OrderConfirmedMessage({
  title = 'Заказ создан',
}: OrderConfirmedMessageProps) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <Plate
      title={title}
      view="positive"
      hasCloser
      onClose={handleClose}
      leftAddons={
        <Badge
          view="icon"
          iconColor="positive"
          content={<CheckmarkOnCircleMIcon />}
        />
      }
    >
      <Space direction="vertical">
        <Typography.Text>
          Получили заказ и в ближайшее время начнем его собирать. Если
          понадобится, свяжемся с вами для уточнения информации.
        </Typography.Text>
        <Typography.Text>
          Все детали по заказу отправили на электронную почту.
        </Typography.Text>
        <Typography.Text>
          Если появятся вопросы,{' '}
          <RouterLink to="/contact">
            <Link>напишите или позвоните нам</Link>
          </RouterLink>
          .
        </Typography.Text>
        <Typography.Text>Спасибо 🧡</Typography.Text>
      </Space>
    </Plate>
  );
}

export default OrderConfirmedMessage;
