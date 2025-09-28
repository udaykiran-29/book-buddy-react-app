import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  return React.createElement('div', { className: 'book-card' },
    React.createElement(Link, { to: `/book/${book.id}` },
      React.createElement('img', { src: book.coverImage, alt: book.title, className: 'book-cover' }),
      React.createElement('div', { className: 'book-info' },
        React.createElement('h3', { className: 'book-title' }, book.title),
        React.createElement('p', { className: 'book-author' }, `by ${book.author}`),
        React.createElement('span', { className: `availability-tag ${book.availabilityType.toLowerCase()}`}, book.availabilityType)
      )
    )
  );
};
export default BookCard;