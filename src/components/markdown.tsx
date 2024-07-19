"use client";

import React, { useContext } from "react";
import HeroHeader from "./hero_header";
import { DocumentContext } from "@/service/document.context";

interface MarkdownProps {
  markdownText: string;
  setMarkdownText: (value: string) => void;
  showMarkdown: boolean;
}

const Markdown = ({
  markdownText,
  setMarkdownText,
  showMarkdown,
}: MarkdownProps) => {
  const context = useContext(DocumentContext);

  if (!context) throw new Error("Document Context no found");

  const { content, handleContent } = context;

  return showMarkdown ? (
    <div className="markdown">
      <HeroHeader>
        <p className="hero-header-title">markdown</p>
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
