import React from "react";
import { ISettingOption } from "./data";
import { BiCheck } from "react-icons/bi";

export default function SettingOption({ option }: { option: ISettingOption }) {
  return (
    <div className="h-full p-2 flex flex-col items-center text-center cursor-pointer select-none hover:bg-[#ffffff60]">
      <div className="w-14 aspect-square relative grid place-items-center">
        <option.Icon className="text-3xl" />

        {option.status === "UPDATED" && (
          <div className="w-4 aspect-square absolute right-0 bottom-0 -translate-x-1/2 -translate-y-1/2 grid place-items-center bg-green-500 text-white rounded-full">
            <BiCheck />
          </div>
        )}
      </div>

      <h3 className="font-semibold text-base">{option.name}</h3>
      <span className="text-xs text-gray-500">{option.describtion}</span>
    </div>
  );
}
