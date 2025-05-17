"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { SETTINGS } from "./data";
import { Titlebar } from "@/components/common";
import { SettingHead, SettingItem, SettingSearchbar } from ".";
import styles from "@/styles/styles";
import { useAppContext } from "@/contexts/AppContext";
import { Position } from "@/types";

export default function SettingTwo() {
  const appContext = useAppContext();
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  return (
    <motion.div
      className={`${styles.window} min-w-[20rem] max-w-[100vw] absolute border-4 h-5/6 resize`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , left: `${20}px`, top: `${20}px`}}
      exit={{ opacity: 0 }}
    >
      <Titlebar
        name="Setting"
        onClose={() =>
          appContext.dispatch({
            type: "SET_PROGRAM_STATE",
            payload: { name: "settingTwo" },
          })
        }
        setPosition={setPosition}
      />

      {/* main view */}
      <div className={`${styles.windowMain} flex flex-col`}>
        <SettingHead />

        {/* main content */}
        <div className={`${styles.windowTransparent} p-8`}>
          <div className="mx-auto w-11/12 flex flex-col gap-8">
            <SettingSearchbar />

            {/* setting items */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4">
              {SETTINGS.map((setting) => (
                <SettingItem setting={setting} key={setting.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
