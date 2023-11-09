// Notifications.js
import React from 'react';

const Notifications = ({ notifications }) => (
  <div>
    <h3>Notifications</h3>
    <ul>
      {notifications.map((notification, index) => (
        <li key={index}>{notification}</li>
      ))}
    </ul>
  </div>
);

export default Notifications;
