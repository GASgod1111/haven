import React, { useState, useEffect } from 'react';

const LendingRequestsSection = () => {
  const [lendingRequests, setLendingRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ title: '', status: 'Pending' });

  useEffect(() => {

    const fetchData = async () => {
      // Simulating data retrieval
      const response = await fetch('lendings');
      const data = await response.json();
      setLendingRequests(data);
    };

    fetchData();
  }, []);

  const approveRequest = (requestId) => {
    // Simulate approving a lending request (replace with your actual API call)
    const updatedRequests = lendingRequests.map((request) =>
      request.id === requestId ? { ...request, status: 'Approved' } : request
    );
    setLendingRequests(updatedRequests);
  };

  const rejectRequest = (requestId) => {
    // Simulate rejecting a lending request (replace with your actual API call)
    const updatedRequests = lendingRequests.map((request) =>
      request.id === requestId ? { ...request, status: 'Rejected' } : request
    );
    setLendingRequests(updatedRequests);
  };

  const addRequest = () => {
    // Simulate adding a new lending request (replace with your actual API call)
    const requestToAdd = { title: newRequest.title, status: newRequest.status, id: lendingRequests.length + 1 };
    const updatedRequests = [...lendingRequests, requestToAdd];
    setLendingRequests(updatedRequests);

    // Reset the form
    setNewRequest({ title: '', status: 'Pending' });
  };

  return (
    <div className="lending-requests-section">
      <h2>Lending Requests</h2>
      <div className="lending-requests-list">
        {lendingRequests.map((request) => (
          <div key={request.id} className="lending-request">
            <p className="request-detail">Title: {request.title}</p>
            <p className="request-detail">Status: {request.status}</p>
            <button className="approve-button" onClick={() => approveRequest(request.id)}>
              Approve
            </button>
            <button className="reject-button" onClick={() => rejectRequest(request.id)}>
              Reject
            </button>
          </div>
        ))}
      </div>
      <div className="add-update-request">
        <h2>Add Lending Request</h2>
        <input
          type="text"
          className="input-field"
          placeholder="Title"
          value={newRequest.title}
          onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
        />
        <button className="action-button" onClick={addRequest}>
          Add Request
        </button>
      </div>
    </div>
  );
};

export default LendingRequestsSection;
