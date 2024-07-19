"use client"

import { DocumentContext } from "@/service/document.context";
import Image from "next/image";
import React, { useContext, useState } from "react";

interface NavbarProps {
  toggleSideBar: () => void;
  toggleModal: () => void;
  showSidebar: boolean;
}

const Navbar = ({ toggleSideBar, showSidebar, toggleModal }: NavbarProps) => {
  
  const context = useContext(DocumentContext);

  if (!context) throw new Error("Document Context no found");

  const { handleName, name, saveDoc, error } = context;

  return (
    <div className="navbar flex items-center">
      <div className="nav-details flex items-center">
        {/* humburger */}
        <button className="hamburger" onClick={toggleSideBar}>
          {showSidebar ? (
            <Image
              src="/assets/icon-close.svg"
              alt="hamburger"
              width={20}
              height={16}
            />
          ) : (
            <Image
              src="/assets/icon-menu.svg"
              alt="hamburger"
              width={20}
              height={13}
            />
          )}
        </button>

        <p className="markdown-title hide-nav-markdown-title ">markdown</p>
        <p className="separator hide-nav-separator">|</p>

        {/* document details */}
        <div className="nav-doc-name flex items-center">
          <div>
            <Image
              src="/assets/icon-document.svg"
              alt="link"
              width={10}
              height={13}
            />
          </div>
          <div>
            <p className="doc-name-title">Document Name</p>
            
            <input type="text" className={`doc-name doc-name-input ${error && "error"}`} placeholder="untitled-doc.md" value={name} onChange={e => handleName(e.target.value)}/>
          </div>
        </div>
      </div>

      <div className="nav-action-buttons flex items-center">
        {/* delete button */}
        <button className="delete-btn" onClick={toggleModal}>
          <Image
            src="/assets/icon-delete.svg"
            alt="link"
            width={13}
            height={13}
          />
        </button>

        {/* save button */}
        <button className="save-btn flex items-center" onClick={saveDoc}>
          <Image
            src="/assets/icon-save.svg"
            alt="link"
            width={13}
            height={13}
          />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Navbar;
