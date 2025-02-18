import React from "react";
import Image from "next/image";

const ScanSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-4 p-4">
      <h1 className="text-gray-700 text-lg mb-8">
        Scan a package to assign it to{" "}
        <span className="font-medium">Oluwaseun Aregbesola</span>
      </h1>

      <div className="w-64 h-64 relative">
        <Image
          src="/scanner-image-success.svg"
          alt="QR Code Scanner"
          fill
          priority
          className="object-contain"
        />
      </div>

      <p className="text-gray-600 mt-4">Scanning Package...</p>
    </div>
  );
};

export default ScanSuccess;
