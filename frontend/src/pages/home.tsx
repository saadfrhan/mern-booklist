import { useState } from 'react';
import { Link } from 'react-router-dom';
import BooksCard from '@/components/home/books-card';
import BooksTable from '@/components/home/books-table';
import { Button, buttonVariants } from '@/components/ui/button';
import { LayoutGridIcon, PlusCircle, TableIcon } from 'lucide-react';
import { useGetBooksQuery } from '@/services/book';
import { ThemeToggler } from '@/components/theme-toggler';

export default function Home() {
  const [showType, setShowType] = useState('table');

  const { data, isLoading } = useGetBooksQuery();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold tracking-tight max-sm:text-xl scroll-m-20 lg:text-5xl">
          Books List
        </h1>
        <div className="flex gap-2">
          <ThemeToggler />
          <Button
            onClick={() => setShowType(showType === 'table' ? 'card' : 'table')}
            size="icon"
          >
            {showType === 'table' ? (
              <TableIcon className="w-4 h-4" />
            ) : (
              <LayoutGridIcon className="w-4 h-4" />
            )}
          </Button>
          <Link
            to="/books/create"
            className={buttonVariants({
              className: 'flex items-center justify-center gap-x-2',
            })}
          >
            <PlusCircle className="w-4 h-4" /> New
          </Link>
        </div>
      </div>
      {data &&
        (showType === 'table' ? (
          <BooksTable books={data.data} />
        ) : (
          <BooksCard books={data.data} />
        ))}
    </div>
  );
}
