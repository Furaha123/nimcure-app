"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { patients } from "@/app/data";
import Pagination from "./Pagination";
type Status = "completed" | "due&paid" | "assigned" | "due&unpaid";
const PatientTable = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const getStatusColor = (status: string): string => {
    const formattedStatus = status.toLowerCase();
    switch (formattedStatus) {
      case "completed":
        return "bg-[#01A85A33] text-[#01A85A]";
      case "due&paid":
        return "bg-[#FF7A0033] text-[#FF7A00]";
      case "assigned":
        return "bg-[#006AE733] text-[#006AE7]";
      case "due&unpaid":
        return "bg-[#F42C1F33] text-[#F42C1F]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatStatus = (status: string): string => {
    const statusMap: Record<Status, string> = {
      completed: "Completed",
      "due&paid": "Due & Paid",
      assigned: "Assigned",
      "due&unpaid": "Due & Unpaid",
    };
    return statusMap[status.toLowerCase() as Status] || status;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleViewPatient = (hospitalId: string) => {
    router.push(`patient-details/${hospitalId}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="max-w-screen-2xl mx-auto mt-6 mb-4 font-gilroy">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-gray-500 whitespace-nowrap">
            Sort by:
          </span>
          <select className="px-2 py-1 text-sm font-gilroy font-bold text-[16px] w-full sm:w-auto">
            <option>Hospital ID</option>
            <option>Patient Name</option>
            <option>Status</option>
          </select>
        </div>
        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by patient name, id"
            className="w-full sm:w-auto px-10 py-3 border-[2px] border-[#CFCFCF] outline-none text-sm"
          />
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full bg-[#ffffff]">
            <thead>
              <tr className="border-b ">
                <th className="text-left py-4 px-6 text-sm font-[600] text-[#2A2A2AB2] font-gilroy whitespace-nowrap">
                  Hospital ID
                </th>
                <th className="text-left py-4 px-6 text-sm font-[600] text-[#2A2A2AB2] whitespace-nowrap">
                  Patient&apos;s Name
                </th>
                <th className="text-left py-4 px-6 text-sm font-[600] text-[#2A2A2AB2] whitespace-nowrap">
                  Phone Number
                </th>
                <th className="text-left py-4 px-6 text-sm font-[600] text-[#2A2A2AB2] whitespace-nowrap">
                  Next Delivery Date
                </th>
                <th className="text-left py-4 px-6 text-sm font-[600] text-[#2A2A2AB2] whitespace-nowrap">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-sm font-[600] text-[#2A2A2AB2] whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((patient) => (
                <tr
                  key={patient.hospital_id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="py-4 px-6 text-sm whitespace-nowrap">
                    {patient.hospital_id}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap">
                    {patient.patient_name}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap">
                    {patient.phone_number}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap">
                    {formatDate(patient.next_delivery_date)}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap">
                    <span
                      className={`px-8 py-2 text-[12px] font-semibold ${getStatusColor(
                        patient.status
                      )}`}
                    >
                      {formatStatus(patient.status)}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap">
                    <button
                      className="px-6 py-2 text-[#276DF7] border border-[#276DF799]"
                      onClick={() => handleViewPatient(patient.hospital_id)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-sm text-[#2A2A2AB2] font-gilroy">
          You&apos;re viewing {indexOfFirstItem + 1} out of {patients.length}{" "}
          deliveries
        </p>

        <Pagination
          currentPage={currentPage}
          totalItems={patients.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PatientTable;
