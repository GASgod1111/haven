import React, { useState, useEffect } from 'react';

const BookOrdersSection = () => {
  const [bookOrders, setBookOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ title: '', status: 'Pending' });

  useEffect(() => {
    // Simulate fetching book orders from an API (replace with your actual API call)
    const fetchData = async () => {
      // Simulating data retrieval
      const response = await fetch('/bookorders/<int:OrderID>');
      const data = await response.json();
      setBookOrders(data);
    };

    fetchData();
  }, []);

  const approveOrder = (orderId) => {
    // Simulate approving a book order (replace with your actual API call)
    const updatedOrders = bookOrders.map((order) =>
      order.id === orderId ? { ...order, status: 'Approved' } : order
    );
    setBookOrders(updatedOrders);
  };

  const rejectOrder = (orderId) => {
    // Simulate rejecting a book order (replace with your actual API call)
    const updatedOrders = bookOrders.map((order) =>
      order.id === orderId ? { ...order, status: 'Rejected' } : order
    );
    setBookOrders(updatedOrders);
  };

  const addOrder = () => {
    // Simulate adding a new book order (replace with your actual API call)
    const orderToAdd = { title: newOrder.title, status: newOrder.status, id: bookOrders.length + 1 };
    const updatedOrders = [...bookOrders, orderToAdd];
    setBookOrders(updatedOrders);

    // Reset the form
    setNewOrder({ title: '', status: 'Pending' });
  };

  return (
    <div className="book-orders-section">
      <h2>Book Orders</h2>
      <div className="book-orders-list">
        {bookOrders.map((order) => (
          <div key={order.id} className="book-order">
            <p className="order-detail">Title: {order.title}</p>
            <p className="order-detail">Status: {order.status}</p>
            <button className="approve-button" onClick={() => approveOrder(order.id)}>
              Approve
            </button>
            <button className="reject-button" onClick={() => rejectOrder(order.id)}>
              Reject
            </button>
          </div>
        ))}
      </div>
      <div className="add-update-order">
        <h2>Add Book Order</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Title"
          value={newOrder.title}
          onChange={(e) => setNewOrder({ ...newOrder, title: e.target.value })}
        />
        <button className="action-button" onClick={addOrder}>
          Add Order
        </button>
      </div>
    </div>
  );
};

export default BookOrdersSection;
