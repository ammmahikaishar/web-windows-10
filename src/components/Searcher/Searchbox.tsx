import React from "react";
import { BiSearch } from "react-icons/bi";

export default function Searchbox() {
  return (
    <div className="h-10 flex items-center justify-center gap-2 bg-[#00000020] ">
      <BiSearch className="flex-none" />
      <input
        type="text"
        className="text-sm bg-transparent outline-none placeholder:text-gray-200"
        placeholder="Search Apps & Websites"
      />
    </div>
  );
}
