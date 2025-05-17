import React from "react";
import { AiFillChrome, AiFillFolder } from "react-icons/ai";
import { Button } from ".";

export default function TaskProgram() {
  return (
    <div className="grow flex items-center gap-1 bg-[#00000080]">
      <Button Icon={AiFillFolder} variant="window" color="overlap" />
      <Button Icon={AiFillChrome} variant="window" color="overlap" />
    </div>
  );
}
