"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="
        max-w-[45rem]
        mb-28 sm:mb-40
        scroll-mt-32
        text-center 
        leading-8"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <div className="text-left text-lg mb-3 text-gray-700 dark:text-white/80">
        <p>
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect.
        </p>
        <br />
        <p>
          After graduating with a degree in{" "}
          <span className="font-medium">Software Engineering</span>, I decided
          to pursue my passion for building web application.
          <span className="font-medium">full-stack web development</span>.{" "}
        </p>
        <br />
        <p>
          My core stack is{" "}
          <span className="font-medium">
            .Net, ASP.Net Core, React, Next.js, and T-SQL Language
          </span>
          . I am also familiar with C++, Java and Python. I am always looking to
          learn new technologies.
        </p>
      </div>
    </motion.section>
  );
}
