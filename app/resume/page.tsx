import React from "react";
import { Navigation } from "../components/nav";
import {
  LocateFixedIcon,
  LocateIcon,
  Mail,
  PhoneCallIcon,
  PinIcon,
} from "lucide-react";
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
    company: "SwahiliPot Hub",
    position: "Software Engineer",
    duration: "May 2024 - Present",
    responsibilities: [
      "Developed and maintained web applications.",
      "Collaborated with cross-functional teams.",
      "Implemented responsive design.",
    ],
  },
  {
    company: "Localhost Developers",
    position: "Software Engineer",
    duration: "Jun 2022 - Present",
    responsibilities: [
      "Built interactive UI components.",
      "Optimized application performance.",
      "Wrote unit and integration tests.",
      "Developed the localhostwines Web app",
    ],
  },
];

const education: Education[] = [
  {
    institution: "Technical University of Mombasa",
    degree: "B.Sc. in Computer Science",
    duration: "2021 - Present",
  },
];

const skills: Skill[] = [
  { name: "JavaScript", level: "Advanced" },
  { name: "Django", level: "Advanced" },
  { name: "Data analysis", level: "Advanced" },
  { name: "Git & github", level: "Advanced" },
  { name: "React/NextJS", level: "Advanced" },
];

export default function Resume() {
  return (
    <>
      <Navigation />
      <div className="flex items-center m-auto">
        <div className="m-auto pt-20 px-10 text-white">
          <header>
            <h1 className="font-bold underline underline-offset-8">mtu HALF</h1>
            <br />
            <p>
              <div className="inline-flex">
                <PinIcon size={20} /> &nbsp; Mombasa, KE
              </div>{" "}
              <br />
              <div className="inline-flex">
                {" "}
                <Mail size={20} /> &nbsp; hpaulhezne@gmail.com
              </div>{" "}
              <br />
              <div className="inline-flex">
                {" "}
                <PhoneCallIcon size={20} /> &nbsp;+254707069007
              </div>
            </p>
          </header>
          <br />
          <section>
            <h2 className="font-bold underline underline-offset-1">
              Experience
            </h2>
            {experiences.map((exp, index) => (
              <div key={index} className="experience">
                <h3 className="font-bold">
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
