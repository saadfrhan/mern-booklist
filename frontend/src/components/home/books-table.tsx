import { Link } from 'react-router-dom';
import { Book } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { buttonVariants } from '../ui/button';
import { Info, Pencil, Trash, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import DeleteDialog from './delete-dialog';
import { BookInfoSheet } from './book-info-sheet';
import { useState } from 'react';

const BooksTable = ({ books }: { books: Book[] }) => {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  return (
    <div>
      {selectedBook && (
        <div className="flex justify-start gap-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSelectedBook(null)}
          >
            <X />
          </Button>
          <Link
            to={`/books/edit/${selectedBook}`}
            className={buttonVariants({
              size: 'icon',
            })}
          >
            <Pencil className="w-4 h-4" />
          </Link>
          <BookInfoSheet
            book={books.find((book) => book._id === selectedBook)!}
          >
            <Button size="icon">
              <Info className="w-4 h-4" />
            </Button>
          </BookInfoSheet>
          <DeleteDialog _id={selectedBook}>
            <Button variant="destructive" size="icon">
              <Trash className="w-4 h-4" />
            </Button>
          </DeleteDialog>
        </div>
      )}
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="max-md:hidden">Author</TableHead>
            <TableHead className="max-md:hidden">Published Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book, index) => (
            <TableRow
              key={book._id}
              className={`h-8 cursor-pointer ${
                selectedBook === book._id ? 'bg-gray-100' : ''
              }`}
              onClick={() => {
                setSelectedBook(book._id!);
              }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell className="max-md:hidden">{book.author}</TableCell>
              <TableCell className="max-md:hidden">
                {book.publishedYear}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BooksTable;
