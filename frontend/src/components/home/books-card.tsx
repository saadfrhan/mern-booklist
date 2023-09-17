import BookSingleCard from './books-single-card';
import { Book } from '@/types';

const BooksCard = ({ books }: { books: Book[] }) => {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

export default BooksCard;
