import { IconType } from "react-icons";
import { BiEdit, BiPhone, BiShield, BiWindow } from "react-icons/bi";
import {
  BsArrowClockwise,
  BsClock,
  BsController,
  BsDeviceHdd,
  BsHddNetwork,
  BsLock,
  BsPeople,
} from "react-icons/bs";

export interface ISettingOption {
  name: string;
  Icon: IconType;
  describtion: string;
  status: string;
}

export interface ISetting {
  name: string;
  Icon: IconType;
  describtion: string;
}

export const SETTING_OPTIONS: ISettingOption[] = [
  {
    name: "Your Phone",
    Icon: BiPhone,
    describtion: "Connected",
    status: "UPDATED",
  },
  {
    name: "Update",
    Icon: BiWindow,
    describtion: "Up-to-date",
    status: "UPDATED",
  },
  {
    name: "Security",
    Icon: BiShield,
    describtion: "Protected",
    status: "UPDATED",
  },
];

export const SETTINGS: ISetting[] = [
  {
    name: "System",
    Icon: BsController,
    describtion: "Display, notifications, apps, power",
  },
  {
    name: "Devices",
    Icon: BsDeviceHdd,
    describtion: "Bluetooth, printers, mouse",
  },
  {
    name: "Network & Internet",
    Icon: BsHddNetwork,
    describtion: "Wi-fi, airplane mode, VPN",
  },
  {
    name: "Account",
    Icon: BsPeople,
    describtion: "Account, email, sync, family",
  },
  {
    name: "Time & Language",
    Icon: BsClock,
    describtion: "Display, notifications, apps, power",
  },
  { name: "Privacy", Icon: BsLock, describtion: "Location, camera" },
  {
    name: "Update & Security",
    Icon: BsArrowClockwise,
    describtion: "Windows update, recovery",
  },
  {
    name: "Personalization",
    Icon: BiEdit,
    describtion: "Display, notifications, apps, power",
  },
];
