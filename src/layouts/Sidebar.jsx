import React from "react";
import { MdOutlineQueueMusic } from "react-icons/md";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";


const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-w-[120px] border-e border-gray-300 flex flex-col items-center justify-between h-screen">
      <div className="flex flex-col gap-2 justify-center items-center">
        <img src={logo} alt="logo" className="w-14 h-14 mb-10 mt-2 cursor-pointer"  onClick={()=>navigate("/")}/>
        <div
          onClick={() => navigate('/home')}
          className={`w-20 h-14 rounded-lg text-3xl flex justify-center items-center cursor-pointer font-light mb-1 ${
            isActive('/home') ? 'bg-[#fedfe1] text-[#901e75]' : 'bg-[#e5e7eb] text-[#83858b]'
          }`}
        >
          <RiDashboardHorizontalLine />
        </div>
        <div
          onClick={() => navigate('/courseList')}
          className={`w-20 h-14 rounded-lg text-3xl flex justify-center items-center cursor-pointer ${
            isActive('/courseList') ? 'bg-[#fedfe1] text-[#901e75]' : 'bg-[#e5e7eb] text-[#83858b]'
          }`}
        >
          <MdOutlineQueueMusic />
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mb-2  cursor-pointer">
        <CiLogout  className="text-2xl font-semibold opacity-90"/>
        <p className=" opacity-85">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
