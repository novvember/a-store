import { Product } from '../types/product';

class Api {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getStoreItems() {
    const url = `${this.baseUrl}/made-in-alfa`;
    const res = await fetch(url);

    if (res.ok) {
      return (await res.json()) as Product[];
    } else {
      throw new Error('Не удалось получить товары');
    }
  }
}

const api = new Api('http://qa-games.ru/astore');

export default api;
