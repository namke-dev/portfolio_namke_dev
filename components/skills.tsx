"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Skills() {
  return (
    <motion.section id="skills" className="scroll-mt-32">
      <SectionHeading>My Skill</SectionHeading>
    </motion.section>
  );
}
