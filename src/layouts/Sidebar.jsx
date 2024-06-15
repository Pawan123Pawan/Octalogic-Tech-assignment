import React from "react";
import { MdOutlineQueueMusic } from "react-icons/md";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="min-w-[120px] min-w border-e border-gray-300 flex flex-col items-center justify-between h-screen">
      <div className="flex flex-col gap-2 justify-center items-center">
        <img src={logo} alt="logo" className="w-16 h-16 mb-10 mt-2" />
        <div className="bg-[#fedfe1] text-[#901e75] w-20 h-14 rounded-lg text-3xl flex justify-center items-center cursor-pointer font-light mb-1">
          <RiDashboardHorizontalLine />
        </div>
        <div className="bg-[#e5e7eb] text-[#83858b] w-20 h-14 rounded-lg text-3xl flex justify-center items-center cursor-pointer">
          <MdOutlineQueueMusic />
        </div>
      </div>
      <div>
        ajkdsd
      </div>
    </div>
  );
};

export default Sidebar;
