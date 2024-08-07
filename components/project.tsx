import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0.5, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0.3, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="        
        group
        mb-3 sm:mb-8
        last:mb-0
      "
    >
      <section
        className="
        bg-gray-100 max-w-[42rem]
        border border-black/5
        rounded-lg
        overflow-hidden
        sm:pr-8
        sm:h-[20rem]
        h-[30rem]
        relative
        hover:bg-gray-200
        group-even:pl-8
        dark:bg-white/10
        dark:hover:bg-white/20  
        dark:text-white
        transition"
      >
        <div
          className="
          pt-4 pb-7 px-5 
          sm:pl-10 sm:pr-2 sm:pt-10
          sm:max-w-[50%]
          flex flex-col
          h-full
          sm:group-even:ml-[18rem]
          sm:group-even:pl-8
          "
        >
          <h3 className="text-2xl font-semibold">
            <a
              href={url}
              target="_blank"
              className="cursor-pointer text-gray-800 underline dark:text-blue-300"
            >
              {title}
            </a>
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className=" flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="
                bg-black/[0.7]
                px-3 py-1
                text-[0.7rem]
                uppercase
                tracking-wider text-white
                rounded-full
                dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            priority={true}
            className="
            absolute
            sm:top-8
            top-[17.5rem]
            sm:-right-40
            -right-20
            w-[28.25rem]
            
            rounded-lg shadow-2xl
            group-even:right-[initial]
            sm:group-even:-left-40
            group-even:-left-20
            transition

            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-hover:scale-[1.04]"
          />
        </div>
      </section>
    </motion.div>
  );
}
