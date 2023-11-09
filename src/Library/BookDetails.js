// BookDetails.js
import React from 'react';
import './BookDetails.css'; 

const BookDetails = ({ book, onClose }) => {
  if (!book) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Book Details</h2>
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Published Year: {book.publishedYear}</p>
        <div className="add-update-book">
        <h2>Add/Update Book</h2>
        <form>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter book title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />

          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter book author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />

          <button type="submit" className="action-button" onClick={handleAddBook}>
            Add Book
          </button>
          <button type="button" className="action-button" onClick={handleUpdateBook}>
            Update Book
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default BookDetails;
