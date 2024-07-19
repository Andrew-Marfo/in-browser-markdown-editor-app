"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Markdown from "@/components/markdown";
import Preview from "@/components/preview";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { DocumentContextProvider } from "@/service/document.context";
import DeleteModal from "@/components/delete.modal";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [markdownText, setMarkdownText] = useState("");
  const [showMarkdown, setShowMarkdown] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar((prev) => !showSidebar);
  };

  const toggleMarkdown = () => {
    setShowMarkdown((prev) => !prev);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <DocumentContextProvider>
      <Toaster />
      {showModal && <DeleteModal toggleModal={toggleModal}/>}
      <div className="home">
        {/* sidebar */}
        <Sidebar showSidebar={showSidebar} toggleSideBar={toggleSideBar}/>

        <div className="home-container">
          {/* navbar */}
          <Navbar toggleSideBar={toggleSideBar} showSidebar={showSidebar} toggleModal={toggleModal}/>

          {/* hero */}
          <div className="hero flex justify-between">
            {/* markdown */}
            <Markdown
              markdownText={markdownText}
              setMarkdownText={setMarkdownText}
              showMarkdown={showMarkdown}
              toggleMarkdown={toggleMarkdown}
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
    </DocumentContextProvider>
  );
}
