import React from "react";
import { BiGame, BiPhotoAlbum, BiNote, BiWallet } from "react-icons/bi";
import { AppIcon } from ".";

const TOP_APPS = [
  { name: "Photos", Icon: BiPhotoAlbum },
  { name: "Gallary", Icon: BiPhotoAlbum },
  { name: "Gamess", Icon: BiGame },
  { name: "Puzzle", Icon: BiGame },
  { name: "One Note", Icon: BiNote },
  { name: "Notion", Icon: BiNote },
  { name: "Wallet", Icon: BiWallet },
  { name: "Bit Coin", Icon: BiWallet },
];

export default function QuickApps() {
  return (
    <div className="p-1 grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2 bg-[#00000080] shadow-xl">
      {TOP_APPS.map((app) => (
        <AppIcon app={app} key={app.name} />
      ))}
    </div>
  );
}
