export interface IProduct {
  title: string;
  description: string;
  brand: string;
  price: number;
  category: string;
  image: string;
  id: number;
  favorite: boolean;
  isOnCart?: boolean;
  quantity?: number;
}
