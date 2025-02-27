"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { patients } from "@/app/data";
import { Patient } from "@/types";
import Layout from "@/app/layout/page";
import { CustomButton } from "@/components";
import AssignPackage from "@/app/assign-package/page";

const PatientDetails = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [showAssignPackage, setShowAssignPackage] = useState(false);

  const [activeTab, setActiveTab] = useState<"patient" | "delivery">("patient");
  const params = useParams();
  const hospitalId = params?.hospitalId as string;

  useEffect(() => {
    if (!hospitalId) return;

    const decodedHospitalId = decodeURIComponent(hospitalId);
    const patientData = patients.find(
      (p) => p.hospital_id.toString() === decodedHospitalId
    ) as Patient | undefined;

    if (patientData) {
      const [first = "", last = ""] = patientData.patient_name.split(" ");
      setFirstName(first);
      setLastName(last);
      setPatient(patientData);
    } else {
      setPatient(null);
    }
  }, [hospitalId]);

  const handleNavigationClick = (section: string) => {
    if (section === "viewPatients") {
      setShowAssignPackage(false);
    }
  };

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

  const renderPatientForm = () => (
    <form className="w-full lg:w-2/3 grid grid-cols-1 gap-6 p-4">
      <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
        <label className="text-sm">Hospital ID</label>
        <input
          type="text"
          className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
          value={patient?.hospital_id}
          readOnly
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
          <label className="text-sm text-gray-500">First Name</label>
          <input
            type="text"
            className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (patient) {
                const updatedPatient = {
                  ...patient,
                  patient_name: `${e.target.value} ${lastName}`.trim(),
                };
                setPatient(updatedPatient);
              }
            }}
          />
        </div>

        <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
          <label className="text-sm text-gray-500">Last Name</label>
          <input
            type="text"
            className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              if (patient) {
                const updatedPatient = {
                  ...patient,
                  patient_name: `${firstName} ${e.target.value}`.trim(),
                };
                setPatient(updatedPatient);
              }
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
          <label className="text-sm text-gray-500">Gender</label>
          <select className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold">
            <option value="Male" selected={patient?.gender === "Male"}>
              Male
            </option>
            <option value="Female" selected={patient?.gender === "Female"}>
              Female
            </option>
          </select>
        </div>

        <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
          <label className="text-sm text-gray-500">Phone Number</label>
          <input
            type="text"
            className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
            value={patient?.phone_number}
          />
        </div>
      </div>

      <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
        <label className="text-sm text-gray-500">Email Address</label>
        <input
          type="email"
          className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
          value={patient?.email}
        />
      </div>
    </form>
  );

  const renderDeliveryForm = () => (
    <form className="w-full lg:w-2/3 grid grid-cols-1 gap-6 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
          <label className="text-sm text-gray-500">Delivery Date</label>
          <input
            type="text"
            className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
            value="2024-02-16"
          />
        </div>
      </div>
      <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
        <label className="text-sm text-gray-500">Delivery Area</label>
        <input
          type="text"
          className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
          value="Yaba Main St, City"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
          <label className="text-sm text-gray-500">Delivery Address</label>
          <input
            type="text"
            className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
            value="123 Main St, City"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <div className="border-[2px] border-[#CFCFCF] bg-[#EFEFEF] p-2">
          <label className="text-sm text-gray-500">Payment Status</label>
          <input
            type="text"
            className="w-full border-none outline-none mt-1 bg-transparent font-gilroy font-bold"
            value={patient?.status || ""}
            readOnly
          />
        </div>
      </div>
    </form>
  );
  const renderBreadcrumb = () => (
    <h2 className="text-2xl font-gilroy font-semibold mb-6 text-center sm:text-left">
      {showAssignPackage ? (
        <>
          <span className="text-sm text-[#276DF7]">Patients </span>
          <span
            className="text-sm text-[#276DF7] cursor-pointer"
            onClick={() => handleNavigationClick("viewPatients")}
          >
            / View Patients /{" "}
          </span>
          <span className="text-lg font-bold">Assign Package</span>
        </>
      ) : (
        <>
          <span className="text-sm text-[#276DF7]">Patients </span>
          <span className="text-lg font-bold ">/ View Patients</span>
        </>
      )}
    </h2>
  );
  if (!patient) {
    return (
      <>
        <Layout />
        <div className="max-w-screen-2xl mx-auto mt-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-gilroy font-semibold mb-6 text-red-500">
              Patient not found
            </h2>
            <p className="text-gray-600">
              No patient found with ID: {params.hospitalId}
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="bg-[#f9f9f9]">
      <Layout />
      <div className="max-w-screen-2xl mx-auto mt-6 mb-4 font-gilroy">
        <div className="">
          <div className="flex flex-col sm:flex-row justify-between items-center border-b gap-4">
            {renderBreadcrumb()}
            <div className="flex justify-center sm:justify-end w-auto">
              <CustomButton
                title="Assign Package To Patient"
                containerStyles="bg-[#1F5AF4] text-white px-6 py-2 mb-4"
                handleClick={() => setShowAssignPackage(!showAssignPackage)}
              />
            </div>
          </div>

          {showAssignPackage ? (
            <AssignPackage />
          ) : (
            <div className="flex flex-col lg:flex-row min-h-screen mt-8 ">
              <aside className="w-full lg:w-64 bg-white mb-4 lg:mb-0 p-4 h-[210px]">
                <nav className="space-y-4">
                  <p className="text-gray-500">Patient</p>
                  <button className="w-full text-left font-semibold text-blue-600 p-4 bg-[#276DF71A] border-r-4 border-[#276DF7]">
                    Rider&apos;s Profile
                  </button>
                  <button className="w-full text-left text-gray-700 hover:text-blue-600 p-2 rounded-lg">
                    Delivery History
                  </button>
                </nav>
              </aside>

              <div className="flex-1 bg-white lg:ml-48 px-4 lg:px-0 h-[600px] ">
                <div className="flex flex-col lg:flex-row justify-between border-b pb-2 items-center space-y-4 lg:space-y-0">
                  <div className="flex items-center space-x-4 p-4">
                    <p>Payment Status</p>
                    <span
                      className={`px-4 py-1 font-medium rounded-lg ${getStatusColor(
                        patient.status
                      )}`}
                    >
                      {patient.status}
                    </span>
                  </div>

                  <div className="space-x-6 ">
                    <button
                      className={`pb-4 font-semibold ${
                        activeTab === "patient"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-blue-600"
                      }`}
                      onClick={() => setActiveTab("patient")}
                    >
                      Patient Information
                    </button>
                    <button
                      className={`pb-4 font-semibold p-4  ${
                        activeTab === "delivery"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-500 hover:text-blue-600"
                      }`}
                      onClick={() => setActiveTab("delivery")}
                    >
                      Delivery Information
                    </button>
                  </div>
                </div>

                <div className="mt-10 flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
                  <div className="items-center">
                    <p className="text-lg p-4 font-semibold text-gray-900">
                      {activeTab === "patient"
                        ? "Patient Information"
                        : "Delivery Information"}
                    </p>
                    <p className="mt-4 p-4">
                      {activeTab === "patient"
                        ? "Personal information about Patient."
                        : "Delivery details and tracking information."}
                    </p>
                    <CustomButton
                      title={
                        activeTab === "patient"
                          ? "Edit Patient's Information"
                          : "Edit Delivery Information"
                      }
                      containerStyles="border border-[#1F5AF4] text-[#1F5AF4] px-6 py-2  ml-4 mb-4 mt-4 font-bold"
                    />
                  </div>

                  {activeTab === "patient"
                    ? renderPatientForm()
                    : renderDeliveryForm()}
                </div>

                <div className="mt-6 flex justify-end">
                  <CustomButton
                    title="Save Changes"
                    containerStyles="bg-[#1F5AF4] px-6 py-2 mb-4 mt-4 font-bold text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
