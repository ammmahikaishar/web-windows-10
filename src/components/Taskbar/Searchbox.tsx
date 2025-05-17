import React from "react";
import { BiMicrophone, BiSearch } from "react-icons/bi";
import { Button } from ".";

export default function Searchbox() {
  return (
    <div className="flex-none h-10 w-72 flex items-center bg-[#00000080] hover:bg-[#00000040]">
      <Button variant="square" color="none" Icon={BiSearch} />
      <input
        type="text"
        className="w-full text-sm bg-transparent outline-none placeholder:text-gray-200"
        placeholder="Type here to search"
      />
      <Button variant="square" color="overlap" Icon={BiMicrophone} />
    </div>
  );
}
