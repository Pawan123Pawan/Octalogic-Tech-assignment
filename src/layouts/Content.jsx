import React from "react";
import ItemsCard from "../components/ItemsCard";
import data from "../data/itemCard.json";
import TableContent from "../components/TableContent";
import BestStudent from "../components/BestStudent";


const Content = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#f4f4f4] py-5 px-8">
      <div className="">
        <h1 className="text-3xl text-[#83858b] font-semibold mb-8">Overview</h1>
        <div className="flex gap-3 flex-wrap">
          {data.map((item) => (
            <ItemsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="h-[400px] overflow-y-scroll mt-5">
        <TableContent />
      </div>
      <div className="h-[400px] overflow-y-scroll mt-5">
        <BestStudent/>
      </div>
    </div>
  );
};

export default Content;
