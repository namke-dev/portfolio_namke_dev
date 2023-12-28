"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem]
        text-center sm:mb-0
        scroll-mt-96"
    >
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

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row
          items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className="
              group
              flex items-center
              bg-gray-900 text-white
              gap-2 px-7 py-3
              rounded-full
              outline-none
              focus:scale-110
              hover:scale-110
              hover:bg-gray-950
              active:scale-105
              cursor-pointer
              transition"
        >
          Contact me here
          <BsArrowRight className="group-hover:translate-x-2 opacity-70 transition" />
        </Link>
        <a
          className="
            group
            flex items-center
            bg-white 
            gap-2 px-7 py-3
            rounded-full
            outline-none
            focus:scale-110
            hover:scale-110
            active:scale-105
            cursor-pointer
            transition
            border border-black/10"
          href="/CV-NguyenKeNam.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 opacity-60 transition" />
        </a>
        <a
          className="flex items-center
          bg-white 
            gap-2 p-4
            rounded-full
            text-gray-700
            text-[1.35rem]
            focus:scale-[1.15]
            hover:scale-[1.15]
            hover:text-gray-900
            active:scale-105
            cursor-pointer
            transition
            border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center
          bg-white 
            gap-2 p-4
            rounded-full
            text-gray-700
            text-[1.35rem]
            focus:scale-[1.15]
            hover:scale-[1.15]
            hover:text-gray-900
            active:scale-105
            cursor-pointer
            transition
            border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
