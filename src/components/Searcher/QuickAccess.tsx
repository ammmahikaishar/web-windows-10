import React from "react";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";

export default function QuickAccess() {
  return (
    <div className="flex-none flex items-center justify-end gap-1">
      <button className="h-10 aspect-square grid place-items-center hover:bg-[#00000020]">
        <AiOutlineSetting />
      </button>
      <button className="h-10 aspect-square grid place-items-center hover:bg-[#00000020]">
        <AiOutlineLogout />
      </button>
    </div>
  );
}
