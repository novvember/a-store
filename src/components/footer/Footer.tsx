import { Typography } from '@alfalab/core-components/typography';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Typography.Text tag="p" color="tertiary" weight="bold">
        © ООО «Альфа Фьюче Пипл», 2023
      </Typography.Text>
    </footer>
  );
}

export default Footer;
