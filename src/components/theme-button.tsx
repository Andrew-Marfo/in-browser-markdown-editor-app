import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/service/theme.context";

const ThemeButton = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

  return (
    <div className="theme-button flex items-center justify-center">
      <Image
        src={"./assets/icon-dark-mode.svg"}
        alt="moon light"
        width={20}
        height={20}
      />

      <label className="">
        <input type="checkbox" id="toggle-checkbox" />
        <span className="slider"></span>
      </label>

      <Image
        src={"./assets/icon-light-mode.svg"}
        alt="moon light"
        width={20}
        height={20}
      />
    </div>
  );
};

export default ThemeButton;
