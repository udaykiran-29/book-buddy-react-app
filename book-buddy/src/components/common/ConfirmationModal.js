import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ title, message, onClose }) => {
  return React.createElement('div', { className: 'modal-backdrop' },
    React.createElement('div', { className: 'modal-content' },
      React.createElement('h2', { className: 'modal-title' }, title),
      React.createElement('p', { className: 'modal-message' }, message),
      React.createElement('button', { className: 'btn btn-primary', onClick: onClose }, 'OK')
    )
  );
};

export default ConfirmationModal;