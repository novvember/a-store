export type Product = {
  id: number;
  preview: string;
  images?: string[];
  title: string;
  subtitle?: string;
  price: number;
  description?: string;
  colors?: string[];
  sizes?: string[];
  stickerNumbers?: number[];
  availability: boolean;
};
