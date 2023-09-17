import { Link } from 'react-router-dom';
import { Eye, Info, Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import BookModal from './book-modal';
import { Book } from '@/types';
import { Button, buttonVariants } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import DeleteDialog from './delete-dialog';
import { BookInfoSheet } from './book-info-sheet';

const BookSingleCard = ({ book }: { book: Book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      <CardHeader className="flex-row justify-between">
        <Badge>{book.publishedYear}</Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-1">
        <div className="flex items-center justify-start gap-x-2">
          <h4 className="text-xl font-semibold tracking-tight scroll-m-20">
            {book.title}
          </h4>
        </div>
        <div className="flex items-center justify-start gap-x-2">
          <p className="text-muted-foreground">By: {book.author}</p>
        </div>
      </CardContent>
      <div className="flex items-center justify-end gap-2 p-4 mt-4">
        <Button size="icon" onClick={() => setShowModal(true)}>
          <Eye className="w-4 h-4" />
        </Button>
        <BookInfoSheet book={book}>
          <Button size="icon">
            <Info className="w-4 h-4" />
          </Button>
        </BookInfoSheet>
        <Link
          to={`/books/edit/${book._id}`}
          className={buttonVariants({
            size: 'icon',
          })}
        >
          <Pencil className="w-4 h-4" />
        </Link>
        <DeleteDialog _id={book._id}>
          <Button variant="destructive" size="icon">
            <Trash className="w-4 h-4" />
          </Button>
        </DeleteDialog>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </Card>
  );
};

export default BookSingleCard;
