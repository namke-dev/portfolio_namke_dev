"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <motion.section id="experience" className="scroll-mt-32">
      <SectionHeading>My Experience</SectionHeading>
    </motion.section>
  );
}
