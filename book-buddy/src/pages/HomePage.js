import React, { useState, useMemo } from 'react';
import BookList from '../components/books/BookList';
import Filter from '../components/books/Filter';

const HomePage = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: '',
    ageGroup: '',
    availabilityType: '',
  });

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const searchTermLower = searchTerm.toLowerCase();
      
      const matchesSearch =
        book.title.toLowerCase().includes(searchTermLower) ||
        book.author.toLowerCase().includes(searchTermLower);

      const matchesGenre = filters.genre ? book.genre === filters.genre : true;
      const matchesAgeGroup = filters.ageGroup ? book.ageGroup === filters.ageGroup : true;
      const matchesAvailability = filters.availabilityType
        ? book.availabilityType === filters.availabilityType
        : true;

      return matchesSearch && matchesGenre && matchesAgeGroup && matchesAvailability;
    });
  }, [searchTerm, filters, books]);

  return React.createElement('div', { className: 'home-page-container' },
    React.createElement('h1', null, 'Discover Your Next Adventure'),
    React.createElement(Filter, {
      onSearchChange: handleSearchChange,
      onFilterChange: handleFilterChange,
    }),
    React.createElement(BookList, { books: filteredBooks })
  );
};

export default HomePage;