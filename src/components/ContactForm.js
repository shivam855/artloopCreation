import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import asset2 from '../assets/Asset 2.png';

export const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    projectBudget: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    let timeoutId;
    if (status) {
      timeoutId = setTimeout(() => {
        setStatus('');
      }, 15000); // 15 seconds
    }
    return () => clearTimeout(timeoutId);
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm('service_td2rxm6', 'template_vza89hp', form.current, {
        publicKey: '6esZzpKWZjIp-9f5B',
      })
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', projectName: '',
            projectBudget: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try again.');
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className="contact-section">
      <div style={{ textAlign: 'left', maxWidth: '100%', padding: '2rem 13rem', gap: '2rem'}}>
        <h2 style={{fontSize: '50px'}}>Let's Work Together</h2>
        <p style={{fontSize: '20px'}}>
          We'd love to hear from you. Whether you have a project in mind or just want to say.
          <br />
          Hi, drop us a message and we’ll get back to you shortly.
        </p>
      </div>
  
      <div className="container contact-container my-5 p-4 bg-white shadow rounded">
        <div className="row g-0">
          {/* Contact Form */}
          <div className="col-md-6 p-4">
            <h1 className="mb-4">Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="projectName" className="form-label">What type of project are you working on?</label>
                <input
                  type="text"
                  className="form-control"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="projectBudget" className="form-label">Estimated Budget</label>
                <select
                  className="form-control"
                  id="projectBudget"
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleChange}
                  // required
                >
                  <option value="" disabled>Select a budget</option>
                  <option value="Less than $500">Less than $500</option>
                  <option value="$500 - $1,000">$500 - $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="More than $10,000">More than $10,000</option>
                </select>
              </div>
  
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
  
              <button type="submit" className="btn btn-primary">Send Message</button>
              {status && <div className="mt-3 text-muted">{status}</div>}
            </form>
          </div>
  
          {/* Contact Info */}
          <div className="col-md-6 p-4 bg-light">
            <div className="logo" style={{ textAlign: 'center', backgroundColor: 'black', padding: '24px'}}>
              <img src={asset2} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <br />
            <br />
            <h2>Our Office</h2>
            <p><strong>Address:</strong><br />4th Floor, B-51, E Block,<br />New Ashok Nagar, Delhi – 110096</p>
            <p><strong>Email:</strong><br /><a href="mailto:info@artloopcreations.in">info@artloopcreations.in</a></p>
            <p><strong>Phone:</strong><br />+91-93552-72853</p>
          </div>
        </div>
      </div>
    </section>
  );
  
};