import React from "react";

const TableContent = ({ title, view }) => {
  const data = [
    {
      enrNo: "1563124",
      sName: "John Doe",
      cName: "Percussion",
      fees: "$120",
      enrDate: "12-08-223",
    },
    // Add more data as needed
  ];

  return (
    <div className="mt-8 mb-3">
      <div className="flex justify-between">
        <h1 className="text-xl text-[#83858b] font-semibold">{title}</h1>
        <p className="text-[#b94891] text-md font-[600] cursor-pointer">{view}</p>
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
            {data.map((row, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2 w-[23%]">{row.enrNo}</td>
                <td className="py-2 w-[23%]">{row.sName}</td>
                <td className="py-2 w-[23%]">{row.cName}</td>
                <td className="py-2 w-[23%]">{row.fees}</td>
                <td className="py-2 text-right w-1/5">{row.enrDate}</td>
              </tr>
            ))}
            {[...Array(5)].map((_, index) => (
              <tr key={`placeholder-${index}`} className="border-b border-gray-200">
                <td className="py-2 w-[23%]">column</td>
                <td className="py-2 w-[23%]">column</td>
                <td className="py-2 w-[23%]">column</td>
                <td className="py-2 w-[23%]">column</td>
                <td className="py-2 text-right w-1/5">column</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContent;
