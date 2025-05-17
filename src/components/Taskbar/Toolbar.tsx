import React from "react";
import { AiOutlineArrowUp, AiOutlineSound, AiOutlineWifi } from "react-icons/ai";
import { Button } from ".";

export default function Toolbar() {
  return (
    <div className="flex-none flex items-center bg-[#00000080]">
      <Button Icon={AiOutlineArrowUp} variant="square" color="overlap" />
      <Button Icon={AiOutlineSound} variant="square" color="overlap" />
      <Button Icon={AiOutlineWifi} variant="square" color="overlap" />
    </div>
  );
}
