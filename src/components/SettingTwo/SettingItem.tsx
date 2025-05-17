import React from "react";
import { ISetting } from "./data";

export default function SettingItem({ setting }: { setting: ISetting }) {
  return (
    <div className="h-20 p-2 flex items-center gap-2 bg-transparent transition-all cursor-pointer select-none hover:bg-[#00000060] hover:shadow-xl">
      <div className="flex-none h-14 aspect-square grid place-items-center">
        <setting.Icon className="text-4xl" />
      </div>

      <div className="grow flex flex-col gap-1">
        <h3 className="font-semibold text-base">{setting.name}</h3>
        <span className="text-xs text-gray-100">{setting.describtion}</span>
      </div>
    </div>
  );
}
