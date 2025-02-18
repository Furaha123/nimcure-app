import React from "react";
import Layout from "../layout/page";

const Deliveries = () => {
  const deliveries = [
    {
      packageCode: "1AFHFH093",
      deliveryDate: "12th September 2020",
      patientName: "Oluwaseun Aregbesola",
      phoneNumber: "+2347068642920",
      location: "VI, Lagos",
    },
    {
      packageCode: "1AFHFH093",
      deliveryDate: "12th September 2020",
      patientName: "Stella Omotoye",
      phoneNumber: "+2347068642920",
      location: "VI, Lagos",
    },
    {
      packageCode: "1AFHFH093",
      deliveryDate: "12th September 2020",
      patientName: "Chinyere Okafor",
      phoneNumber: "+2347068642920",
      location: "VI, Lagos",
    },
    {
      packageCode: "1AFHFH093",
      deliveryDate: "12th September 2020",
      patientName: "Mohammed Danladi",
      phoneNumber: "+2347068642920",
      location: "VI, Lagos",
    },
    {
      packageCode: "1AFHFH093",
      deliveryDate: "12th September 2020",
      patientName: "Michael Aribisala",
      phoneNumber: "+2347068642920",
      location: "VI, Lagos",
    },
    {
      packageCode: "1AFHFH093",
      deliveryDate: "12th September 2020",
      patientName: "Donatus Emefiele",
      phoneNumber: "+2347068642920",
      location: "VI, Lagos",
    },
  ];

  return (
    <>
      <Layout />
      <div className="bg-[#f9f9f9] h-screen">
        <div className="max-w-screen-2xl mx-auto  mb-4 font-gilroy ">
          <div className="p-6 ">
            <div className="flex justify-between items-center mb-9">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Sort by</span>
                <select className="border rounded-md px-3 py-1">
                  <option>Most Recent</option>
                </select>
              </div>
              <div className="w-64">
                <input
                  type="text"
                  placeholder="Search by package code"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-64">
                <div>
                  <div className="bg-white p-4 ">
                    <h2 className="font-medium mb-4">Unassigned Deliveries</h2>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Paid</span>
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          12
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Unpaid</span>
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          8
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 mt-8">
                    <h2 className="font-medium mt-6 mb-4">
                      Assigned Deliveries
                    </h2>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pending</span>
                      </div>
                      <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
                        <span className="text-blue-600">Successful</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Failed</span>
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                          12
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-white ">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4">Package Code</th>
                        <th className="text-left p-4">Delivery Date</th>
                        <th className="text-left p-4">Patient&#39;s Name</th>

                        <th className="text-left p-4">Phone Number</th>
                        <th className="text-left p-4">Location</th>
                        <th className="text-left p-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliveries.map((delivery, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-4">{delivery.packageCode}</td>
                          <td className="p-4">{delivery.deliveryDate}</td>
                          <td className="p-4">{delivery.patientName}</td>
                          <td className="p-4">{delivery.phoneNumber}</td>
                          <td className="p-4">{delivery.location}</td>
                          <td className="p-4">
                            <button className="text-[#276DF7] border border-[#276DF799] px-6 py-2">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deliveries;
