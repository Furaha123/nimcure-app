"use client";

import React, { useState } from "react";

const AssignPackage = () => {
  const [selectedTab, setSelectedTab] = useState("drugCycle");
  const [selectedCycle, setSelectedCycle] = useState<string | null>(null);

  const handleContainerClick = (cycleId: string) => {
    setSelectedCycle(selectedCycle === cycleId ? null : cycleId);
  };

  return (
    <div className="flex min-h-screen mt-12">
      <div className="w-1/2">
        <div className="bg-[#ffffff] w-[90%] p-6 h-[40%]">
          <h2 className="text-lg font-medium border-b pb-4 mb-6">
            Patient Information
          </h2>

          <div className="space-y-4 p-6">
            <div className="flex justify-between">
              <label className="text-[#2A2A2AB2] text-sm">Hospital ID</label>
              <span className="font-bold text-[#2A2A2A]">1AFHFH093</span>
            </div>

            <div className="flex justify-between">
              <label className="text-gray-500 text-sm">Name</label>
              <span className="font-bold text-[#2A2A2A]">
                Oluwaseun Aregbesola
              </span>
            </div>

            <div className="flex justify-between">
              <label className="text-gray-500 text-sm">Phone Number:</label>
              <span className="font-bold text-[#2A2A2A]">+2347068642920</span>
            </div>

            <div className="flex justify-between">
              <label className="text-gray-500 text-sm">
                Next Delivery Date:
              </label>
              <span className="font-bold text-[#2A2A2A]">
                12th September 2020
              </span>
            </div>

            <div className="flex justify-between">
              <label className="text-gray-500 text-sm">Location:</label>
              <span className="font-bold text-[#2A2A2A]">Yaba, Lagos</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="bg-[#ffffff] p-6">
          <div className="mb-8">
            <div className="flex justify-around relative">
              {[
                { id: "drugCycle", label: "Set Drug Cycle/Length" },
                { id: "dispatchRider", label: "Assign Dispatch Rider" },
                { id: "scanPackage", label: "Scan Package" },
              ].map((tab) => (
                <div
                  key={tab.id}
                  className={`flex items-center space-x-2 pb-6 cursor-pointer ${
                    selectedTab === tab.id ? "border-b-4 border-blue-600" : ""
                  }`}
                  onClick={() => setSelectedTab(tab.id)}
                >
                  <input
                    type="radio"
                    name="formType"
                    id={tab.id}
                    className="w-4 h-4 text-blue-500 accent-blue-500"
                    checked={selectedTab === tab.id}
                    onChange={() => setSelectedTab(tab.id)}
                  />
                  <label
                    htmlFor={tab.id}
                    className={`font-medium cursor-pointer ${
                      selectedTab === tab.id ? "text-blue-500" : "text-gray-500"
                    }`}
                  >
                    {tab.label}
                  </label>
                </div>
              ))}
            </div>

            <div className="border-b mt-[-1px]"></div>
          </div>

          <div>
            <p className="text-gray-700 mb-6 font-bold">
              Oluwaseun Aregbesola has a drug cycle of two(2) months
            </p>

            <div
              className={`border border-2 p-4 space-y-4 mb-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
                selectedCycle === "sameCycle"
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() => handleContainerClick("sameCycle")}
            >
              <div
                className={`flex items-center space-x-3 pb-3 border-b ${
                  selectedCycle === "sameCycle"
                    ? "border-blue-500"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="cycle"
                  id="sameCycle"
                  className="w-6 h-6 text-blue-500 accent-blue-500 transition-transform duration-300 ease-in-out transform scale-100 checked:scale-110"
                  checked={selectedCycle === "sameCycle"}
                  onChange={() => handleContainerClick("sameCycle")}
                />
                <label
                  htmlFor="sameCycle"
                  className={`text-lg transition-colors duration-300 ${
                    selectedCycle === "sameCycle"
                      ? "text-blue-500 font-bold"
                      : "text-gray-700"
                  }`}
                >
                  Same as initial drug cycle
                </label>
              </div>

              <p className="pl-7 transition-colors duration-300">
                Deliver drug on{" "}
                <span className="font-bold">4th February 2020</span> & set next
                delivery date to{" "}
                <span className="font-bold">4th March 2020</span>
              </p>
            </div>

            <div className="border  p-4 space-y-4 mb-4 cursor-pointer hover:bg-gray-50 transition-all duration-200">
              <div className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="cycle"
                  id="newCycle"
                  className="w-6 h-6 text-blue-500 accent-blue-500 transition-transform duration-300 ease-in-out transform scale-100 checked:scale-110"
                />
                <label htmlFor="newCycle" className="text-gray-700">
                  Set new drug cycle
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button className="bg-blue-400 text-white px-8 py-2 rounded-lg hover:bg-blue-500 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignPackage;
