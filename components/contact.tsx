"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section ref={ref} id="contact" className="scroll-mt-32">
      <SectionHeading>Contact</SectionHeading>
      <div className="h-[30rem]"></div>
    </motion.section>
  );
}
