import React from 'react';
import BookCard from './BookCard';
import './BookList.css';

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return React.createElement('p', { className: 'no-books-found' }, 'No books found.');
  }
  return React.createElement('div', { className: 'book-list' },
    books.map((book) => React.createElement(BookCard, { key: book.id, book: book }))
  );
};
export default BookList;