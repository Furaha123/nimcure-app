"use client"

import { CustomButton } from "@/components";
import React, { useState } from "react";

const AssignPackage = () => {
  const [selectedTab, setSelectedTab] = useState("drugCycle");
  const [selectedCycle, setSelectedCycle] = useState<string | null>(null);

  const [selectedRiders, setSelectedRiders] = useState<number[]>([]);

  const handleContainerClick = (cycleId: string) => {
    setSelectedCycle(selectedCycle === cycleId ? null : cycleId);
  };

  const handleRiderSelect = (riderId: number) => {
    setSelectedRiders((prevSelected) =>
      prevSelected.includes(riderId)
        ? prevSelected.filter((id) => id !== riderId)
        : [...prevSelected, riderId]
    );
  };
  const isNextDisabled = () => {
    if (selectedTab === "drugCycle") return !selectedCycle;
    if (selectedTab === "dispatchRider") return selectedRiders.length === 0;
    return false;
  };

  const renderDrugCycleContent = () => (
    <div>
      <p className="text-gray-700 mb-6 font-bold">
        Oluwaseun Aregbesola has a drug cycle of two(2) months
      </p>

      <div
        className={`border border-2 p-4 space-y-4 mb-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
          selectedCycle === "sameCycle" ? "border-blue-500" : "border-gray-200"
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
          <div className="relative">
            <input
              type="radio"
              name="cycle"
              id="sameCycle"
              className="w-6 h-6 text-blue-500 accent-blue-500 cursor-pointer rounded-full"
              checked={selectedCycle === "sameCycle"}
              onChange={() => handleContainerClick("sameCycle")}
            />
          </div>
          <label
            htmlFor="sameCycle"
            className={`text-lg cursor-pointer ${
              selectedCycle === "sameCycle"
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }`}
          >
            Same as initial drug cycle
          </label>
        </div>

        <p className="pl-7">
          Deliver drug on <span className="font-bold">4th February 2020</span> &
          set next delivery date to{" "}
          <span className="font-bold">4th March 2020</span>
        </p>
      </div>

      <div
        className={`border border-2 p-4 space-y-4 mb-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
          selectedCycle === "newCycle" ? "border-blue-500" : "border-gray-200"
        }`}
        onClick={() => handleContainerClick("newCycle")}
      >
        <div
          className={`flex items-center space-x-3 pb-3 ${
            selectedCycle === "newCycle" ? "border-blue-500" : "border-gray-300"
          }`}
        >
          <div className="relative">
            <input
              type="radio"
              name="cycle"
              id="newCycle"
              className="w-6 h-6 text-blue-500 accent-blue-500 cursor-pointer rounded-full"
              checked={selectedCycle === "newCycle"}
              onChange={() => handleContainerClick("newCycle")}
            />
          </div>
          <label
            htmlFor="newCycle"
            className={`text-lg cursor-pointer ${
              selectedCycle === "newCycle"
                ? "text-blue-500 font-bold"
                : "text-gray-700"
            }`}
          >
            Set new drug cycle
          </label>
        </div>
      </div>
    </div>
  );

  const renderDispatchRiderContent = () => {
    const riders = Array(15).fill({
      name: "Emmanuel Adebayo",
      area: "Yaba",
      deliveries: "20 Deliveries",
    });

    return (
      <div>
        <div className="mb-6">
          <div className="flex space-x-16 border-b pb-4">
            <button className="border-2 border-[#1F5AF4] text-[#1F5AF4] px-4 py-2 font-semibold">
              All (15)
            </button>
            <button className="bg-[#827F9812] text-[#827F98] font-semibold px-4 py-2 hover:text-blue-500 transition-colors">
              Yaba Riders (5)
            </button>
            <button className="bg-[#827F9812] text-[#827F98] font-semibold px-4 py-2 hover:text-blue-500 transition-colors">
              Unassigned Riders (10)
            </button>
            <button className="bg-[#827F9812] text-[#827F98] font-semibold px-4 py-2 hover:text-blue-500 transition-colors">
              Assigned Riders (23)
            </button>
          </div>
        </div>

        <div className="overflow-y-auto pr-4 h-[440px]">
          <style>
            {`
          div::-webkit-scrollbar {
            width: 3px;
          }
          div::-webkit-scrollbar-track {
            background: #F3F4F6;
            border-radius: 20px;
          }
          div::-webkit-scrollbar-thumb {
            background: #E5E7EB;
            border-radius: 20px;
          }
        `}
          </style>

          <div className="space-y-4 relative">
            {riders.map((rider, index) => (
              <div
                key={index}
                className={`border border-2 p-4 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
                  selectedRiders.includes(index)
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
                onClick={() => handleRiderSelect(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={selectedRiders.includes(index)}
                        onChange={() => handleRiderSelect(index)}
                        className="appearance-none w-5 h-5 rounded-full border-2 border-gray-300 checked:border-blue-500 checked:bg-white relative
                                after:content-[''] after:w-3 after:h-3 after:bg-blue-500 after:rounded-full after:absolute after:top-[50%] after:left-[50%] after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 checked:after:opacity-100
                                cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                      />
                    </div>
                    <div>
                      <p
                        className={`font-bold ${
                          selectedRiders.includes(index)
                            ? "text-blue-500"
                            : "text-gray-900"
                        }`}
                      >
                        {rider.name}
                      </p>
                      <p
                        className={`text-sm ${
                          selectedRiders.includes(index)
                            ? "text-blue-400"
                            : "text-gray-500"
                        }`}
                      >
                        Dispatch Rider&rsquo;s Name
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`font-bold ${
                        selectedRiders.includes(index)
                          ? "text-blue-500"
                          : "text-gray-900"
                      }`}
                    >
                      {rider.area}
                    </p>
                    <p className="text-sm text-gray-500">Delivery Area</p>
                  </div>
                  <div>
                    <p
                      className={`font-bold ${
                        selectedRiders.includes(index)
                          ? "text-blue-500"
                          : "text-gray-900"
                      }`}
                    >
                      {rider.deliveries}
                    </p>
                    <p className="text-sm text-gray-500">
                      Number of Deliveries
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const renderScanPackageContent = () => (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-center mb-8 text-gray-800 text-lg">
        Scan a package to assign it to{" "}
        <span className="font-bold">Oluwaseun Aregbesola</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-5/12 flex flex-col items-center">
          <div className="relative w-64 h-64 mb-4">
            <div className="absolute inset-0">
              <img
                src="/scanner-code.svg"
                alt="QR Scanner"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
          <CustomButton
            title="Scan Package
            "
            containerStyles="bg-[#1F5AF4] text-white px-6 py-2 mb-4 font-bold"
          />
        </div>

        <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="w-0.5 h-20 bg-[#EFEFEF]"></div>
          <span className="bg-white px-2 py-1 text-gray-500">OR</span>
          <div className="w-0.5 h-20 bg-[#EFEFEF]"></div>
        </div>

        <div className="w-full md:w-5/12 flex flex-col">
          <div className="mb-4">
            <p className="font-medium text-gray-800 mb-1 mt-4">
              Trouble scanning QR Code? Enter manually
            </p>
          </div>

          <input
            type="text"
            placeholder="Enter Code"
            className="w-full  border-2 border-[#808080]  px-4 py-4 mb-16 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <CustomButton
            title="Submit Code
            "
            containerStyles="border border-[#1F5AF4] text-[#1F5AF4] px-6 py-2 mt-16 font-bold"
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen mt-12">
      <div className="w-1/2">
        <div className="bg-white w-[90%] p-6 h-[40%]">
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
        <div className="bg-white p-6">
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

          {selectedTab === "drugCycle" && renderDrugCycleContent()}
          {selectedTab === "dispatchRider" && renderDispatchRiderContent()}
          {selectedTab === "scanPackage" && renderScanPackageContent()}

          <div
            className={`flex mt-10 ${
              selectedTab === "drugCycle" ? "justify-end" : "justify-between"
            }`}
          >
            {selectedTab !== "drugCycle" && (
              <CustomButton
                title="Back"
                containerStyles="border border-[#1F5AF4] text-[#1F5AF4] px-6 py-2   font-bold"
                handleClick={() => {
                  if (selectedTab === "scanPackage") {
                    setSelectedTab("dispatchRider");
                  } else if (selectedTab === "dispatchRider") {
                    setSelectedTab("drugCycle");
                  }
                }}
              />
            )}
            <CustomButton
              title="Next"
              containerStyles={`bg-[#1F5AF4] text-white px-6 py-2 ${
                isNextDisabled()
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
              handleClick={() => {
                if (!isNextDisabled()) {
                  if (selectedTab === "drugCycle") {
                    setSelectedTab("dispatchRider");
                  } else if (selectedTab === "dispatchRider") {
                    setSelectedTab("scanPackage");
                  }
                }
              }}
              isDisabled={isNextDisabled()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignPackage;
