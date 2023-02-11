import { Product } from './product';

export type Group = {
  id: number;
  title: string;
  description: string;
  products: Product[];
};
