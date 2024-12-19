// Components/Testimonials.js
import React from "react";
import "./Testimonials.css"; // CSS for enhanced styling

const Testimonials = () => (
  <section id="testimonials" className="testimonials-section animate__animated animate__fadeIn">
    <h2 className="testimonials-title">Testimonials</h2>
    <div className="testimonials-grid">
      <div className="testimonial-item">
        <p className="testimonial-text">
          "It was great working with Ritesh at Point Pickup, where his contributions to our projects were nothing short of exceptional. His deep expertise in React, Next.js, TypeScript, and APIs, while covering various architecture patterns, helped drive our projects forward, consistently delivering high-quality, efficient code. Ritesh was especially adept at managing tight deadlines, always ensuring we stayed on track without sacrificing quality. Beyond his technical skills, his communication was great, fostering collaboration within the team. His combination of technical ability and strong work ethic made a tremendous impact, and I highly recommend him to any team looking for a talented and reliable developer."
        </p>
        <footer className="testimonial-footer">- Andrei Popa, Co-Founder & CTO @ Dejacast</footer>
      </div>
      <div className="testimonial-item">
        <p className="testimonial-text">
          "I am pleased to recommend Ritesh Kumar, a highly skilled software engineer specializing in backend development, who has been an invaluable partner in enhancing the platform infrastructure at Retail Hub. Despite working in a team with varying skill levels and facing management challenges, Ritesh successfully developed the platform's backend and played a key role in migrating to a new programming language. He consistently demonstrated technical expertise and a deep understanding of modern backend technologies. His ability to solve complex challenges and optimize system performance was instrumental in ensuring the robustness and reliability of our platform."
        </p>
        <footer className="testimonial-footer">- Davide Prando, Data Scientist and Material Engineer</footer>
      </div>
      <div className="testimonial-item">
        <p className="testimonial-text">
          "I had the pleasure of working with Ritesh at Point Pickup, where his technical expertise and dedication significantly enhanced our operations. Ritesh played a key role in the migration of our services to the MERN stack, greatly improving system scalability and performance. He developed GraphQL APIs, enabling more flexible and efficient data retrieval, and successfully migrated 80% of our REST APIs to GraphQL. Ritesh's innovative use of Aerospike for data handling and his integration of Beans.AI and Google Maps optimized our last-mile delivery tracking. Additionally, he designed a responsive control panel using React and Next.js, streamlining order and delivery monitoring."
        </p>
        <footer className="testimonial-footer">- Chris Schoenfeld, Owner at Stamford AI Consulting</footer>
      </div>
    </div>
  </section>
);

export default Testimonials;