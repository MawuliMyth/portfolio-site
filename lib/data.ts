import React from "react";
import { SiFlutter } from "react-icons/si";

export const info = {
  firstname: 'Joseph',
  title: 'Flutter Developer',
  description: " is a new and rising Full-Stack React developer with 5 years of experience",
  midname: 'Mawule',
  lastname: 'Mensah',
  displayName: 'Joseph Mawule',
  email: 'josephmawulemensah04@gmail.com',
  photo: '/DARRT GUYY.jpeg',
  enjoyBuilding: 'mobile apps',
  libOrFramework: 'Flutter/Dart',
  yearsExperience: 1,
  social: {
    github: "https://github.com/MawuliMyth",
    linkedin: "https://linkedin.com/in/joseph",
  },
  website: 'https://mawulimythportfolio.vercel.app',
}

export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "About",
    hash: "#about",
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
  // }
  {
    title: "Flutter Mobile Developer",
    location: "TrustPoint, Lagos, Nigeria",
    locationLink: "#", // TODO: Add real URL
    description:
      "Landed the role through a local tech community. Joined TrustPoint as a mobile developer to help build a Flutter app focused on buying and selling social media assets like accounts, likes, and folders. While the app didn’t make it to production, it gave me real experience working with a client, interpreting requirements, and integrating Node.js APIs. I also got to explore state management in Flutter, build modular UI components, and handle asynchronous data from backend services.",
    icon: React.createElement(SiFlutter),
    date: "Nov 2024 – Dec 2024",
  },
  {
    title: "Flutter Developer",
    location: "Curve, Tema, Ghana (Remote)",
    locationLink: "#", // TODO: Add real URL
    description:
      "Joined Curve to build a production-grade hostel management app with complex features like room slot booking, reservations, user management, and real-time availability tracking. Took ownership of several screens, implemented scalable and responsive UI components, and optimized performance for low-end Android devices. This project gave me deeper insight into writing maintainable Flutter code, structuring a large app, and collaborating remotely with backend and design teams. The app is nearing full release, and I continue to iterate and polish features based on user feedback.",
    icon: React.createElement(SiFlutter),
    date: "Mar 2025 – Present",
  },
]

export const projectsData = [

  {
    title: "Top Growth",
    description: "Farm-produce marketplace platform with a custom admin system for vendors to upload products. It focuses on connecting buyers directly with farmers.",
    tags: ["flutter", "firebase", "cloudinary", "responsive"],
    imageUrl: '/topgrow/8.jpeg',
    imageurls: [],
    link: '#',
  },
  {
    title: "Curve Booking",
    description:
      "simple recreation of the vite landing page in react",
    tags: ["flutter", "paystack", "cloudinary", 'jwt auth', "notifications", "responsive",],
    imageUrl: '/curvebookings/2.jpeg',
    imageurls: [],
    link: '#',
  },
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Dart",
  "Flutter",
  "Java",
  "C++",
  "Wordpress",
  "Node.js",
  "Git collab",
  "Express.js",
  "Paystack",
  "MySQL",
  'Firebase',
  'MongoDB',
  'Postman',
  'Blender',
] as const;
