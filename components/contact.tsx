"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function Contact() {
  return (
    <motion.section id="contact" className="scroll-mt-32">
      <SectionHeading>Contact</SectionHeading>
    </motion.section>
  );
}
