import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vite from "@/public/vite.png";
import linkedOut from "@/public/linked-out.png"; 
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const info={
  firstname:'Manuel',
  midname:'Diamond',
  lastname:'Listowell-Ashong',
  email:'manueldiamondlistowell@gmail.com',
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills", 
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Graduated bootcamp",
  //   location: "Miami, FL",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2019",
  // },
  {
    title: "Front-End Developer | Intern ",
    location: "ITANDT, Nigeria",
    description:
      "I worked as a react front-end developer intern for 5 months gathering experience while assisting development on the front-end of real-world applications well as gained insights into backend development. I also upskilled with alot of wev development libraries such as Next, Express, Angular, Tailwind, Bootstrap",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Tema, Ghana",
    description:
      "I'm now working freelance as a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Express and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "vite-frontend",
    description:
      "Simple recreation of the vite landing page in react",
    tags: ["React","Tailwind"],
    imageUrl: vite,
  },
  {
    title: "linked-out",
    description:
      "Primitive Linked-in clone with basic feed functiontionality implemented with Firebase",
    tags: ["React", "Redux", "Firebase",],
    imageUrl: linkedOut,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;