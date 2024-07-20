"use client"
import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/service/theme.context";

const ThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

console.log(theme)
  return (
    <div className="theme-button flex items-center justify-center">
      <Image
        src={"./assets/icon-dark-mode.svg"}
        alt="moon"
        width={15}
        height={15}
        className={`${theme === "dark" && "theme-icon"}`}
      />

      <label className="">
        <input type="checkbox" id="toggle-checkbox" className="" checked={theme==="light"}/>
        <span className="slider" onClick={toggleTheme}></span>
      </label>

      <Image
        src={"./assets/icon-light-mode.svg"}
        alt="sun"
        width={15}
        height={15}
        className={`${theme === "light" && "theme-icon"}`}
      />
    </div>
  );
};

export default ThemeButton;
