"use client";

import { DocumentContext } from "@/service/document.context";
import Image from "next/image";
import React, { useContext } from "react";

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar = ({ showSidebar }: SidebarProps) => {
  const context = useContext(DocumentContext);

  if (!context) throw new Error("Document Context no found");

  const { documents, getDoc } = context;
  return (
    <div className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <p className="markdown-title show-sidebar-markdown-title">markdown</p>
      <p className="sidebar-title">my documents</p>

      <button className="new-doc-btn "> + new document</button>

      <div className="document-list flex flex-col">
        {documents.map((doc) => {
          return (
            <button key={doc?.name} onClick={() => getDoc(doc?.name)} className="document-item nav-doc-name flex items-center">
              <div>
                <Image
                  src="/assets/icon-document.svg"
                  alt="link"
                  width={10}
                  height={13}
                />
              </div>
              <div>
                <p className="doc-name-title">{doc?.createdAt}</p>
                <p className="doc-name">{doc?.name}</p>
              </div>
            </button>
          );
        })}
        {/* <div className="document-item nav-doc-name flex items-center">
          <div>
            <Image
              src="/assets/icon-document.svg"
              alt="link"
              width={10}
              height={13}
            />
          </div>
          <div>
            <p className="doc-name-title">01 April 2022</p>
            <p className="doc-name">welcome.md</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
