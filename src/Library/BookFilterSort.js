// BookFilterSort.js
import React from 'react';
import './BookFilterSort.css'; // Import the CSS file

const BookFilterSort = ({ filterOptions, sortOptions, onFilterChange, onSortChange }) => {
  return (
    <div className="filter-sort">
      <label>Filter by:</label>
      <select onChange={onFilterChange}>
        <option value="all">All Books</option>
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label>Sort by:</label>
      <select onChange={onSortChange}>
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookFilterSort;
