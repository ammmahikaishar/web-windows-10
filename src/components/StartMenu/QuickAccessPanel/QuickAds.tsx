import React from "react";
import { IconType } from "react-icons";
import { AiOutlineLeft } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";

const ADS = [
  {
    name: "Time Wirless Equation",
    Icon: FaSpotify,
    text: "Mixer",
    image: "/bg-dark.jpg",
  },
  {
    name: "Spotify",
    Icon: FaSpotify,
    text: "Continue lisiting",
    image: "/bg-dark.jpg",
    link: "/",
  },
];

export default function QuickAds() {
  return (
    <div className="grid grid-cols-[3fr,2fr] gap-1">
      {ADS.map((ad) => (
        <AdItem ad={ad} key={ad.name} />
      ))}
    </div>
  );
}

interface IAd {
  ad: {
    name: string;
    image: string;
    text: string;
    Icon: IconType;
    link?: string;
  };
}

function AdItem({ ad }: IAd) {
  return (
    <div className="flex flex-col bg-[#00000080] shadow-xl select-none hover:bg-[#000000a0]">
      {/* thumbnail */}
      <div
        className="h-32 p-2 relative bg-gray-800 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${ad.image}")` }}
      >
        <h2 className="font-semibold text-base">{ad.name}</h2>

        {/* link */}
        {ad.link && (
          <button className="h-8 aspect-square absolute bottom-2 right-2 grid place-items-center bg-gray-800 rounded-full">
            <AiOutlineLeft />
          </button>
        )}
      </div>

      {/* info */}
      <div className="h-12 px-2 flex items-center gap-2">
        <div className="flex-none h-10 aspect-square grid place-items-center">
          <ad.Icon className="text-2xl"/>
        </div>
        <span className="grow text-xs">{ad.text}</span>
      </div>
    </div>
  );
}
