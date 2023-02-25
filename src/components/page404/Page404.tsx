import { Typography } from '@alfalab/core-components/typography';
import Page from '../page/Page';

function Page404() {
  return (
    <Page>
      <div
        className="centered"
        style={{
          padding: 'var(--gap-8xl)',
        }}
      >
        <Typography.TitleResponsive view="xlarge" color="primary" tag="div">
          404
        </Typography.TitleResponsive>
        <Typography.Text color="primary" view="primary-large">
          Не та страница :(
        </Typography.Text>
      </div>
    </Page>
  );
}

export default Page404;
