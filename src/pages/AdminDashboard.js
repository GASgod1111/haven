import React, { useState } from 'react';
import './AdminDashboard.css';
import BooksSection from './BooksSection';
import BookOrdersSection from './BookOrdersSection';
import LendingRequestsSection from './LendingRequestsSection';
import useNotifications from './useNotifications';
import Library from './Library';
import Notifications from './Notifications';  
import ImageCarousel from './ImageCarousel';




const AdminDashboard = ({ books, setBooks }) => {
  const [activeSection, setActiveSection] = useState('books');
  const { notifications, addNotification } = useNotifications();
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOverdueBooks = () => {
    const overdueBooks = checkForOverdueBooks();
    if (overdueBooks.length > 0) {
      addNotification(`You have ${overdueBooks.length} overdue books.`);
    }
  };

  const checkForOverdueBooks = () => { 
    const currentDate = new Date();
    const overdueBooks = books.filter((book) => new Date(book.dueDate) < currentDate);
    return overdueBooks;
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    // TODO: Implement logic to add a new book (replace with actual API call if needed)
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);

    // Reset the form
    setNewBook({ title: '', author: '' });

    addNotification('Book added successfully.');
  };

  const handleUpdateBook = (e) => {
    e.preventDefault();

    if (selectedBook) {
      // TODO: Implement logic to update the selected book (replace with actual API call if needed)
      const updatedBooks = books.map((book) =>
        book.id === selectedBook.id ? { ...book, ...selectedBook } : book
      );
      setBooks(updatedBooks);

      // Reset the form and selected book
      setNewBook({ title: '', author: '' });
      setSelectedBook(null);

      addNotification('Book updated successfully.');
    }
  };

  return (
    
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <img src="./amazing.jpeg" alt="Amazing" />
        <h1>Welcome to the Admin Dashboard</h1>
      </div>

      <div className="sections-container">
        <div className="section" onClick={() => setActiveSection('books')}>
          <h2>Books</h2>
          {activeSection === 'books' && <BooksSection />}
        </div>
        <div className="section" onClick={() => setActiveSection('library')}>
          <h2>Library</h2>
          {activeSection === 'library' && <Library />}
        </div>

        <div className="section" onClick={() => setActiveSection('bookOrders')}>
          <h2>Book Orders</h2>
          {activeSection === 'bookOrders' && <BookOrdersSection />}
        </div>

        <div className="section" onClick={() => setActiveSection('lendingRequests')}>
          <h2>Lending Requests</h2>
          {activeSection === 'lendingRequests' && <LendingRequestsSection />}
        </div>
      </div>

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
      <ImageCarousel />


      <Notifications notifications={notifications} />

    </div>
  );
};

export default AdminDashboard;
