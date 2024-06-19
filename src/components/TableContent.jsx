import React, { useState } from "react";
import { useSelector } from "react-redux";

const TableContent = () => {
  const enrolments = useSelector(state => state.enrolment);
  const [showAll, setShowAll] = useState(false);

  const handleToggleView = () => {
    setShowAll(!showAll);
  };

  const displayedEnrolments = showAll ? enrolments : enrolments.slice(0, 5);

  return (
    <div className="mt-8 mb-3">
      <div className="flex justify-between">
        <h1 className="text-xl text-[#83858b] font-semibold">LATEST ENROLMENTS</h1>
        <p 
          className="text-[#b94891] text-md font-[600] cursor-pointer"
          onClick={handleToggleView}
        >
          {showAll ? "Show Less" : "View All Courses"}
        </p>
      </div>
      <div className="overflow-x-auto p-5 px-8 mt-4 bg-white rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/5">Enr. No</th>
              <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/5">S. Name</th>
              <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/5">C. Name</th>
              <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/5">Fees</th>
              <th className="py-2 text-sm font-bold text-gray-900 text-right w-1/5">Enr. Date</th>
            </tr>
          </thead>
          <tbody>
            {displayedEnrolments?.map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 w-[23%]">{row.enrNo}</td>
                <td className="py-2 w-[23%]">{row.sName}</td>
                <td className="py-2 w-[23%]">{row.cName}</td>
                <td className="py-2 w-[23%]">{row.fees}</td>
                <td className="py-2 text-right w-1/5">{row.enrDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContent;
