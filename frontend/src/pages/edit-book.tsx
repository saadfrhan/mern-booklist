import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from '@/components/back-button';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useGetBookByIdQuery, useUpdateBookMutation } from '@/services/book';

const EditBook = () => {
  const { id } = useParams();

  const { data } = useGetBookByIdQuery(id!);

  const [title, setTitle] = useState(data?.title ? data.title : '');
  const [author, setAuthor] = useState(data?.author ? data.author : '');
  const [publishedYear, setPublishedYear] = useState(
    data?.publishedYear ? data.publishedYear : ''
  );
  const navigate = useNavigate();

  const [updateBook] = useUpdateBookMutation();

  return (
    <div className="p-4">
      <BackButton destination="/" />
      <div className="flex flex-col max-w-2xl mx-4 mt-8 mb-40 space-y-4 lg:mx-auto">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight transition-colors border-b scroll-m-20 first:mt-0">
          Edit Book
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
              updateBook({
                _id: id ? id : 'Invalid Id',
                title,
                author,
                publishedYear: Number(publishedYear),
              });
              navigate('/');
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
