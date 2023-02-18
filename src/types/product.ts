export interface PreviewProduct {
  id: number;
  preview: string;
  title: string;
  price: number;
  availability: boolean;
}

export interface FullProduct extends PreviewProduct {
  images: string[];
  subtitle: string;
  description: string;
  colors: string[];
  sizes: string[];
  stickerNumbers: number[];
}
