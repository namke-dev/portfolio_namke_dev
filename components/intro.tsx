"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Image
              src={"/avatar.jpg"}
              alt={"NamKe Portrait"}
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full
            border-[0.35rem] border-white
            shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.15,
              duration: 0.5,
            }}
          >
            <span
              className="
              absolute
              bottom-0 right-0
              text-4xl"
            >
              👋
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
