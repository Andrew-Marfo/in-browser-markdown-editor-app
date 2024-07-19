"use client";

import React, { useContext } from "react";
import HeroHeader from "./hero_header";
import { DocumentContext } from "@/service/document.context";
import Image from "next/image";

interface MarkdownProps {
  markdownText: string;
  setMarkdownText: (value: string) => void;
  showMarkdown: boolean;
  toggleMarkdown: () => void;
}

const Markdown = ({
  markdownText,
  setMarkdownText,
  showMarkdown,
  toggleMarkdown
}: MarkdownProps) => {
  const context = useContext(DocumentContext);

  if (!context) throw new Error("Document Context no found");

  const { content, handleContent } = context;

  return showMarkdown ? (
    <div className="markdown">
      <HeroHeader>
        <p className="hero-header-title">markdown</p>
        <button className="eye-toggle-btn show-toggle-btn" onClick={toggleMarkdown}>
          <Image
            src={"/assets/icon-show-preview.svg"}
            alt="show preview"
            width={15}
            height={10}
          />
        </button>
      </HeroHeader>

      <textarea
        className="markdown-textarea"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleContent(e.target.value)
        }
        value={content}
      />
    </div>
  ) : (
    <div></div>
  );
};

export default Markdown;
