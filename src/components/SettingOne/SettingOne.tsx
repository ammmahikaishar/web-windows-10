import React from "react";
import { BsSearch } from "react-icons/bs";
import { SETTINGS } from "./data";

export default function SettingOne() {
  return (
    <div
      className="w-[80vw] px-10 pt-10 pb-16 flex flex-col gap-8 bg-[#ffffff60] border border-gray-100 shadow-2xl"
      style={{ backdropFilter: "blur(2rem)" }}
    >
      {/* searchbar */}
      <div className="h-12 px-4 flex items-center gap-4 border-b border-b-gray-200 transition-all hover:bg-[#ffffff20] hover:shadow-xl focus-within:bg-[#ffffff20] focus-within:shadow-xl">
        <BsSearch className="flex-none text-2xl" />
        <input
          type="text"
          className="w-full font-normal text-xl bg-transparent outline-none placeholder:text-gray-200"
          placeholder="Find a setting"
        />
      </div>

      {/* setting */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] gap-1">
        {SETTINGS.map((setting) => (
          <div
            className="h-[10rem] p-4 flex flex-col items-center text-center bg-[#ffffff20] transition-all cursor-pointer hover:bg-[#ffffff60] hover:shadow-xl"
            key={setting.name}
          >
            <div className="h-14 aspect-square grid place-items-center">
              <setting.Icon className="text-4xl" />
            </div>
            <h3 className="font-semibold text-xl">{setting.name}</h3>
            <span className="text-sm text-gray-100">{setting.describtion}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
