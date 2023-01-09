export type TBook = {
  id: string;
  title: string;
  authorName: string;
  price: number,
  numberOfPages: number,
  stock: number;
  publisher: string;
  description: string;
  Image: { url: string; secureUrl: string; }
  printType: string;
  isbn: string;
  slug: string;
}