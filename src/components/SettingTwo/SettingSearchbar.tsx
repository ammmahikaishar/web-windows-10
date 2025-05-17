import React from 'react'
import { BsSearch } from 'react-icons/bs';

export default function SettingSearchbar() {
  return (
    <div className="self-center w-[30rem] h-10 px-4 flex items-center gap-4 bg-gray-800 border border-gray-900 shadow-xl transition-all hover:bg-[#00000020] hover:shadow-xl focus-within:bg-[#00000020] focus-within:shadow-xl">
      <input
        type="text"
        className="w-full font-normal text-sm bg-transparent outline-none placeholder:text-gray-200"
        placeholder="Find a setting"
      />
      <BsSearch className="flex-none text-base" />
    </div>
  );
}