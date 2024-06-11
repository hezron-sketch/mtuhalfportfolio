import React from 'react';
// import './Resume.css'; // Optional: For custom styling

interface Experience {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

interface Education {
  institution: string;
  degree: string;
  duration: string;
}

interface Skill {
  name: string;
  level: string;
}

const experiences: Experience[] = [
  {
    company: 'Company A',
    position: 'Software Engineer',
    duration: 'Jan 2020 - Present',
    responsibilities: [
      'Developed and maintained web applications.',
      'Collaborated with cross-functional teams.',
      'Implemented responsive design.'
    ],
  },
  {
    company: 'Company B',
    position: 'Frontend Developer',
    duration: 'Jun 2018 - Dec 2019',
    responsibilities: [
      'Built interactive UI components.',
      'Optimized application performance.',
      'Wrote unit and integration tests.'
    ],
  },
];

const education: Education[] = [
  {
    institution: 'University X',
    degree: 'B.Sc. in Computer Science',
    duration: '2014 - 2018',
  },
];

const skills: Skill[] = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'CSS', level: 'Intermediate' },
];

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <header>
        <h1>Your Name</h1>
        <p>Your Address | Your Email | Your Phone Number</p>
      </header>
      <section>
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience">
            <h3>{exp.position} - {exp.company}</h3>
            <p>{exp.duration}</p>
            <ul>
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education">
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.duration}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Skills</h2>
        <ul className="skills">
          {skills.map((skill, index) => (
            <li key={index}>{skill.name} - {skill.level}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Resume;
