"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <motion.section ref={ref} id="experience" className="scroll-mt-32">
      <SectionHeading>My Experience</SectionHeading>
      <div className="h-[30rem]"></div>
    </motion.section>
  );
}
