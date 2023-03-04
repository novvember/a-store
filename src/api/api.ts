import { Group } from '../types/group';
import { FullProduct, PreviewProduct } from '../types/product';

class Api {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getStoreItems() {
    const url = `${this.baseUrl}/made-in-alfa`;
    const res = await fetch(url);

    if (res.ok) {
      return (await res.json()) as PreviewProduct[];
    } else {
      throw new Error('Не удалось получить товары');
    }
  }

  async getCreateItems() {
    const url = `${this.baseUrl}/your-design`;
    const res = await fetch(url);

    if (res.ok) {
      return (await res.json()) as Group[];
    } else {
      throw new Error('Не удалось получить товары');
    }
  }

  async getItemById(id: number) {
    const url = `${this.baseUrl}/product/${id}`;
    const res = await fetch(url);

    if (res.ok) {
      return (await res.json()) as FullProduct;
    } else {
      throw new Error('Не удалось получить информацию о товаре');
    }
  }

  async createOrder(payload: any) {
    const url = `${this.baseUrl}/create-order`;

    const res = await fetch(url, {
      method: 'POST',
      body: payload,
    });

    if (res.ok) {
      return (await res.json()) as unknown;
    } else {
      throw new Error('Не удалось получить отправить заказ');
    }
  }

  async checkPromocode(code: string): Promise<{ message: string }> {
    // Нет метода АПИ для проверки промокода,
    // поэтому используем мок, который создает эффект запроса
    // и принимает любой промокод

    return new Promise((res) => {
      setTimeout(() => res({ message: 'Промокод применен' }), 2000);
    });
  }
}

const api = new Api('http://qa-games.ru/astore');

export default api;
