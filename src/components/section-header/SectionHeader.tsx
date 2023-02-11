import { Typography } from '@alfalab/core-components/typography';

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  type: 'primary' | 'secondary';
};

function SectionHeader({ title, subtitle, type }: SectionHeaderProps) {
  const color = type === 'primary' ? 'primary' : 'accent';

  return (
    <>
      <Typography.TitleResponsive
        view="xlarge"
        tag="h2"
        weight="bold"
        dataTestId="title"
        color={color}
      >
        {title}
      </Typography.TitleResponsive>

      <Typography.Text
        view="primary-large"
        tag="p"
        weight="bold"
        dataTestId="subtitle"
      >
        {subtitle}
      </Typography.Text>
    </>
  );
}

export default SectionHeader;
