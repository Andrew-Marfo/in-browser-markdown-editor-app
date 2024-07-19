"use client";

import { DocumentContext } from "@/service/document.context";
import React, { useContext } from "react";

interface DeleteModalProps {
  toggleModal: () => void;
}

const DeleteModal = ({ toggleModal }: DeleteModalProps) => {
  const context = useContext(DocumentContext);

  if (!context) throw new Error("Document Context no found");

  const { name, deleteDoc } = context;
  
  return (
    <div className="delete-modal flex justify-center items-center">
      <div className="overflow" onClick={toggleModal} />
      <div className="delete-modal-item">
        <h3>Delete this document?</h3>
        <p>
          Are you sure you want to delete the &apos;{name}&apos; document and its contents?
          This action cannot be reversed.
        </p>

        <button
          onClick={() => {
            deleteDoc();
            toggleModal();
          }}
          className="confirm-delete-btn"
        >
          Confirm &amp; Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
