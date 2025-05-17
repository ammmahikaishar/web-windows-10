import React from "react";
import { BiGame, BiPhotoAlbum, BiNote, BiWallet } from "react-icons/bi";
import { AppIcon } from "..";

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

export default function AllApps() {
  return (
    <div className="h-full grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] place-content-start gap-4 scrollY">
      {TOP_APPS.map((app) => (
        <AppIcon app={app} key={app.name} />
      ))}
    </div>
  );
}
