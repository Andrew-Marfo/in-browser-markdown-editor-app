"use client";

import { DocumentContext } from "@/service/document.context";
import { ThemeContext } from "@/service/theme.context";
import React, { useContext } from "react";

interface DeleteModalProps {
  toggleModal: () => void;
}

const DeleteModal = ({ toggleModal }: DeleteModalProps) => {
  const context = useContext(DocumentContext);

  if (!context) throw new Error("Document Context no found");

  const { name, deleteDoc } = context;

  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme } = themeContext; 
  
  return (
    <div className={`delete-modal flex justify-center items-center`}>
      <div className={`overlay ${theme === "light" ? "overlay-light" : "overlay-dark"}`} onClick={toggleModal} />
      <div className={`delete-modal-item  ${theme === "light" ? "modal-item-light" : "modal-item-dark"}`}>
        <h4>Delete this document?</h4>
        <p>
          Are you sure you want to delete the &apos;{name}&apos; document and its contents?
          This action cannot be reversed.
        </p>

        <button
          onClick={() => {
            deleteDoc();
            toggleModal();
          }}
          className="confirm-delete-btn btn-hover"
        >
          Confirm &amp; Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
