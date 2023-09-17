import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '@/pages/home';
import CreateBook from '@/pages/create-book';
import EditBook from '@/pages/edit-book';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}
