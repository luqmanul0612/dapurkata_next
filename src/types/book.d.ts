export type TBook = {
  id: number | string;
  title: string;
  authorName: string;
  price: number,
  numberOfPages: number,
  stock: number;
  publisher: string;
  description: string;
  coverUrl: string;
  printType: string;
  isbn: string;
  slug: string;
}