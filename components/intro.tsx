"use client";
import Image from "next/image";
import React from "react";
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
        <div className="relative mb-5">
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
            border-[0.35rem] border-white dark:border-gray-200
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
        className="mb-[5rem] mt-4 px-4 
        font-medium 
        !leading-[1.7] 
        sm:text-4xl
        text-2xl
        text-gray-800 dark:text-white/90"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="font-bold">Hello! I'm Ke Nam </p>
        <p className="font-bold">A software developer</p>

        <div className="text-base sm:text-2xl !leading-[1.9] mt-[2rem]">
          <p>
            I have crafted
            <span className="font-bold"> web apps </span>
            over 2 years
          </p>
          <p>Hands on various frameworks and technologies</p>
          <p>
            <span className="font-bold">
              .NET, ASP .Net Core, ReactJS, NextJS
            </span>{" "}
            is my core skills.
          </p>
        </div>
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
            border border-black/10
            dark:bg-white/10
            dark:text-white/70
            hover:dark:text-white/90"
          href="/CV-NguyenKeNam.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="group-hover:translate-y-1 opacity-60 transition" />
        </a>
        <div
          className="flex flex-row
          items-center justify-center gap-2 px-4 text-lg font-medium"
        >
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
            border border-black/10
            dark:bg-white/10
            dark:text-white/70
            hover:dark:text-white/90"
            href="https://www.linkedin.com/in/namke-dev/"
            target="_blank"
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
            border border-black/10
            dark:bg-white/10
            dark:text-white/70
            hover:dark:text-white/90"
            href="https://github.com/namke-dev"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row
          items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      ></motion.div>
    </section>
  );
}
