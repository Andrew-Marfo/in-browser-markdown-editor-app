import React from "react";
import HeroHeader from "./hero_header";
import Image from "next/image";
import { marked } from "marked";
import dompurify from 'dompurify';

interface PreviewProps {
  markdownText: string;
}

const Preview = ({ markdownText }: PreviewProps) => {
  const parsed = dompurify.sanitize(marked.parse(markdownText))
//   const parsed = marked.parse(markdownText);
  return (
    <div className="preview">
      <HeroHeader>
        <p className="hero-header-title">preview</p>
        <Image
          src={"/assets/icon-show-preview.svg"}
          alt="show preview"
          width={13}
          height={10}
        />
      </HeroHeader>

      {/* <textarea className="markdown-textarea" disabled></textarea> */}
      {/* {parsed} */}
      <div className="preview-container">
        <div dangerouslySetInnerHTML={{ __html: parsed }} className="preview-items"/>
      </div>
    </div>
  );
};

export default Preview;
