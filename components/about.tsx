import React from "react";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <section
      className="
        max-w-[45rem]
        mb-28 sm:mb-40
        text-center 
        leading-8
    "
    >
      <SectionHeading>About</SectionHeading>

      <p className="mb-3 text-gray-700">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </section>
  );
}
