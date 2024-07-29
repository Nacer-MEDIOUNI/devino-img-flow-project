import React, { useState } from "react";
import {
  TbLayoutSidebarLeftExpand,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import { BiMenu, BiCog } from "react-icons/bi";
import EditingBlocks from "./EditingBlocks";
import { ImInfo } from "react-icons/im";
import { BsInfoSquare } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";

export default function SideBar({ blocks, toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`fixed flex flex-col justify-between top-0 left-0 h-full bg-neutral-50 dark:bg-gray-900 border-r-[1px] p-4 transition-all duration-300 ease-in-out ${
        isOpen ? "w-72" : "w-20"
      }`}
    >
      <div
        className={`flex justify-between items-center !mx-0 m-3 gap-4 ${
          isOpen ? "flex-row" : "flex-col"
        }`}
      >
        {/* Devino's Logo */}
        <div
          className={`flex items-center gap-2 ${
            isOpen ? "flex-row" : "flex-col"
          }`}
        >
          <img
            src="./devino.jpeg"
            alt="Devino's Logo"
            className="w-10 h-10 cursor-pointer"
          />
          <span
            className={`text-base font-bold ${
              isOpen ? "block" : "hidden"
            } text-black dark:text-white`}
          >
            Devino
          </span>
          <div
            className={`w-px mx-1 h-6 bg-neutral-400 ${
              isOpen ? "visible" : "hidden"
            }`}
          ></div>
          {/* Menu */}
          <button className="relative w-8 h-8 flex items-center justify-center bg-transparent text-black dark:text-white rounded-lg border-[1px] border-neutral-500 dark:border-gray-600 hover:bg-black/5">
            <BiMenu size={24} />
            <span className="tooltip-text">Menu</span>
          </button>
        </div>
        <button
          className="relative w-8 h-8 flex items-center justify-center bg-transparent text-black dark:text-white rounded-lg border-[1px] border-neutral-500 dark:border-gray-600 hover:bg-black/5"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          <span className="tooltip-text">Dark/Light mode</span>
        </button>
        {/* SideBar toggle */}
        <button
          className="relative w-8 h-8 flex items-center justify-center bg-transparent text-black dark:text-white rounded-lg border-[1px] border-neutral-500 dark:border-gray-600 hover:bg-black/5"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <TbLayoutSidebarRightExpand className="w-6 h-6" />
          ) : (
            <TbLayoutSidebarLeftExpand className="w-6 h-6" />
          )}
          <span className="tooltip-text">
            {isOpen ? "Close Sidebar" : "Open Sidebar"}
          </span>
        </button>
      </div>
      {/* Editing Blocks Section */}
      <section className={`relative flex-1 ${isOpen ? "block" : "hidden"}`}>
        <EditingBlocks blocks={blocks} />
        <div className="flex items-center gap-2 py-2 px-4 mt-6 text-black dark:text-white bg-neutral-100 dark:bg-gray-800 rounded-lg border-[1px] border-dashed border-black dark:border-gray-600">
          <ImInfo size={26} className="animate-pulse" />
          <span className="text-xs font-semibold px-4">
            You can drag these nodes to the pane on the right.
          </span>
        </div>
      </section>
      {/* Settings and Inquiry buttons */}
      <div
        className={`w-full flex justify-between items-center ${
          isOpen ? "flex-row" : "flex-col gap-4"
        }`}
      >
        <button className="relative w-8 h-8 flex items-center justify-center bg-transparent text-black dark:text-white rounded-lg border-[1px] border-neutral-500 dark:border-gray-600 hover:bg-black/5 cursor-pointer">
          <BiCog className="w-5 h-5" />
          <span className="tooltip-text">Settings</span>
        </button>
        {/* Terms and Conditions */}
        <a
          href="/"
          className={`text-xs text-black dark:text-white font-semibold underline ${
            isOpen ? "block" : "hidden"
          }`}
        >
          Terms and Conditions
        </a>
        <button className="relative w-8 h-8 flex items-center justify-center bg-transparent text-black dark:text-white rounded-lg border-[1px] border-neutral-500 dark:border-gray-600 hover:bg-black/5 cursor-pointer">
          <BsInfoSquare className="w-5 h-5" />
          <span className="tooltip-text">Inquiry</span>
        </button>
      </div>
    </aside>
  );
}
