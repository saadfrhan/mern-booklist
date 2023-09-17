import { useState } from 'react';
import { Link } from 'react-router-dom';
import BooksCard from '@/components/home/books-card';
import BooksTable from '@/components/home/books-table';
import { Button, buttonVariants } from '@/components/ui/button';
import { LayoutGridIcon, PlusCircle, TableIcon } from 'lucide-react';
import { useGetBooksQuery } from '@/services/book';

export default function Home() {
  const [showType, setShowType] = useState('table');

  const { data, isLoading } = useGetBooksQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-center gap-x-4">
        <Button onClick={() => setShowType('table')} size="icon">
          <TableIcon className="w-4 h-4" />
        </Button>
        <Button onClick={() => setShowType('card')} size="icon">
          <LayoutGridIcon className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
          Books List
        </h1>
        <Link
          to="/books/create"
          className={buttonVariants({
            size: 'icon',
          })}
        >
          <PlusCircle className="w-4 h-4" />
        </Link>
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
