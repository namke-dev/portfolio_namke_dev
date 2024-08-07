"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useThemeContext } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useThemeContext();

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline layout="2-columns" lineColor="" animate={true}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "rgb(100, 100, 100)",
                fontSize: "1.5rem",
              }}
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              date={item.date}
            >
              <h3 className="font-bold capitalize text-indigo-800 dark:text-indigo-300">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-gray-500 dark:text-gray-400 !text-sm">
                {item.location}
              </p>
              <p
                className="!font-normal !mt-1 text-gray-700
                dark:text-white/75"
              >
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
