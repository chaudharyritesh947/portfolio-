import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css'; // Add your custom styles here

const experienceData = [
  {
    company: "ClicQA",
    role: "Senior Software Engineer",
    duration: "Jun 2023 - Present",
    location: "Hyderabad, Telangana, India · Remote",
    description: [
      "Developing the architecture.",
      "Developing the Backend Flow.",
      "Optimizing APIs and Db queries.",
      "Research and Development.",
      "AI Integration.",
      "Reporting, Metrics, and CRON-JOB implementation.",
      "Web and Mobile Parser.",
    ],
    techStack: ["System Design", "Node.js", "Nest.js", "Electron.js", "PostgreSQL", "MongoDB", "ElasticSearch", "React.js"],
  },
  {
    company: "Point Pickup",
    role: "Software Engineer",
    duration: "Jan 2022 - May 2023",
    location: "United States · Remote",
    description: [
      "Created the ER Data modeling for the Product.",
      "Implemented the schema architecture on MongoDB and Firestore.",
      "Shifted the application backend from Express to NEST.js.",
      "Developed the User Management and Role-based workflow/UI.",
      "Optimized report analytics API and reports dashboard.",
    ],
    techStack: ["MERN", "Next.js", "Nest.js", "GraphQL", "AWS", "Docker"],
  },
  {
    company: "Pazo",
    role: "Contract Software Engineer",
    duration: "Nov 2021 - Jan 2022",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Enhanced the Site detail page to accommodate meta information.",
      "Worked on converting images to PDF using Restpack.",
      "Learned about load balancers.",
      "Developed a tabular dashboard to display processed information.",
      "Implemented CSV data processing for bulk updates.",
      "Developed a new JavaScript application integrating Calendly and Twilio.",
    ],
    techStack: ["MongoDB", "MySQL", "Node.js", "Express.js", "React.js", "JavaScript", "TypeScript"],
  },
  {
    company: "Techlify",
    role: "Software Engineer | Architect",
    duration: "Nov 2020 - Oct 2021",
    location: "Demerara-Mahaica, Guyana",
    description: [
      "Developed schema architecture for Techlify projects from scratch.",
      "Worked with CTO and CEO to develop and optimize APIs.",
      "Configured Bahmni open-source software for client needs.",
      "Enhanced features like full-text searching, infinite scroll, and wildcard filters.",
      "Managed a team of 3 developers.",
    ],
    techStack: ["MongoDB", "MySQL", "Node.js", "Express.js", "React.js", "JavaScript", "TypeScript", "Angular"],
  },
  {
    company: "LeadSquared",
    role: "Intern Software Developer",
    duration: "May 2019 - May 2020",
    location: "Bengaluru, Karnataka, India",
    description: [
      "Developed a weather forecast application and student registration system.",
      "Worked with senior leads to enhance product efficiency.",
      "Learned coding standards through the code review process.",
      "Improved LeadSquared's application navbar and developed the opportunity details feature.",
    ],
    techStack: ["C#", "ASP.NET", "Microsoft SQL Server", "JavaScript", "HTML/CSS"],
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Experience
      </motion.h2>
      <div className="experience-container">
        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{job.role}</h3>
            <h4>{job.company}</h4>
            <p className="job-duration">{job.duration}</p>
            <p className="job-location">{job.location}</p>
            <ul className="job-description">
              {job.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> {job.techStack.join(", ")}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;