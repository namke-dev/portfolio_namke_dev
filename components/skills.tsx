"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <motion.section ref={ref} id="skills" className="scroll-mt-32">
      <SectionHeading>My Skills</SectionHeading>
      <div className="h-[30rem]"></div>
    </motion.section>
  );
}
