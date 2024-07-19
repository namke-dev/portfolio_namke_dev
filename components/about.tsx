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
        scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <div
        className="text-left text-lg mb-3 sm:text-xl
        text-gray-700  
        dark:text-white/80
        mx-6
        !leading-[2.2rem]"
      >
        <p>
          It{"'"}s a{" "}
          <span className="font-semibold text-indigo-800 dark:text-indigo-300">
            priority
          </span>{" "}
          to provide the best support to my colleagues, aiming to make a
          meaningful impact on our{" "}
          <span className="font-semibold text-indigo-800 dark:text-indigo-300">
            shared goals.
          </span>
        </p>
        <br />
        <p>
          I{"'"}m passionate about staying ahead of the curve by exploring new
          technologies and adapting to the ever-evolving tech landscape.
        </p>
      </div>
    </motion.section>
  );
}
