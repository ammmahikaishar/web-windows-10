import React from "react";
import { QuickWelcome, QuickApps, QuickAds, QuickHistory } from ".";

export default function QuickAccessPanel() {
  return (
    <div className="flex flex-col gap-1">
      <QuickWelcome />
      <div className="grow flex flex-col gap-1 scrollY scrollYHidden">
        <QuickApps />
        <QuickAds />
        <QuickHistory />
      </div>
    </div>
  );
}
