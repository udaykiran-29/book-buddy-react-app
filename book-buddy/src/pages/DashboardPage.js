import React, { useState } from 'react';
import { users } from '../api/mockApi';
import BookList from '../components/books/BookList';
import AddBookForm from '../components/forms/AddBookForm';
import './DashboardPage.css';

const DashboardPage = ({ books, requests, onAddBook, onUpdateRequestStatus }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const currentUserId = 101;

  const myBooks = books.filter((book) => book.ownerId === currentUserId);
  const myRequests = requests.filter((req) => req.requesterId === currentUserId);
  const incomingRequests = requests.filter(req => req.ownerId === currentUserId && req.status === 'Pending');

  const getBookTitle = (bookId) => {
    const book = books.find((b) => b.id === bookId);
    return book ? book.title : 'Unknown Book';
  };

  const getUserName = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Unknown User';
  };

  return React.createElement('div', { className: 'dashboard-container' },
    React.createElement('div', { className: 'dashboard-header' },
      React.createElement('h1', null, 'My Dashboard'),
      React.createElement('button', { className: 'btn btn-primary', onClick: () => setIsFormVisible(true) }, '＋ Add New Book')
    ),

    isFormVisible && React.createElement(AddBookForm, {
      onAddBook: onAddBook,
      onCancel: () => setIsFormVisible(false)
    }),

    React.createElement('section', { className: 'dashboard-section' },
      React.createElement('h2', null, 'Incoming Requests'),
      incomingRequests.length > 0
        ? React.createElement('ul', { className: 'request-list' },
            incomingRequests.map(req =>
              React.createElement('li', { key: req.id, className: 'request-item incoming' },
                React.createElement('div', null,
                  React.createElement('span', null, `${getUserName(req.requesterId)} requested `),
                  React.createElement('strong', null, `"${getBookTitle(req.bookId)}"`)
                ),
                React.createElement('div', { className: 'request-actions' },
                  React.createElement('button', { className: 'btn-approve', onClick: () => onUpdateRequestStatus(req.id, req.bookId, 'Approved') }, 'Approve'),
                  React.createElement('button', { className: 'btn-reject', onClick: () => onUpdateRequestStatus(req.id, req.bookId, 'Rejected') }, 'Reject')
                )
              )
            )
          )
        : React.createElement('p', null, "You have no pending requests for your books.")
    ),

    React.createElement('section', { className: 'dashboard-section' },
      React.createElement('h2', null, 'My Shared Books'),
      myBooks.length > 0
        ? React.createElement(BookList, { books: myBooks })
        : React.createElement('p', null, "You haven't shared any books yet.")
    ),

    React.createElement('section', { className: 'dashboard-section' },
      React.createElement('h2', null, 'My Outgoing Requests'),
      myRequests.length > 0
        ? React.createElement('ul', { className: 'request-list' },
            myRequests.map((req) =>
              React.createElement('li', { key: req.id, className: 'request-item' },
                React.createElement('span', null, `You requested "${getBookTitle(req.bookId)}"`),
                React.createElement('span', { className: `status-badge ${req.status.toLowerCase()}` }, req.status)
              )
            )
          )
        : React.createElement('p', null, "You haven't made any requests yet.")
    )
  );
};

export default DashboardPage;