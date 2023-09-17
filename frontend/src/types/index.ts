export interface Book {
  _id?: string;
  title: string;
  author: string;
  publishedYear: number;
  createdAt?: Date;
  updatedAt?: Date;
}
