import React, { useState } from "react";
import "./Contact.css"; // Add custom styling
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Handle runtime email sending or store in DB
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-container">
        {/* Contact Details */}
        <motion.div
          className="contact-details"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="contact-text">
            <strong>Email:</strong> <a href="mailto:chaudharyritesh947@gmail.com">chaudharyritesh947@gmail.com</a>
          </p>
          <p className="contact-text">
            <strong>GitHub:</strong> <a href="https://github.com/chaudharyritesh947" target="_blank" rel="noopener noreferrer">github.com/chaudharyritesh947</a>
          </p>
          <p className="contact-text">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ritesh-kumar-the-web-engineer" target="_blank" rel="noopener noreferrer">linkedin.com/in/ritesh-kumar-the-web-engineer</a>
          </p>
          <div className="contact-action">
            <a href="/resume.pdf" download>
              <motion.button whileHover={{ scale: 1.1 }} className="download-resume-btn">
                Download Resume
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {submitted ? (
            <motion.p
              className="success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Thank you! Your message has been sent.
            </motion.p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />

              <label htmlFor="message">Why do you want to connect?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                required
              />

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Submit
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;