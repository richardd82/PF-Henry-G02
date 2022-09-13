import React, { useState, useRef } from 'react';
// Helper
import { setErrors } from '../../helpers/setErrors.js';
// import Nav from '../NavBar/Nav.js';
//import { helpHttp } from '../../helpers/helpHttp.js';
import emailjs from '@emailjs/browser';
// codigo para reemplazar el email a283c9b9690c7603de76bc317ef60969
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
const form = useRef()
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

      emailjs.sendForm('service_loeaupt', 'template_jdmw2f6', form.current, '1mx1KpuB5wsywFkli')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
/*       helpHttp()
      .post("https://formsubmit.co/38ad089733f4917f3fb35745511e2678", {
        body: input,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
      })
      .then((res)=> {
        return res 
      }) */
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
            ref={form}
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
