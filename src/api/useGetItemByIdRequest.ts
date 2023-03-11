import { useEffect, useState } from 'react';
import { FullProduct } from '../types/product';
import api from './api';

export default function useGetItemByIdRequest(id: string) {
  const [item, setItem] = useState<FullProduct | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!item) {
      const fetchItem = async () => {
        setIsLoading(true);
        setError('');

        try {
          const item = await api.getItemById(+id);
          setItem(item);
        } catch {
          setError('Не удалось получить информацию о товаре');
        } finally {
          setIsLoading(false);
        }
      };

      fetchItem();
    }
  }, [id, item]);

  return { item, isLoading, error };
}
