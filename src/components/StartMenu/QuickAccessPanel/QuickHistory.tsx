import React from "react";
import { IconType } from "react-icons";
import { BiGame, BiPhotoAlbum, BiNote, BiWallet } from "react-icons/bi";

const QUICK_HISTORYS = [
  {
    name: "My Notebook",
    Icon: BiPhotoAlbum,
    location: "OneDrive/Personal/Document/OneNote",
    time: "11 min ago",
  },
  {
    name: "Presentation",
    Icon: BiPhotoAlbum,
    location: "OneDrive/Personal/Document/PowerPoint",
    time: "yesterday",
  },
  {
    name: "My Information",
    Icon: BiPhotoAlbum,
    location: "OneDrive/Personal/Document/Word",
    time: "yesterday",
  },
];

export default function QuickHistory() {
  return (
    <div className="p-1 flex flex-col gap-1 bg-[#00000080] shadow-xl">
      {QUICK_HISTORYS.map((history) => (
        <HistoryItem history={history} key={history.name} />
      ))}
    </div>
  );
}

interface IHistoryItem {
  history: {
    name: string;
    Icon: IconType;
    location: string;
    time: string;
  };
}

function HistoryItem({ history }: IHistoryItem) {
  return (
    <button className="h-12 px-2 flex items-center gap-2 transition-all hover:bg-[#00000020]">
      <div className="flex-none h-10 aspect-square grid place-items-center">
        <history.Icon className="text-2xl" />
      </div>
      <div className="grow flex flex-col gap-1 text-left ">
        <h3 className="font-semibold text-xs">{history.name}</h3>
        <span className="text-xs text-gray-300">
          {history.location.replace(/\//g, " > ")}
        </span>
      </div>
      <div className="flex-none text-gray-300">
        <span className="text-xs">{history.time}</span>
      </div>
    </button>
  );
}
