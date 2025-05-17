"use client";
import { useAppContext } from "@/contexts/AppContext";
import React from "react";
import { IconType } from "react-icons";
import {
  AiOutlineMenu,
  AiOutlinePoweroff,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

const styles = {
  button: "w-12 aspect-square grid place-items-center hover:bg-[#00000020]",
};

/**
 * styles: w-12
 */
export default function ToolBar() {
  const appContext = useAppContext();

  return (
    <div className="flex flex-col items-center justify-between bg-[#00000080] shadow-xl">
      <div className="flex flex-col items-center gap-1">
        <Button Icon={AiOutlineMenu} key="startMenuToolbarMenu" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <Button Icon={AiOutlineUser} key="startMenuToolbarUser" />
        <Button
          Icon={AiOutlineSetting}
          onClick={() => {
            appContext.dispatch({
              type: "SET_PROGRAM_STATE",
              payload: { name: "startMenu" },
            });
            appContext.dispatch({
              type: "SET_PROGRAM_STATE",
              payload: { name: "settingOne" },
            });
          }}
          key="startMenuToolbarSetting"
        />
        <Button Icon={AiOutlinePoweroff} key="startMenuToolbarShutdown" />
      </div>
    </div>
  );
}

interface IToolBarButton extends React.HTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
}

function Button({ Icon, className = "", ...props }: IToolBarButton) {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      <Icon />
    </button>
  );
}
