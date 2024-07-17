import React from "react";
import HeroHeader from "./hero_header";
import Image from "next/image";
import { marked } from "marked";

interface PreviewProps {
  markdownText: string;
  toggleMarkdown: () => void;
  showMarkdown: boolean;
}

const Preview = ({ markdownText, toggleMarkdown, showMarkdown }: PreviewProps) => {
  const parsed = marked.parse(markdownText);
  //   const parsed = marked.parse(markdownText);
  return (
    <div className="preview">
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
      <div className="preview-container">
        <div
          dangerouslySetInnerHTML={{ __html: parsed }}
          className="preview-items"
        />
      </div>
    </div>
  );
};

export default Preview;
