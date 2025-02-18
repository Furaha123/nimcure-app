"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const navItems = [
    { name: "Overview", icon: "/overview.svg", href: "/home" },
    { name: "Deliveries", icon: "/deliveries.svg", href: "/deliveries" },
    { name: "Patients", icon: "/patients.svg", href: "/patients" },
    {
      name: "Dispatch Riders",
      icon: "/riders.svg",
      href: "/not-found",
    },
    { name: "Admin", icon: "/admin.png", href: "/not-found" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleLogout = () => {
    router.push("/auth/login");
  };

  return (
    <nav className="border-b border-gray-200 bg-white p-3 font-gilroy">
      <div className="max-w-screen-2xl  mx-auto ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 relative h-8 w-8">
            <Image
              src="/company-logo.svg"
              alt="Logo"
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    inline-flex items-center px-1 text-[14px] font-bold
                    relative h-16 font-gilroy
                    ${
                      isActive
                        ? "text-[#276DF7]"
                        : "text-gray-500 hover:text-blue-600"
                    }
                  `}
                >
                  <div className="relative w-5 h-5 mr-2">
                    <Image
                      src={item.icon}
                      alt={`${item.name} icon`}
                      fill
                      className="object-contain"
                      sizes="20px"
                      style={{
                        filter: isActive
                          ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(199deg) brightness(91%) contrast(105%)"
                          : "none",
                      }}
                    />
                  </div>
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#276DF7]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Profile Section with Dropdown */}
          <div
            className="hidden md:flex items-center relative"
            ref={dropdownRef}
          >
            <div className="flex items-center">
              <div className="relative h-8 w-8">
                <Image
                  src="/profile.svg"
                  alt="Profile"
                  fill
                  className="rounded-full object-cover"
                  sizes="32px"
                />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700 font-gilroy">
                Emmanuel Adigwe
              </span>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative w-4 h-4 ml-3 focus:outline-none"
              >
                <Image
                  src="/chevron-down.svg"
                  alt="Expand"
                  fill
                  className={`object-contain text-gray-400 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  sizes="16px"
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      flex items-center px-3 py-2 rounded-md text-base font-medium
                      ${
                        isActive
                          ? "bg-blue-50 text-[#276DF7]"
                          : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="relative w-5 h-5 mr-3">
                      <Image
                        src={item.icon}
                        alt={`${item.name} icon`}
                        fill
                        className="object-contain"
                        sizes="20px"
                        style={{
                          filter: isActive
                            ? "invert(37%) sepia(74%) saturate(1045%) hue-rotate(199deg) brightness(91%) contrast(105%)"
                            : "none",
                        }}
                      />
                    </div>
                    {item.name}
                  </Link>
                );
              })}
            </div>
            {/* Mobile Profile Section */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <div className="relative h-8 w-8">
                  <Image
                    src="/profile.svg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                    sizes="32px"
                  />
                </div>
                <span className="ml-3 text-base font-medium text-gray-700">
                  Emmanuel Adigwe
                </span>
              </div>
              {/* Mobile Logout Button */}
              <div className="mt-3 px-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
