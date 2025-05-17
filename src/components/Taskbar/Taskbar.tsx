"use client";
import React from "react";
import { FaMicrosoft } from "react-icons/fa";
import { BiWindow } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { Button, DateTime, Searchbox, TaskProgram, Toolbar } from ".";
import { useAppContext } from "@/contexts/AppContext";

export default function Taskbar() {
  const appContext = useAppContext();

  return (
    <div className="w-screen h-10 px-1 absolute bottom-1 flex items-center gap-1 bg-transparent select-none z-50">
      <Button
        Icon={FaMicrosoft}
        variant="window"
        onClick={() =>
          appContext.dispatch({
            type: "SET_PROGRAM_STATE",
            payload: { name: "startMenu" },
          })
        }
      />
      <Searchbox />

      <Button Icon={BiWindow} variant="square" />

      <TaskProgram />
      <Toolbar />
      <DateTime />

      <Button
        Icon={AiOutlineSetting}
        onClick={() => {
          appContext.dispatch({
            type: "SET_PROGRAM_STATE",
            payload: { name: "settingTwo" },
          });
        }}
        variant="square"
      />
    </div>
  );
}
