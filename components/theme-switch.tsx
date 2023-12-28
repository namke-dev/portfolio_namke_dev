"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <button
      className="fixed bottom-5 right-5
      flex items-center justify-center
      bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5]
      border border-gray-300 border-opacity-40
      shadow-2xl rounded-full
      hover:scale-110
      dark:bg-gray-800
      transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
