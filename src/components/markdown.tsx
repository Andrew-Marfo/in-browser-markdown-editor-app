import React from "react";
import HeroHeader from "./hero_header";

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
  return showMarkdown ? (
    <div className="markdown">
      <HeroHeader>
        <p className="hero-header-title">markdown</p>
      </HeroHeader>

      <textarea
        className="markdown-textarea"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMarkdownText(e.target.value)
        }
      >
        {markdownText}
      </textarea>
    </div>
  ) : (
    <div></div>
  );
};

export default Markdown;
