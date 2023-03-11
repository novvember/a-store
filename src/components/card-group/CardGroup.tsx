import { Space } from '@alfalab/core-components/space';
import { Group } from '../../types/group';
import Card from '../card/Card';
import SectionHeader from '../section-header/SectionHeader';

type CardGroupPros = {
  group: Group;
};

function CardGroup({ group }: CardGroupPros) {
  return (
    <section className="section">
      <SectionHeader
        title={group.title}
        subtitle={group.description}
        type="secondary"
      />
      <Space direction="horizontal" wrap align="start" size="l">
        {group.products.map((card) => (
          <Card product={card} key={card.id} />
        ))}
      </Space>
    </section>
  );
}

export default CardGroup;
