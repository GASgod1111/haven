import React, { useState, useEffect } from 'react';

const BooksSection = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  useEffect(() => {
    // Simulate fetching books from an API (replace with your actual API call)
    const fetchData = async () => {
      // Simulating data retrieval
      const response = await fetch('/books');
      const data = await response.json();
      setBooks(data);
    };

    fetchData();
  }, []);

  const addBook = () => {
    // Simulate adding a new book to the store (replace with your actual API call)
    const bookToAdd = { title: newBook.title, author: newBook.author, id: books.length + 1 };
    const updatedBooks = [...books, bookToAdd];
    setBooks(updatedBooks);

    // Reset the form
    setNewBook({ title: '', author: '' });
  };

  return (
    <div className="books-section">
      <h2>Books</h2>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            <p className="book-detail">Title: {book.title}</p>
            <p className="book-detail">Author: {book.author}</p>
          </div>
        ))}
      </div>
      <div className="add-update-book">
        <h2>Add Book</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button className="action-button" onClick={addBook}>
          Add Book
        </button>
      </div>
    </div>
  );
};

export default BooksSection;
