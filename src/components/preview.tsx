"use client"

import React, { useContext } from "react";
import HeroHeader from "./hero_header";
import Image from "next/image";
import { marked } from "marked";
import { DocumentContext } from "@/service/document.context";
import { ThemeContext } from "@/service/theme.context";

interface PreviewProps {
  markdownText: string;
  toggleMarkdown: () => void;
  showMarkdown: boolean;
}

const Preview = ({ markdownText, toggleMarkdown, showMarkdown }: PreviewProps) => {
  const context = useContext(DocumentContext);

  if (!context) throw new Error("Document Context no found");

  const { content } = context;

  const parsed = marked.parse(content);
  //   const parsed = marked.parse(markdownText);

  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme } = themeContext; 
  return (
    <div className={`preview  ${showMarkdown ?" hide-preview" : "show-preview"} ${theme === "light" ? "light-bg" : "dark-bg"}`}>
      <HeroHeader>
        <p className="hero-header-title">preview</p>
        <button onClick={toggleMarkdown} className="eye-toggle-btn">
          {showMarkdown ? <Image
            src={"/assets/icon-show-preview.svg"}
            alt="show preview"
            width={15}
            height={10}
          /> : <Image
          src={"/assets/icon-hide-preview.svg"}
          alt="show preview"
          width={15}
          height={10}
        />}
        </button>
      </HeroHeader>

      {/* <textarea className="markdown-textarea" disabled></textarea> */}
      {/* {parsed} */}
      <div className={`preview-container ${!showMarkdown && "justify-center"}`}>
        <div
          dangerouslySetInnerHTML={{ __html: parsed }}
          className={`preview-items ${!showMarkdown && "preview-items-center"} ${theme === "light" ? "preview-light" : "preview-dark"}`}
        />
      </div>
    </div>
  );
};

export default Preview;
