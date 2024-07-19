"use client";

import { createContext, ReactNode, useState } from "react";

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
  const [theme, setTheme] = useState("light");

//   toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

//   pass value to children
  const value = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};