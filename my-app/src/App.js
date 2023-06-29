import React, { useState } from 'react';
import './style.css';

function MessageForm() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      content: message
    };

    fetch("https://www.hackercoop.dev/api/boop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer HackerSummer2023" // Add your API key here
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log("Message sent successfully:", result);
      })
      .catch(error => {
        console.error("Error sending message:", error);
      });

    setMessage('');
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="header-text">Homework</h1>
      </div>
      <div className="message-container">
        <form onSubmit={handleSubmit} className="text-box">
          <div>
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Enter a message"
              className="input"
            />
            <button type="submit" className="btn">
              <p className="btn-text">Send Message</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageForm;
