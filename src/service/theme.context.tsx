"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState("");

//   toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    const newTheme = theme === "light" ? "dark" : "light"
    localStorage.setItem("markdown-theme", newTheme)
    // console.log("clicked")
  };

  // get theme
  const getTheme = () => {
    const myTheme = localStorage.getItem("markdown-theme")

    if(myTheme){
      setTheme(myTheme)
    }
    else{
      setTheme("light")
    }
  }

  useEffect(() => {
    getTheme();
  }, [])


//   pass value to children
  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};