import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../api/mockApi';
import ConfirmationModal from '../components/common/ConfirmationModal'; 
import './BookDetailsPage.css';

const BookDetailsPage = ({ books, onCreateRequest }) => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(bookId));
  
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!book) {
    return React.createElement('h1', null, 'Book not found!');
  }

  // Note: The 'owner' variable is no longer needed since we removed the owner info section.
  // const owner = users.find((u) => u.id === book.ownerId);

  const handleRequestClick = () => {
    let offeredBookId = null;
    
    if (book.availabilityType === 'Exchange') {
      const currentUserId = 101;
      const bookToOffer = books.find(b => b.ownerId === currentUserId && b.status === 'Available');
      
      if (!bookToOffer) {
        alert("You have no available books to offer for an exchange.");
        return;
      }
      offeredBookId = bookToOffer.id;
    }
    
    onCreateRequest(book, offeredBookId);
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    navigate('/dashboard');
  };

  return React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'book-details-container' },
      React.createElement('div', { className: 'details-left' },
        // The class name here was corrected
        React.createElement('img', { className: 'details-cover-img', src: book.coverImage, alt: book.title })
      ),
      React.createElement('div', { className: 'details-right' },
        React.createElement('h1', { className: 'details-title' }, book.title),
        React.createElement('h3', { className: 'details-author' }, `by ${book.author}`),
        React.createElement('div', { className: 'details-tags' },
          React.createElement('span', { className: 'tag genre' }, book.genre),
          React.createElement('span', { className: 'tag age' }, `Age: ${book.ageGroup}`),
          React.createElement('span', { className: `tag availability ${book.availabilityType.toLowerCase()}` }, book.availabilityType)
        ),
        React.createElement('p', { className: 'details-status' }, `Status: ${book.status}`),

        // The empty 'owner-info' section has been completely removed
        
        React.createElement('div', { className: 'action-buttons' },
          book.status === 'Available'
            ? React.createElement('button', {
                className: `btn ${book.availabilityType === 'Free' ? 'btn-primary' : 'btn-secondary'}`,
                onClick: handleRequestClick
              },
              book.availabilityType === 'Free' ? 'Request for Free' : 'Offer an Exchange'
            )
            : React.createElement('p', { className: 'status-unavailable' }, `Status: ${book.status}`)
        )
      )
    ),

    showConfirmation && React.createElement(ConfirmationModal, {
      title: 'Success!',
      message: `Your request for "${book.title}" has been sent.`,
      onClose: handleCloseConfirmation
    })
  );
};

export default BookDetailsPage;