import { Typography } from '@alfalab/core-components/typography';
import './ErrorMessage.css';

type ErrorMessageProps = {
  children: string;
};

function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <Typography.TitleResponsive
      view="xsmall"
      color="attention"
      tag="div"
      className="error-message"
    >
      {children}
    </Typography.TitleResponsive>
  );
}

export default ErrorMessage;
