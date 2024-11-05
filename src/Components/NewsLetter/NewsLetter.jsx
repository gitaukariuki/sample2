import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = () => {
    const approvedDomains = ['.com', '.in', '.org', '.net', '.edu'];
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email)) {
      const domain = email.split('@')[1];
      const isValidDomain = approvedDomains.some((approvedDomain) =>
        domain.endsWith(approvedDomain)
      );

      setMessage(isValidDomain ? 'Subscribed to the Newsletter!' : 'Please enter a valid email with an approved domain');
    } else {
      setMessage(email ? 'Please enter a valid email ID' : '');
    }
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to Our Newsletter and Stay Updated</p>
      <div>
        <input
          type="email"
          placeholder="Your Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={validateEmail}>Subscribe</button>
      </div>
      {message && <p className="msg" style={{ color: message.includes('Subscribed') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
};

export default NewsLetter;
