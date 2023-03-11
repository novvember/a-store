export type PreviewProduct = {
  id: number;
  preview: string;
  title: string;
  price: number;
  availability: boolean;
};

export type FullProduct = {
  colors?: string[];
  sizes?: string[];
  stickerNumbers?: number[];
  images: string[];
  subtitle: string;
  description: string;
} & PreviewProduct;
