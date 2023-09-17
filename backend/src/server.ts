import dotenv from 'dotenv';
import path from 'path';
import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import booksRouter from './routes/books';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request: Request, response: Response) => {
  return response.status(234).json({
    message: 'Hello World!',
  });
});

app.use('/books', booksRouter);

(async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || 'Please enter your mongo url in the .env file'
    );
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 4000, () => {
      console.log('Server is running');
    });
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
})();
