import { Schema, model } from 'mongoose';

interface BookI {
  _id: string;
  title: string;
  author: string;
  publishedYear: number;
}

const bookSchema = new Schema<BookI>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Book = model<BookI>('Book', bookSchema);

export default Book;
