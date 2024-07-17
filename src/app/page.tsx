import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Markdown from "@/components/markdown";
import Preview from "@/components/preview";

export default function Home() {
  return (
    <div className="home">
      {/* navbar */}
      <Navbar />
      <div className="hero flex justify-between">
        <Markdown/>
        <Preview/>
      </div>
    </div>
  );
}
