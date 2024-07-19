"use client";

import { createContext, ReactNode, useState } from "react";

interface Documents {
    createdAt: string;
    name: string;
    content: string;
}



interface DocumentContextType {
    getDocs: () => void;
    getDoc: (value: string) => void;
    saveDoc: () => void;
    deleteDoc: (value: string) => void;
    handleName: (value: string) => void;
    handleContent: (value: string) => void;
    createDoc: () => void;

    documents: Documents[];
    currentDocument: Documents | undefined;
    name: string;
    content: string;
    createdAt: string;
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
  const [documents, setDocuments] = useState<Documents[]>([]);
  const [currentDocument, setCurrentDocument] = useState<Documents | undefined>(undefined);
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [createdAt, setCreatedAt] = useState("")

  const handleName = (value: string) => {
    setName(value)
  }
  const handleContent = (value: string) => {
    setContent(value)
  }
  const handleDate = (value: string) => {
    setCreatedAt(value)
  }

  const getDocs = () => {
    const docs = localStorage.getItem("docs")

    if(docs){
        setDocuments(JSON.parse(docs))
    }
  }

  const getDoc = (value: string) => {
    if(documents){
        const doc = documents.find(item => item?.name === value)

        // doc && setCurrentDocument(doc)
        if(doc){
            setName(doc?.name)
            setContent(doc?.content)
            setCreatedAt(doc?.createdAt)
        }
    }
  }

  const saveDoc = () => {
    const doc = {name, content, createdAt}

    const newDocs = [...documents, doc]

    localStorage.setItem("docs", JSON.stringify(newDocs))
    setDocuments(newDocs)
  }

  const deleteDoc = (value: string) => {
    const filteredDoc = documents.filter(item => item?.name !== value)
    
    localStorage.setItem("docs", JSON.stringify(filteredDoc))
    setDocuments(filteredDoc)
  }
  
  const createDoc = () => {

  }

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
    createdAt
  };
  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};
