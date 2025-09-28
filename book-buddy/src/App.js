import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { books as initialBooks, requests as initialRequests } from './api/mockApi';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (Math.random() > 0.9) {
          throw new Error("Failed to fetch data from the server.");
        }
        setBooks(initialBooks);
        setRequests(initialRequests);
      } catch (err) {
        setError("Oh no! We couldn't load the books. Please try refreshing the page.");
      } finally {
        setIsLoading(false);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAddBook = (newBookData) => {
    const newBook = { ...newBookData, id: Date.now(), ownerId: 101, status: 'Available' };
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  };

  const handleCreateRequest = (requestedBook, offeredBookId = null) => {
    const newRequest = {
      id: Date.now(),
      bookId: requestedBook.id,
      ownerId: requestedBook.ownerId,
      requesterId: 101,
      type: requestedBook.availabilityType,
      offeredBookId: offeredBookId,
      status: 'Pending',
    };
    setRequests((prev) => [newRequest, ...prev]);
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === requestedBook.id ? { ...book, status: 'Pending' } : book
      )
    );
    // The alert() line that was here has been removed.
  };

  const handleUpdateRequestStatus = (requestId, bookId, newStatus) => {
    setRequests(prevRequests =>
      prevRequests.map(req =>
        req.id === requestId ? { ...req, status: newStatus } : req
      )
    );
    if (newStatus === 'Approved') {
      setBooks(prevBooks =>
        prevBooks.map(book =>
          book.id === bookId ? { ...book, status: 'Shared' } : book
        )
      );
    }
    if (newStatus === 'Rejected') {
      setBooks(prevBooks =>
        prevBooks.map(book =>
          book.id === bookId ? { ...book, status: 'Available' } : book
        )
      );
    }
  };

  if (isLoading) {
    return React.createElement('div', { className: 'loading-container' }, React.createElement('h1', null, 'Loading Book Buddy...'));
  }

  if (error) {
    return React.createElement('div', { className: 'error-container' },
      React.createElement('h1', null, 'Something Went Wrong'),
      React.createElement('p', null, error)
    );
  }

  return React.createElement(Router, null,
    React.createElement('header', { className: 'app-header' },
      React.createElement('nav', null,
        React.createElement(Link, { to: '/' }, 'Home'),
        React.createElement(Link, { to: '/dashboard' }, 'Dashboard')
      )
    ),
    React.createElement('main', null,
      React.createElement(Routes, null,
        React.createElement(Route, { path: '/', element: React.createElement(HomePage, { books: books }) }),
        React.createElement(Route, { path: '/book/:bookId', element: React.createElement(BookDetailsPage, {
            books: books,
            onCreateRequest: handleCreateRequest
        }) }),
        React.createElement(Route, { path: '/dashboard', element: React.createElement(DashboardPage, {
            books: books,
            requests: requests,
            onAddBook: handleAddBook,
            onUpdateRequestStatus: handleUpdateRequestStatus
        }) })
      )
    )
  );
}

export default App;