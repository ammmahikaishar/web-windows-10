import React from "react";
import { IconType } from "react-icons";
import { FaImage, FaCalendar, FaCalculator } from "react-icons/fa";

const ALL_APPS = [
  {
    name: "A",
    apps: [{ name: "Adobe Photoshop", Icon: FaImage }],
  },
  {
    name: "B",
    apps: [],
  },
  {
    name: "C",
    apps: [
      { name: "Calendar", Icon: FaCalendar },
      { name: "Calculator", Icon: FaCalculator },
    ],
  },
];

export default function AllApps() {
  return (
    <div className="h-full p-1 flex flex-col gap-2 bg-[#00000080] shadow-xl">
      {ALL_APPS.map((group) => (
        <div className="flex flex-col gap-1" key={group.name}>
          <AppIcon
            app={{ name: group.name, text: group.name }}
            key={group.name}
          />

          {group.apps.map((app) => (
            <AppIcon app={app} key={app.name} />
          ))}
        </div>
      ))}
    </div>
  );
}

function AppIcon({
  app,
}: {
  app: { name: string; Icon?: IconType; text?: string };
}) {
  return (
    <button className="h-12 px-2 flex items-center gap-2 hover:bg-[#00000020]">
      <div className="h-10 aspect-square grid place-items-center">
        {app.Icon ? (
          <app.Icon />
        ) : (
          <span className="font-bold text-xs">{app.text}</span>
        )}
      </div>
      {app.Icon && <span className="text-xs">{app.name}</span>}
    </button>
  );
}
