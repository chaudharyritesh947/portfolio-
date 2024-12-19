import React from "react";
import "./Contact.css"; // CSS for enhanced styling

const Contact = () => (
  <section id="contact" className="contact-section animate__animated animate__fadeInUp">
    <h2 className="contact-title">Get in Touch</h2>
    <div className="contact-container">
      <div className="contact-details">
        <p className="contact-text"><strong>Email:</strong> <a href="mailto:chaudharyritesh947@gmail.com">chaudharyritesh947@gmail.com</a></p>
        <p className="contact-text"><strong>GitHub:</strong> <a href="https://github.com/chaudharyritesh947" target="_blank" rel="noopener noreferrer">github.com/chaudharyritesh947</a></p>
        <p className="contact-text"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ritesh-kumar-the-web-engineer" target="_blank" rel="noopener noreferrer">linkedin.com/in/ritesh-kumar-the-web-engineer</a></p>
      </div>
      <div className="contact-action">
        <a href="/resume.pdf" download>
          <button className="download-resume-btn">Download Resume</button>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;