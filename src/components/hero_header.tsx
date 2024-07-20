"use client"
import { ThemeContext } from '@/service/theme.context';
import React, { ReactNode, useContext } from 'react'

interface HeroHeaderProps {
    children: ReactNode;
}

const HeroHeader = ({children} : HeroHeaderProps) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme } = themeContext; 
  return (
    <div className={`hero-header flex items-center justify-between ${theme === "light" ? "light-hero-header-bg" : "dark-hero-header-bg"}`}>{children}</div>
  )
}

export default HeroHeader