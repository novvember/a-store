import { useCallback, useState } from 'react';
import api from './api';

export default function usePostOrderRequest() {
  const [response, setResponse] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const postOrder = useCallback(async (formValues: unknown) => {
    setError('');
    setIsLoading(true);

    try {
      const response = await api.createOrder(formValues);
      setResponse(response);
    } catch {
      setError('Не получилось оформить заказ');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { postOrder, response, isLoading, error };
}
