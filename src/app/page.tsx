"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Markdown from "@/components/markdown";
import Preview from "@/components/preview";
import { useState } from "react";
import Sidebar from "@/components/sidebar";

export default function Home() {
  const [markdownText, setMarkdownText] = useState("");
  const [showMarkdown, setShowMarkdown] = useState(true);

  const toggleShowMarkdown = () => {
    setShowMarkdown((prev) => !prev);
  };

  console.log(markdownText);

  return (
    <div className="home">
      {/* sidebar */}
      <Sidebar />

      <div className="home-container">
        {/* navbar */}
        <Navbar />

        {/* hero */}
        <div className="hero flex justify-between">
          {/* markdown */}
          <Markdown
            markdownText={markdownText}
            setMarkdownText={setMarkdownText}
            showMarkdown={showMarkdown}
          />

          {/* preview */}
          <Preview
            markdownText={markdownText}
            toggleShowMarkdown={toggleShowMarkdown}
            showMarkdown={showMarkdown}
          />
        </div>
      </div>
    </div>
  );
}
