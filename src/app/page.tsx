"use client";
import React, { lazy } from "react";
import Taskbar from "@/components/Taskbar";
import { useAppContext } from "@/contexts/AppContext";

const LazyStartMenu = lazy(() => import("@/components/StartMenu"));
const LazySettingOne = lazy(() => import("@/components/SettingOne"));
const LazySettingTwo = lazy(() => import("@/components/SettingTwo"));

export default function HomePage() {
  const appContext = useAppContext();

  return (
    <div
      className="h-screen relative bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {appContext.programState.startMenu && <LazyStartMenu />}
      {appContext.programState.settingOne && <LazySettingOne />}
      {appContext.programState.settingTwo && <LazySettingTwo />}

      <Taskbar />
    </div>
  );
}
