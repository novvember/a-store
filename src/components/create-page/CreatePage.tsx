import { useEffect, useState } from 'react';
import { Group } from '../../types/group';
import data from '../../mocks/groups.json';
import CardGroup from '../card-group/CardGroup';
import SectionHeader from '../section-header/SectionHeader';
import Loader from '../loader/Loader';

function CreatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [groups, setGroups] = useState<Group[]>([]);

  const fetchGroups = () => {
    setIsLoading(true);
    setTimeout(() => {
      const groups = data.groups;
      setGroups(groups);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <>
      <SectionHeader
        title="Свой дизайн"
        subtitle="Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото"
        type="primary"
      />

      {isLoading && <Loader />}

      {groups.map((group) => (
        <CardGroup group={group} key={group.id} />
      ))}
    </>
  );
}

export default CreatePage;
