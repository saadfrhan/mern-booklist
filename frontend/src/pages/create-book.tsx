import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/back-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAddBookMutation } from '@/services/book';

export default function CreateBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const navigate = useNavigate();

  const [addBook] = useAddBookMutation();

  return (
    <div className="p-4">
      <BackButton destination="/" />
      <div className="flex flex-col max-w-2xl mx-4 mt-8 mb-40 space-y-4 lg:mx-auto">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0">
          Create Book
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label>Author</Label>
            <Input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <Label>Publish Year</Label>
            <Input
              type="number"
              value={publishedYear}
              onChange={(e) => setPublishedYear(e.target.value)}
            />
          </div>
          <Button
            onClick={() => {
              addBook({
                title,
                author,
                publishedYear: Number(publishedYear),
              });
              navigate('/');
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
