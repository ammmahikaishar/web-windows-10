import React from "react";
import { AiFillWindows } from "react-icons/ai";
import { AppIcon } from ".";

export default function QuickWelcome() {
  return (
    <div className="flex-none p-1 flex justify-between gap-4 bg-[#00000080] shadow-xl select-none">
      <AppIcon app={{ name: "Office", Icon: AiFillWindows }} />

      <div className="grow pt-8 relative flex flex-col items-center text-center">
        <div className="w-14 aspect-square absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 grid rounded-full overflow-hidden">
          <img
            src="/bg-dark.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <h3 className="font-semibold text-base">Good morining, {"Genvale"}</h3>
        <span className="text-sm text-gray-300">gervale@email.com</span>
      </div>

      <AppIcon app={{ name: "Office", Icon: AiFillWindows }} />
    </div>
  );
}
