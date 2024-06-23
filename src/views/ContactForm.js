import React, { useState } from 'react';
import '../styles.css'
import './ContactForm.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: email,
        message: message,
      }),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Email Me</h1>
        <div class="form-container">
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </label>
            <button type="submit">Submit</button>
        </div>  
      </form>
    </div>
  );
};

export default ContactForm;
