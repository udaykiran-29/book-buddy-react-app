import React, { useState } from 'react';
import './AddBookForm.css';

const AddBookForm = ({ onAddBook, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    coverImage: '',
    genre: 'Adventure',
    ageGroup: '7-10',
    availabilityType: 'Free',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) {
      alert('Please fill out both title and author.');
      return;
    }
    onAddBook(formData);
    onCancel();
  };
  
  return React.createElement('div', { className: 'modal-backdrop' },
    React.createElement('div', { className: 'modal-content' },
      React.createElement('h2', null, 'Add a New Book'),
      React.createElement('form', { onSubmit: handleSubmit, className: 'add-book-form' },
        React.createElement('input', { type: 'text', name: 'title', placeholder: 'Book Title', value: formData.title, onChange: handleChange, required: true }),
        React.createElement('input', { type: 'text', name: 'author', placeholder: 'Author', value: formData.author, onChange: handleChange, required: true }),
        React.createElement('input', { type: 'text', name: 'coverImage', placeholder: 'Paste Image URL here', value: formData.coverImage, onChange: handleChange }),
        React.createElement('select', { name: 'genre', value: formData.genre, onChange: handleChange },
          React.createElement('option', { value: 'Adventure' }, 'Adventure'), React.createElement('option', { value: 'Fantasy' }, 'Fantasy'),
          React.createElement('option', { value: 'Humor' }, 'Humor'), React.createElement('option', { value: 'Classic' }, 'Classic')),
        React.createElement('select', { name: 'ageGroup', value: formData.ageGroup, onChange: handleChange },
          React.createElement('option', { value: '4-7' }, '4-7'), React.createElement('option', { value: '7-10' }, '7-10'), React.createElement('option', { value: '8-12' }, '8-12')),
        React.createElement('select', { name: 'availabilityType', value: formData.availabilityType, onChange: handleChange },
          React.createElement('option', { value: 'Free' }, 'Free'), React.createElement('option', { value: 'Exchange' }, 'Exchange')),
        React.createElement('div', { className: 'form-buttons' },
          React.createElement('button', { type: 'submit', className: 'btn btn-primary' }, 'Add Book'),
          React.createElement('button', { type: 'button', className: 'btn', onClick: onCancel }, 'Cancel')
        )
      )
    )
  );
};

export default AddBookForm;