import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 font-gilroy">
      <h1 className="text-4xl font-bold">🚧 Wrok In Progress 🚧</h1>
      <p className="text-2xl mt-4 flex items-center gap-2 font-gilroy">
        This page is still under construction{" "}
        <span className="text-4xl">🛠️</span>
      </p>
      <p className="mt-2 text-gray-500 font-gilroy">
        We&apos;re working hard to bring this page to life. Stay tuned!
      </p>
      <Link
        href="/patients"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition font-gilroy"
      >
        🔙 Go Home
      </Link>
    </div>
  );
};

export default NotFound;
