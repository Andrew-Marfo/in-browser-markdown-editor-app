"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Markdown from "@/components/markdown";
import Preview from "@/components/preview";
import { useState } from "react";

export default function Home() {
  const [markdownText, setMarkdownText] = useState("")
  const [showMarkdown, setShowMarkdown] = useState(true)

  const toggleShowMarkdown = () => {
    setShowMarkdown(prev => !prev)
  }

  // const handleMarkdownText = (value) => {
  //   setMarkdownText(value)
  // }
  console.log(markdownText)

  return (
    <div className="home">
      {/* navbar */}
      <Navbar />
      <div className="hero flex justify-between">
        <Markdown markdownText={markdownText} setMarkdownText={setMarkdownText} showMarkdown={showMarkdown}/>
        <Preview markdownText={markdownText} toggleShowMarkdown={toggleShowMarkdown} showMarkdown={showMarkdown}/>
      </div>
    </div>
  );
}
