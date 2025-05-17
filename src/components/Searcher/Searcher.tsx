import React from "react";
import { Welcome, Searchbox, Content, QuickAccess } from ".";
import styles from "@/styles/styles";

export default function Searcher() {
  return (
    <div
      className={`w-[35rem] h-[75vh] max-h-[40rem] p-6 flex flex-col gap-4 ${styles.windowTransparent} shadow-xl`}
    >
      <div className="grow mx-auto w-10/12 flex flex-col gap-6">
        <Welcome />
        <Searchbox />
        <Content />
      </div>
      <QuickAccess />
    </div>
  );
}
