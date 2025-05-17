"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Toolbar, AllApps, QuickAccessPanel } from ".";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useAppContext } from "@/contexts/AppContext";

export default function StartMenu() {
  const appContext = useAppContext();
  const refStartMenu = useRef({} as HTMLDivElement);

  useOutsideClick([refStartMenu], appContext.programState.startMenu, () => {
    appContext.dispatch({
      type: "SET_PROGRAM_STATE",
      payload: { name: "startMenu" },
    });
  });

  return (
    <motion.div
      className="absolute left-1 bottom-12  grid grid-cols-[3rem,17.5rem,30rem] gap-1"
      initial={{ opacity: 0, left: "-50%" }}
      animate={{ opacity: 1, left: "0.25rem" }}
      exit={{ opacity: 0, left: "-50%" }}
      ref={refStartMenu}
    >
      <Toolbar />
      <AllApps />
      <QuickAccessPanel />
    </motion.div>
  );
}
