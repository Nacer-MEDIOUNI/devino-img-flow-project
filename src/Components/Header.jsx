import React from "react";
import {
  BiExport,
  BiMessage,
  BiNotification,
  BiUserCircle,
} from "react-icons/bi";
import { PiUsersThree } from "react-icons/pi";

const Header = () => {
  return (
    <header className="absolute z-50 top-5 right-5 flex items-center justify-between p-2 px-4 bg-neutral-50 dark:bg-gray-800 border-[1px] border-neutral-200 dark:border-gray-700 text-black dark:text-white text-sm font-semibold rounded-lg">
      <div className="flex items-center space-x-4">
        <button className="relative flex items-center space-x-1 bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-black/5 dark:hover:bg-gray-600 border-[1px] border-neutral-400 dark:border-gray-600 cursor-pointer">
          <BiUserCircle className="w-5 h-5" />
          <span className="tooltip-text">Profile</span>
        </button>
        <button className="relative flex items-center space-x-1 bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-black/5 dark:hover:bg-gray-600 border-[1px] border-neutral-400 dark:border-gray-600 cursor-pointer">
          <BiMessage className="w-5 h-5" />
          <span className="tooltip-text">Messages</span>
        </button>
        <button className="relative flex items-center space-x-1 bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-black/5 dark:hover:bg-gray-600 border-[1px] border-neutral-400 dark:border-gray-600 cursor-pointer">
          <BiNotification className="w-5 h-5" />
          <span className="tooltip-text">Notifications</span>
        </button>
        <button className="relative flex items-center space-x-1 bg-white dark:bg-gray-700 p-2 rounded-full hover:bg-black/5 dark:hover:bg-gray-600 border-[1px] border-neutral-400 dark:border-gray-600 cursor-pointer">
          <BiExport className="w-5 h-5" />
          <span className="tooltip-text">Export this flow</span>
        </button>
        <button className="relative flex items-center space-x-1 text-white bg-blue-950 dark:bg-blue-700 p-2 px-4 gap-2 rounded-lg hover:bg-blue-950/90 dark:hover:bg-blue-800 cursor-pointer border-[1px] border-neutral-400 dark:border-gray-600">
          <PiUsersThree className="w-5 h-5" />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
