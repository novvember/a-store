import { Space } from '@alfalab/core-components/space';
import { Link } from 'react-router-dom';
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
          <Link to={`/item/${card.id}`} key={card.id}>
            <Card product={card} />
          </Link>
        ))}
      </Space>
    </section>
  );
}

export default CardGroup;
