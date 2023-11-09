// AdminSection.js
import React, { useState } from 'react';

const AdminSection = ({ books, onAddBook, onUpdateBook, onMarkBook }) => {
  const [newBook, setNewBook] = useState({ title: '', author: '', isAvailable: true });

  const handleAddBook = () => {
    onAddBook(newBook);
    setNewBook({ title: '', author: '', isAvailable: true });
  };

  const handleUpdateBook = (bookId, updatedData) => {
    onUpdateBook(bookId, updatedData);
  };

  const handleMarkBook = (bookId, isAvailable) => {
    onMarkBook(bookId, isAvailable);
  };

  return (
    <div className="admin-section">
      <h2>Admin Section</h2>
      <div>
        <h3>Add New Book</h3>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <div>
        <h3>Update Book</h3>
        {books.map((book) => (
          <div key={book.id}>
            <input
              type="text"
              placeholder="Title"
              value={book.title}
              onChange={(e) => handleUpdateBook(book.id, { title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Author"
              value={book.author}
              onChange={(e) => handleUpdateBook(book.id, { author: e.target.value })}
            />
          </div>
        ))}
      </div>
      <div>
        <h3>Mark Book</h3>
        {books.map((book) => (
          <div key={book.id}>
            <label>
              <input
                type="checkbox"
                checked={book.isAvailable}
                onChange={() => handleMarkBook(book.id, !book.isAvailable)}
              />
              Available
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSection;
