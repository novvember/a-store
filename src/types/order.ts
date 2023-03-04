export type Order = {
  name: string;
  email: string;
  phone: string;
  address: string;
  comment?: string;
  deliveryType:
    | 'Доставка по России — 350₽'
    | 'Курьером по Москве — 300₽'
    | 'Самовывоз (пр-т Андропова, 18 корп. 3)';
  paymentType: 'Банковская карта' | 'Промокод';
  products: OrderedProduct[];
};

export type OrderedProduct = {
  id: number;
  totalPrice: number;
  totalCount: number;
  stickerNumber?: number;
  color?: string;
  size?: string;
  model?: string;
};
