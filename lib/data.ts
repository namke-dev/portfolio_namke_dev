import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
  {
    title: "Graduated Software Engineering",
    location: "FPT University, Ho chi Minh ciy, VN",
    description:
      "I graduated after 4 years of studying. Since 2 first years at University, I have do many project as assignment and group project. In the thirt year, I found a job as a back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Back-end Developer",
    location: "Ho chi Minh ciy, VN",
    description:
      "I worked as a back-end developer for 1.5 years in a job and half year in another job.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "I decide to upskilled to the full stack. I join course and start new project with React and Angular, UX/UI. Now, I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dev Assert",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "ASP.NET Core",
  ".NET Middleware",
  "REST APIs",
  "Docker Compose",
  "Microservice",
  "MS-SQL",
  "My SQL",
  "MongoDB",
  "PostgreSQL",
  "C#",
  "Python",
  "Java",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Framer Motion",
  "Git",
] as const;