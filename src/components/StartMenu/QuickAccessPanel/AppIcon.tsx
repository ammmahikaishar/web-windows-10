import React from "react";
import { IconType } from "react-icons";

/**
 * styles: min-w-[5rem]
 */
export default function AppIcon({
  app,
}: {
  app: { name: string; Icon: IconType };
}) {
  return (
    <button className="flex-none h-20 min-w-[5rem] flex flex-col items-center text-center justify-center gap-1 hover:bg-[#00000020]">
      <div className="h-10 apsect-square grid place-items-center">
        <app.Icon className="text-3xl" />
      </div>
      <span className="text-xs">{app.name}</span>
    </button>
  );
}
