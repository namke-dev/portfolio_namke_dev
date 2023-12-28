"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/action/sendEmail";
import SubmitBtn from "./submitBtn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="
      scroll-mt-32 mb-20 sm:mb-28 
      w-[min(100%,38rem)]
      text-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:namke.dev@gmail.com">
          namke.dev@gmail.com
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            alert(error);
            return;
          }
          alert("Email send successfully");
        }}
      >
        <input
          type="email"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
          name="senderEmail"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4 borderBlack"
          placeholder="Your Message"
          name="message"
          required
          maxLength={2000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
