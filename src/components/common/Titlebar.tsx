"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BiLeftArrow, BiMinus, BiSquareRounded, BiX } from "react-icons/bi";
import { Position } from "@/types";

interface ITitlebar {
  name: string;
  onClose?: () => void;
  onMaximize?: () => void;
  onMinimize?: () => void;
  setPosition: Dispatch<SetStateAction<Position>>;
}
export default function Titlebar({
  name,
  onClose,
  onMaximize,
  onMinimize,
  setPosition,
}: ITitlebar) {
  const [dragging, setDragging] = useState(false);

  return (
    <div
      className={`flex-none h-10 pl-4 flex items-center justify-between select-none transition-all ${
        dragging ? "bg-gray-800 cursor-move" : "bg-gray-900"
      }`}
      // draggable
      onClick={(e) => {
        setDragging(true);
        setPosition({
          x: (e.clientX -e.currentTarget.offsetLeft),
          y: (e.clientY -e.currentTarget.offsetTop),
        });
      }}
      onMouseMove={(e) => {
        // setPosition({
        //   x: e.movementX,
        //   y: e.movementY,
        // });
      }}
      onMouseLeave={() => {
        setDragging(false);
      }}
    >
      {/* left titlebar */}
      <div className="flex items-center gap-2">
        <BiLeftArrow />
        <span className="font-semibold text-sm">{name}</span>
      </div>
      {/* right titlebar */}
      <div className="h-full flex items-center gap-1">
        <button
          className="h-full w-12 grid place-items-center hover:bg-gray-700"
          onClick={onMinimize}
        >
          <BiMinus />
        </button>
        <button
          className="h-full w-12 grid place-items-center hover:bg-gray-700"
          onClick={onMaximize}
        >
          <BiSquareRounded />
        </button>
        <button
          className="h-full w-12 grid place-items-center hover:bg-red-700"
          onClick={onClose}
        >
          <BiX />
        </button>
      </div>
    </div>
  );
}
