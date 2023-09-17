import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Book } from '@/types';
import { formatDistance } from 'date-fns';

export function BookInfoSheet({
  children,
  book,
}: {
  children: React.ReactNode;
  book: Book;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="max-sm:w-screen">
        <SheetHeader className="my-4">
          <SheetTitle>{book.title}</SheetTitle>
        </SheetHeader>
        <div className="grid items-center grid-cols-2 gap-6 max-[420px]:gap-0 max-[420px]:grid-cols-1">
          <span className="text-xl text-muted-foreground">Author</span>
          <span>{book.author}</span>
        </div>
        <div className="grid items-center grid-cols-2 gap-6 max-[420px]:gap-0 max-[420px]:grid-cols-1">
          <span className="text-xl text-muted-foreground">Published year</span>
          <span>{book.publishedYear}</span>
        </div>
        <div className="grid items-center grid-cols-2 gap-6 max-[420px]:gap-0 max-[420px]:grid-cols-1">
          <span className="text-xl text-muted-foreground">Created </span>
          <span>
            {formatDistance(new Date(), new Date(book.createdAt!))} ago
          </span>
        </div>
        <div className="grid items-center grid-cols-2 gap-6 max-[420px]:gap-0 max-[420px]:grid-cols-1">
          <span className="text-xl text-muted-foreground">Updated</span>
          <span>
            {formatDistance(new Date(), new Date(book.updatedAt!))} ago
          </span>
        </div>
      </SheetContent>
    </Sheet>
  );
}
