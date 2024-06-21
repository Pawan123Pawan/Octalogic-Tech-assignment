import React from "react";
import { HiUsers } from "react-icons/hi";

const ItemsCard = ({item}) => {
  return (
    <div className="flex gap-5 bg-white rounded-lg py-4 px-3 min-w-[250px]">
      <div className="w-11 h-11 rounded-full bg-[#b2eecf] flex justify-center items-center text-2xl ">
        <HiUsers className="font-semibold" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold opacity-70">{item.title}</h2>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-xs text-[#d571b2] cursor-pointer mt-2 text-right -mr-3">View</p>
      </div>
    </div>
  );
};

export default ItemsCard;
