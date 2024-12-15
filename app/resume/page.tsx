import React from "react";
import { Navigation } from "../components/nav";
import { Mail, PhoneCallIcon, PinIcon } from "lucide-react";
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
    position: "Software Developer",
    duration: "May 2024 - Present",
    responsibilities: [
      "Developing and maintaining web applications.",
      "Collaborating with cross-functional teams.",
      "Implementing responsive design.",
    ],
  },
  {
    company: "Localhost Developers",
    position: "Software Developer",
    duration: "Jun 2022",
    responsibilities: [
      "Developed the localhostwines Web app",
      "Building responsive and interactive UI components.",
      "Optimizing application performance.",
      "Writing unit and integration tests.",
      "Maintenance and management of localhostwines website",
    ],
  },
];

const education: Education[] = [
  {
    institution: "Technical University of Mombasa",
    degree: "B.Sc. in Computer Science",
    duration: "2021 - 2025",
  },
];

const skills: Skill[] = [
  { name: "ML & AI", level: "Intermediate" },
  { name: "Web Development", level: "Advanced" },
  { name: "Python for data science", level: "Advanced" },
  { name: "Flutter", level: "Intermediate" },
  { name: "Web3", level: "Intermediate" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Data analysis", level: "Advanced" },
  { name: "Git & github", level: "Advanced" },
  { name: "React/NextJS", level: "Advanced" },
];

export default function Resume() {
  return (
    <>
      <Navigation />
      <div className="flex items-center m-auto">
        <div className="m-auto pt-20 px-10 text-white  font-display">
          <header>
            <h1 className="font-bold text-4xl">Hezron Onyango</h1>
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
              <div className="inline-flex ">
                {" "}
                <PhoneCallIcon size={20} /> &nbsp;+254707069007
              </div>
              <br />
              <br />
              <br />
            </p>
          </header>
          <div className="flex flex-col sm:flex-row gap-5 p-0">
            <section>
              <h2 className="font-bold text-4xl">Experience</h2>
              <br />
              {experiences.map((exp, index) => (
                <div key={index} className="experience">
                  <div className="font-bold text-xl">
                    {exp.position} - {exp.company}
                  </div>
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

            <br />
            <section>
              <h2 className="font-bold text-4xl">Education</h2>
              <br />
              {education.map((edu, index) => (
                <div key={index} className="education">
                  <h3>{edu.degree}</h3>
                  <p>{edu.institution}</p>
                  <p>{edu.duration}</p>
                </div>
              ))}
            </section>
            <br />

            <br />
            <section>
              <h2 className="font-bold text-4xl">Skills</h2>
              <br />
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
      </div>
      <div className="h-20"></div>
    </>
  );
}
