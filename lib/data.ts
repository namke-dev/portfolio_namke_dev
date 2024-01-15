import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import devTubeImg from "@/public/dev-tube.png"
import devStockImg from "@/public/dev-stock.png"
import imgGeneratorImg from "@/public/img-generator-ai.png"

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
    title: "Free ads YouTube",
    description:
      "Completed in late 2023 - a platform optimized for both mobile and PC use. Elevate the user experience on video-sharing platforms by eliminating all advertisements.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "framer-motion"],
    imageUrl: devTubeImg,
    url: "https://dev-tubes.vercel.app/search/Conan"
  },
  {
    title: "Stock market trends",
    description:
      "Developed in early 2034—an app for tracking stock prices over time, assessing company financial health, and monitoring stock market trends.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: devStockImg,
    url:"https://devstock.vercel.app/"
    
  },
  {
    title: "AI image-generator",
    description:
      "A public web app that generates images based on textual descriptions, powered by the OpenAI API.",
    tags: ["React", "Next.js", "Tailwind", "OpenAI API"],
    imageUrl: imgGeneratorImg,
    url:"https://namke-image-generator.vercel.app/"
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