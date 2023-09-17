import express from 'express';
import Book from '../models/book';

const router = express.Router();

router.post('/', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishedYear
    ) {
      return response.status(400).json({
        error: 'Send all required fields: title, author, publishedYear',
      });
    }
    const book = new Book({
      title: request.body.title,
      author: request.body.author,
      publishedYear: request.body.publishedYear,
    });
    const savedBook = await Book.create(book);

    return response.status(201).json(savedBook);
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    return response.status(500).json({ error: error.message });
  }
});

router.get('/', async (_, response) => {
  try {
    const books = await Book.find();

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    return response.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    if (!book) {
      return response.status(404).json({ error: 'Book not found' });
    }
    return response.status(200).json(book);
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    return response.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishedYear
    ) {
      return response.status(400).json({
        error: 'Send all required fields: title, author, publishedYear',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ error: 'Book not found' });
    }

    return response.status(204).json({
      message: 'Book updated successfully',
    });
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    return response.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ error: 'Book not found' });
    }

    return response.status(204).json({
      message: 'Book deleted successfully',
    });
  } catch (err) {
    const error = err as Error;
    console.log(error.message);
    return response.status(500).json({ error: error.message });
  }
});

export default router;
