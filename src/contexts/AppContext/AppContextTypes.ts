import React from "react";

type Programs = {
  startMenu: any;
  settingOne: any;
  settingTwo: any;
};

export type TAppAction =
  | {
      type: "SET_PROGRAM_STATE";
      payload: { name: keyof Programs };
    }
  | { type: ""; payload: null }
  | { type: ""; payload: null };

export interface IAppContext {
  programState: { [P in keyof Programs]: boolean };
  dispatch: React.Dispatch<TAppAction>;
}
