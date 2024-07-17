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
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSideBar = () => {
    setShowSidebar(prev => !showSidebar);
  }

  const toggleMarkdown = () => {
    setShowMarkdown((prev) => !prev);
  };

  return (
    <div className="home">
      {/* sidebar */}
      <Sidebar showSidebar={showSidebar}/>

      <div className="home-container">
        {/* navbar */}
        <Navbar toggleSideBar={toggleSideBar} showSidebar={showSidebar}/>

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
            toggleMarkdown={toggleMarkdown}
            showMarkdown={showMarkdown}
          />
        </div>
      </div>
    </div>
  );
}
