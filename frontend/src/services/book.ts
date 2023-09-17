// Need to use the React-specific entry point to import createApi
import { Book } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5555' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBookById: builder.query<Book, string>({
      query: (id) => `books/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Books', id }],
    }),
    getBooks: builder.query<{ count: number; data: Book[] }, void>({
      query: () => `books`,
      providesTags: (result) =>
        // is result available?
        result
          ? // successful query
            [
              ...result.data.map(
                ({ _id }) => ({ type: 'Books', id: _id } as const)
              ),
              { type: 'Books', id: 'LIST' },
            ]
          : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
            [{ type: 'Books', id: 'LIST' }],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_result, _error, id) => [{ type: 'Books', id }],
    }),
    updateBook: builder.mutation<void, Book>({
      query: (book) => ({
        url: `books/${book._id}`,
        method: 'PUT',
        body: book,
      }),
      invalidatesTags: (_result, _error, { _id }) => [
        { type: 'Books', id: _id },
      ],
    }),
    addBook: builder.mutation<void, Book>({
      query: (book) => ({
        url: `books`,
        method: 'POST',
        body: book,
      }),
      invalidatesTags: [{ type: 'Books', id: 'LIST' }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBookByIdQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useGetBooksQuery,
  useUpdateBookMutation,
} = bookApi;
