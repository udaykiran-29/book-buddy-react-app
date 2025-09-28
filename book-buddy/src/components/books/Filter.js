import React from 'react';
import './Filter.css';

const Filter = ({ onSearchChange, onFilterChange }) => {
  return React.createElement('div', { className: 'filter-container' },
    React.createElement('input', { type: 'text', placeholder: 'Search by title or author...', className: 'search-input', onChange: (e) => onSearchChange(e.target.value) }),
    React.createElement('div', { className: 'filter-dropdowns' },
      React.createElement('select', { name: 'genre', onChange: onFilterChange },
        React.createElement('option', { value: '' }, 'All Genres'),
        React.createElement('option', { value: 'Adventure' }, 'Adventure'),
        React.createElement('option', { value: 'Fantasy' }, 'Fantasy'),
        React.createElement('option', { value: 'Humor' }, 'Humor'),
        React.createElement('option', { value: 'Classic' }, 'Classic')
      ),
      React.createElement('select', { name: 'ageGroup', onChange: onFilterChange },
        React.createElement('option', { value: '' }, 'All Ages'),
        React.createElement('option', { value: '4-7' }, '4-7'),
        React.createElement('option', { value: '7-10' }, '7-10'),
        React.createElement('option', { value: '8-12' }, '8-12'),
        React.createElement('option', { value: '10-14' }, '10-14')
      ),
      React.createElement('select', { name: 'availabilityType', onChange: onFilterChange },
        React.createElement('option', { value: '' }, 'All Types'),
        React.createElement('option', { value: 'Free' }, 'Free'),
        React.createElement('option', { value: 'Exchange' }, 'Exchange')
      )
    )
  );
};
export default Filter;