import { useCallback, useState } from 'react';
import { FormValues } from '../components/order-form/OrderForm';
import { useAppSelector } from '../store';
import { selectCartItems } from '../store/cartSlice';
import { Order } from '../types/order';
import api from './api';

export default function usePostOrderRequest() {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const items = useAppSelector(selectCartItems);

  const postOrder = useCallback(
    async (formValues: FormValues) => {
      setError('');
      setIsLoading(true);

      const order: Order = {
        ...formValues,
        products: items.map((cartItem) => {
          const {
            description: { id },
            params: { color, stickerNumber, size },
            totalCount,
            totalPrice,
          } = cartItem;

          return {
            id,
            totalPrice,
            totalCount,
            stickerNumber: stickerNumber ? +stickerNumber : undefined,
            size,
            color,
          };
        }),
      };

      try {
        const response = await api.createOrder(order);
        setResponse(response);
      } catch {
        setError('Не получилось оформить заказ');
      } finally {
        setIsLoading(false);
      }
    },
    [items],
  );

  return { postOrder, response, isLoading, error };
}
