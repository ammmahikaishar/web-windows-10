import React from "react";
import { IconType } from "react-icons";

export default function AppIcon({
  app,
}: {
  app: { name: string; Icon: IconType };
}) {
  return (
    <button className="h-24 flex flex-col items-center justify-center gap-1 bg-[#00000020]">
      <div className="w-10 aspect-square grid place-items-center">
        <app.Icon className="text-3xl" />
      </div>
      <span className="text-sm">{app.name}</span>
    </button>
  );
}
