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
    saveDoc: (value: Documents) => void;
    deleteDoc: (value: string) => void;

    documents: Documents[];
    currentDocument: Documents | undefined;
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

  const getDocs = () => {
    const docs = localStorage.getItem("docs")

    if(docs){
        setDocuments(JSON.parse(docs))
    }
  }

  const getDoc = (value: string) => {
    if(documents){
        const doc = documents.find(item => item?.name === value)

        doc && setCurrentDocument(doc)
    }
  }

  const saveDoc = (items: Documents) => {
    const newDocs = [...documents, items]

    localStorage.setItem("docs", JSON.stringify(newDocs))
    setDocuments(newDocs)
  }

  const deleteDoc = (value: string) => {
    const filteredDoc = documents.filter(item => item?.name !== value)
    
    localStorage.setItem("docs", JSON.stringify(filteredDoc))
    setDocuments(filteredDoc)
  }

  const value = {
    documents,
    currentDocument,
    getDoc,
    getDocs,
    deleteDoc,
    saveDoc
  };
  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};
