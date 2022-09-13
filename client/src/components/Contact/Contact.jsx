import React, { useState } from 'react';
// Helper
import { setErrors } from '../../helpers/setErrors.js';
// import Nav from '../NavBar/Nav.js';
// Styles
import s from './Contact.module.css';

const Contact = ({ user }) => {
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
    submit: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInput(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setError(
      setErrors({
        ...input,
        [name]: value,
      })
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.name || !input.email || !input.message) {
      setError(prev => {
        return {
          ...prev,
          submit: 'Fill out the fields',
        };
      });
    }
    if (
      !error.name &&
      input.name &&
      !error.email &&
      input.email &&
      !error.message &&
      input.message
    ) {
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
        {/* <Nav user={user} /> */}
        <div className={s.parent}>
          <div className={s.container}>
            <div className={s.form}>
              <h1 className={s.title}>Thank you!</h1>
              <p>We'll be in touch soon.</p>
              <button className={s.submit} onClick={handleReset}>
                Send another message
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <Nav user={user} /> */}
      <div className={s.parent}>
        <div className={s.container}>
          <h1 className={s.title}>Contact Us</h1>
          {error.submit && <p className={s.titleErrors}>{error.submit}</p>}
          <form
            autoComplete="off"
            className={s.form}
            onSubmit={e => handleSubmit(e)}
          >
            <div>
              <label className={s.subtitle}>Name</label>
              <input
                className={s.inputCreate}
                type="text"
                placeholder="Your name"
                name="name"
                value={input.name}
                onChange={e => handleChange(e)}
              />
              {error.name && <p className={s.titleErrors}>{error.name}</p>}
            </div>
            <div>
              <label className={s.subtitle}>Email</label>
              <input
                className={s.inputCreate}
                type="email"
                placeholder="Your email"
                name="email"
                value={input.email}
                onChange={e => handleChange(e)}
              />
              {error.email && <p className={s.titleErrors}>{error.email}</p>}
            </div>
            <div>
              <label className={s.subtitle}>Message</label>
              <input
                className={s.inputCreate}
                placeholder="Your message"
                name="message"
                value={input.message}
                onChange={e => handleChange(e)}
              />
              {error.message && (
                <p className={s.titleErrors}>{error.message}</p>
              )}
            </div>
            <div>
              <button className={s.submit} type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
