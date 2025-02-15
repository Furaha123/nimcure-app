"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CustomButton } from "@/components";
import Loader from "@/components/Loader";

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/patients");
    }, 2000);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-screen flex items-center justify-center p-4 font-gilroy">
      <div className="w-[1500px] h-[700px] flex overflow-hidden">
        <div className="w-1/2 p-8 flex flex-col">
          <div className="mb-12">
            <div className="flex justify-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={48}
                height={48}
                priority
              />
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full space-y-6">
              <h2 className="text-2xl text-center">Sign in to continue</h2>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-5 border border-[#808080] focus:outline-none"
                  />
                </div>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-5 border border-[#808080] focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm"
                  >
                    SHOW
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer p-2 transition-all duration-300">
                    <input type="checkbox" className="hidden peer" />
                    <div className="w-5 h-5 border-2 border-gray-500 rounded-md flex items-center justify-center peer-checked:bg-[#424242] peer-checked:border-[#424242] peer-checked:ring-2 peer-checked:ring-gray-700 transition-all duration-300"></div>
                    <span className="ml-4 text-sm text-[#2A2A2A] font-bold font-gilroy">
                      Remember Me
                    </span>
                  </label>

                  <a className="text-sm text-[#0148FF] hover:underline font-bold">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <CustomButton
              title="Login"
              containerStyles="bg-[#1F5AF4] text-white w-full max-w-sm"
              handleClick={handleLogin}
            />
          </div>

          <div className="mt-8 text-center text-[12px] font-500 text-[#2A2A2A] flex items-center justify-center gap-2">
            Powered by
            <Image
              src="/footer-logo.svg"
              alt="Footer Logo"
              width={120}
              height={20}
              priority
            />
          </div>
        </div>

        <div className="w-1/2 relative">
          <Image
            src="/delivery-image.png"
            alt="Delivery Background"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          <div className="relative h-full p-8 flex flex-col justify-end font-gilroy mt-4">
            <div className="space-y-4 max-w-lg relative">
              <h3 className="text-2xl text-center text-[#FFFFFF] font-extrabold">
                Serving Patients During a Pandemic
              </h3>
              <p className="text-white font-[400]">
                Delivering essential medication to NMR patients with adherence
                to quality of service, care, and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
