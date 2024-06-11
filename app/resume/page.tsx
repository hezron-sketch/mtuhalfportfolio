import React from "react";
import { Navigation } from "../components/nav";
// import './Resume.css'; // Ensure your CSS file path is correct

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
    company: "Company A",
    position: "Software Engineer",
    duration: "Jan 2020 - Present",
    responsibilities: [
      "Developed and maintained web applications.",
      "Collaborated with cross-functional teams.",
      "Implemented responsive design.",
    ],
  },
  {
    company: "Company B",
    position: "Frontend Developer",
    duration: "Jun 2018 - Dec 2019",
    responsibilities: [
      "Built interactive UI components.",
      "Optimized application performance.",
      "Wrote unit and integration tests.",
    ],
  },
];

const education: Education[] = [
  {
    institution: "University X",
    degree: "B.Sc. in Computer Science",
    duration: "2014 - 2018",
  },
];

const skills: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "CSS", level: "Intermediate" },
];

export default function Resume() {
  return (
    <>
      <Navigation />
      <div className="flex items-center m-auto">
        <div className="m-auto pt-20 text-white">
          <header>
            <h1 className="font-bold underline underline-offset-8">mtu HALF</h1>
            <br />
            <p>Mombasa, KE | hpaulhezne@gmail.com | +254707069007</p>
          </header>
          <br />
          <section>
            <h2 className="font-bold underline underline-offset-1">
              Experience
            </h2>
            {experiences.map((exp, index) => (
              <div key={index} className="experience">
                <h3>
                  {exp.position} - {exp.company}
                </h3>
                <p>{exp.duration}</p>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <br />
          <section>
            <h2 className="font-bold underline underline-offset-1">
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="education">
                <h3>{edu.degree}</h3>
                <p>{edu.institution}</p>
                <p>{edu.duration}</p>
              </div>
            ))}
          </section>
          <br />
          <section>
            <h2 className="font-bold underline underline-offset-1">Skills</h2>
            <ul className="skills">
              {skills.map((skill, index) => (
                <li key={index}>
                  {skill.name} - {skill.level}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
