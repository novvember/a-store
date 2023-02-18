import { Typography } from '@alfalab/core-components/typography';

type ErrorMessageProps = {
  children: string;
};

function ErrorMessage({ children }: ErrorMessageProps) {
  return (
    <Typography.TitleResponsive view="medium" color="attention" tag="div">
      {children}
    </Typography.TitleResponsive>
  );
}

export default ErrorMessage;
