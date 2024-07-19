"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Documents {
  createdAt: string;
  name: string;
  content: string;
}

interface DocumentContextType {
  getDocs: () => void;
  getDoc: (value: string) => void;
  saveDoc: () => void;
  deleteDoc: () => void;
  handleName: (value: string) => void;
  handleContent: (value: string) => void;
  createDoc: () => void;

  documents: Documents[];
  currentDocument: Documents | undefined;
  name: string;
  content: string;
  createdAt: string;
  error: string;
}

interface DocumentContextProviderProps {
  children: ReactNode;
}

export const DocumentContext = createContext<DocumentContextType | undefined>(
  undefined
);

export const DocumentContextProvider = ({
  children,
}: DocumentContextProviderProps) => {
  // state variables
  const [documents, setDocuments] = useState<Documents[]>([]);
  const [currentDocument, setCurrentDocument] = useState(undefined);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [error, setError] = useState("");

  // format date to "day-month-year; 01 April 2024"
  const formatDateToLongForm = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.getMonth();
    const year = date.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${day} ${months[month]} ${year}`;
  };

  //   update name state when there is a change
  const handleName = (value: string) => {
    setName(value);
  };

  //   update content state when there is a change
  const handleContent = (value: string) => {
    setContent(value);
  };

  //   fetch documents from localStorage if any
  const getDocs = () => {
    const docs = localStorage.getItem("docs");

    if (docs) {
      setDocuments(JSON.parse(docs));
    }
  };

  //   runs getDocs function once when mounted
  useEffect(() => {
    getDocs();
  }, []);

  //   fetch a document from object name
  const getDoc = (value: string) => {
    if (documents) {
      const doc = documents.find((item) => item?.name === value);

      // doc && setCurrentDocument(doc)
      if (doc) {
        setName(doc?.name);
        setContent(doc?.content);
        setCreatedAt(doc?.createdAt);
      }
    }
  };

  //   save a document
  const saveDoc = () => {
    if (name.trim()) {
      const docExists = documents.find((item) => item?.name === name);

      let newDocs;
      if (docExists) {
        newDocs = documents.map((item) =>
          item?.name == name ? { ...item, content } : item
        );
      } else {
        const doc = {
          name,
          content,
          createdAt: formatDateToLongForm(new Date()),
        };
        newDocs = [...documents, doc];
      }

      localStorage.setItem("docs", JSON.stringify(newDocs));
      setDocuments(newDocs);
      toast.success("saved");
    } else {
      toast.error("filename required");
    }
  };

  //   delete a document
  const deleteDoc = () => {
    const filteredDoc = documents.filter((item) => item?.name !== name);
    localStorage.setItem("docs", JSON.stringify(filteredDoc));
    setDocuments(filteredDoc);
    setName("");
    setContent("");
    toast.success("deleted");
  };

  //   create a new document
  const createDoc = () => {
    setName("");
    setContent("");
  };

  //   pass values to children
  const value = {
    documents,
    currentDocument,
    getDoc,
    getDocs,
    deleteDoc,
    saveDoc,
    handleContent,
    handleName,
    createDoc,
    name,
    content,
    createdAt,
    error,
  };

  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};
