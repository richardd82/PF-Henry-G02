import React, { useState } from 'react';
// Helper
import { setErrors } from '../../helpers/setErrors.js';

const Contact = () => {
  // Local states
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Error handling
  const [error, setError] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setError(setErrors(input));
  };

  const handleSubmit = () => {
    if (!error.name && !error.email && !error.message) {
      setInput({
        name: '',
        email: '',
        message: '',
      });
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <>
        <h1>Thank you!</h1>
        <p>We'll be in touch soon.</p>
        <button onClick={handleReset}>Send another message</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={input.name}
          onChange={e => handleChange(e)}
        />
        {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email"
          name="email"
          value={input.email}
          onChange={e => handleChange(e)}
        />
        {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
      </div>
      <div>
        <textarea
          placeholder="Your message"
          name="message"
          value={input.message}
          onChange={e => handleChange(e)}
        />
        {error.message && <p style={{ color: 'red' }}>{error.message}</p>}
      </div>
      <div>
        <button type="submit">Send a message</button>
      </div>
    </form>
  );
};

export default Contact;
