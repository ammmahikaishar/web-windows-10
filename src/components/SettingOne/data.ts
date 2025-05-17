import { BiEdit } from "react-icons/bi";
import {
  BsArrowClockwise,
  BsClock,
  BsController,
  BsDeviceHdd,
  BsHddNetwork,
  BsLock,
  BsPeople,
} from "react-icons/bs";

export const SETTINGS = [
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