import React from 'react';
import './FAQForm.css';

function FAQForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server.
    alert('Your doubt has been submitted!');
    e.target.reset(); // Clear the form
  };

  return (
    <div className="form-container page-card">
      <h2 className="form-title">Ask a Doubt</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="topic" className="form-label">Topic</label>
          <input type="text" id="topic" className="form-input" placeholder="e.g., BTP Projects" required />
        </div>
        <div className="form-group">
          <label htmlFor="detail" className="form-label">Detail</label>
          <textarea id="detail" rows="4" className="form-input" placeholder="Enter your question here..." required></textarea>
        </div>
        <div className="form-actions">
          <button className="button button-primary" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default FAQForm;
