import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import devTubeImg from "@/public/dev-tube.png"
import devStockImg from "@/public/dev-stock.png"
import katalogImg from "@/public/katalog.png"


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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FPT University",
    location: "District 9 Hi-Tech Park, Ho Chi Minh city, VN",
    description:
      "Completed a Bachelor’s degree over a four-year period. During the third year, I secured a position as a Back-end Developer, gaining practical experience alongside my studies.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "SWE AT RESO",
    location: "District 9 Hi-Tech Park, Ho Chi Minh city, Vietnam",
    description:
      "Worked as a Back-end Developer at Reso for one year, where I contributed to various backend projects and solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "SWE AT FSOFT",
    location: "District 9 Hi-Tech Park, Ho Chi Minh city, Vietnam",
    description:
      "Served as a Back-end Developer at FPT Software, focusing on the development and optimization of server-side applications almost a year-long tenure.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "SWE AT NASHTECH",
    location: "Etown 1, Tan Binh District, Ho Chi Minh ciy, Vietnam",
    description:
      "Joined NashTech Global in early 2024 as a Back-end Developer, working on advanced backend solutions and collaborating with diverse teams to enhance software performance and reliability.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "",
    location: "",
    description:
      "Currently focusing on expanding my expertise to full-stack development. I am enrolled in advanced courses and engaging in new projects using React and React Native to build comprehensive and innovative applications.",
    icon: React.createElement(FaReact),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "Free Ads YouTube",
    description:
      "Completed in late 2023 - a platform optimized for both mobile and PC use. Elevate the user experience on video-sharing platforms by eliminating all advertisements.",
    tags: ["Next.js", "MongoDB", "Tailwind", "framer-motion"],
    imageUrl: devTubeImg,
    url: "https://www.devtube.online/"
  },
  {
    title: "Stock Market Index",
    description:
      "Developed in early 2024 — an app for tracking stock prices over time, assessing company financial health, and monitoring stock market trends.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: devStockImg,
    url:"https://www.devstock.online/"
    
  },
  {
    title: "Furniture 3D catalog",
    description:
      "An app act as a vertual show case for furnitures, allowing users to visualize pieces in various settings. However, as it is currently underdeveloped, many features are still in progress.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: katalogImg,
    url:"https://www.katalog3d.com/"
    
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