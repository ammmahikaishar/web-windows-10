import React from "react";
import { TabButton } from "..";
import { TopApps, RecentlyAdded, AllApps } from ".";

export default function Content({ search }: { search?: boolean }) {
  const active = "TopApps";

  return (
    <div className="grow flex flex-col gap-4">
      <div className="flex-none flex items-center justify-evenly">
        <TabButton name="Top apps" />
        <TabButton name="Recently added" />
        <TabButton name="All apps" />
      </div>

      <div className="grow">
        {active === "TopApps" && <TopApps />}
        {/* {active === "RecentlyAdded" && <RecentlyAdded />}
        {active === "AllApps" && <AllApps />} */}
      </div>
    </div>
  );
}
