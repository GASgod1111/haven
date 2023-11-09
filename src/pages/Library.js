import React, { useState, useEffect } from 'react';
import BookFilterSort from '../Library/BookFilterSort';
import BookDetails from '../Library/BookDetails'; 
import SearchBar from '../Library/SearchBar'; 
import Pagination from '../Library/Pagination'; 
import BookReviews from '../Library/BookReviews'; 
// import ImageCarousel from './ImageCarousel';



function Library() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('title');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  // Dummy data for testing
  useEffect(() => {
    const dummyBooks = [
      { id: 1, title: 'Book 1', author: 'Author 1', reviews: ['Good book!', 'Highly recommended'] },
      { id: 2, title: 'Book 2', author: 'Author 2', reviews: ['Amazing!', 'Must read'] },
      // Add more books...
    ];
    setBooks(dummyBooks);
    setFilteredBooks(dummyBooks);
  }, []);

  const filterOptions = ['all', 'fiction', 'non-fiction']; // Example filter options
  const sortOptions = ['title', 'author', 'rating']; // Example sort options

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    const filtered = books.filter((book) => (newFilter === 'all' ? true : book.genre === newFilter));
    setFilteredBooks(filtered);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    const sorted = [...filteredBooks].sort((a, b) => {
      if (newSort === 'title') return a.title.localeCompare(b.title);
      if (newSort === 'author') return a.author.localeCompare(b.author);
      // Add more sorting options...
      return 0;
    });
    setFilteredBooks(sorted);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetails = () => {
    setSelectedBook(null);
  };

  const handleSearch = (searchTerm) => {
    const searched = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(searched);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>Library</h2>
      {/* <ImageCarousel /> */}
      <BookFilterSort
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <div>
        {currentBooks.map((book) => (
          <div key={book.id} onClick={() => handleBookClick(book)}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
          </div>
        ))}
      </div>
      <BookDetails book={selectedBook} onClose={closeBookDetails} />

      <div>
        <h2>Library</h2>
        <SearchBar onSearch={handleSearch} />

        <div>
          {currentBooks.length > 0 ? (
            currentBooks.map((book) => (
              <div key={book.id}>
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <BookReviews book={book} reviews={book.reviews} />
              </div>
            ))
          ) : (
            <p>No books found.</p>
          )}
        </div>

        {filteredBooks.length > booksPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredBooks.length / booksPerPage)}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
}

export default Library;
