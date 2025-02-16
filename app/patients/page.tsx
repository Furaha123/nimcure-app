import React from "react";
import Layout from "../layout/page";
import { CustomButton } from "@/components";
import PatientTable from "@/components/Table";

const Patients = () => {
  return (
    <>
      <Layout />
      <div>
        <div className="border-b ">
          <div className="max-w-screen-2xl mx-auto  mt-4 mb-4">
            <div className="flex  items-center  justify-between">
              <p className="text-lg font-semibold font-gilroy">Patients</p>
              <CustomButton
                title="Add Patient"
                containerStyles="bg-[#1F5AF4] text-white px-6 py-2 "
              />
            </div>
          </div>
        </div>
        <PatientTable />
      </div>
    </>
  );
};

export default Patients;
