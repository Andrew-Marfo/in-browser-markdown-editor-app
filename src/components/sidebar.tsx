import Image from "next/image";
import React from "react";

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar = ({ showSidebar }: SidebarProps) => {
  return (
    <div className={`sidebar ${showSidebar && "show-sidebar"}`}>
      <p className="sidebar-title">my documents</p>

      <button className="new-doc-btn "> + new document</button>

      <div className="document-list flex flex-col">
        <div className="document-item nav-doc-name flex items-center">
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
        </div>
        <div className="document-item nav-doc-name flex items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
