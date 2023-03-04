export type ItemDesription = {
  id: number;
  title: string;
  preview: string;
  price: number;
};

export type ProductParams = {
  color?: string;
  size?: string;
  stickerNumber?: string;
};

export type CartItem = {
  description: ItemDesription;
  params: ProductParams;
  totalCount: number;
  totalPrice: number;
};
