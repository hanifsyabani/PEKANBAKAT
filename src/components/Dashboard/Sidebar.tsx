"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import muba from "@/assets/LogoKmmuba.png";
import { MdOutlineDashboard } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { TbLayoutDashboard } from "react-icons/tb";

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: any })  {
  const pathname = usePathname();
  const router = useRouter();


  return (
    <div
      className={`${
        open ? "w-[5%] pl-2" : "w-[20% pl-6"
      } shadow-xl h-screen py-5 fixed bg-white hidden lg:block transition-all`}
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <Image
          src={muba}
          alt="logo"
          width={500}
          height={500}
          className={`w-10 h-10 ${open ? "hidden" : "block"} `}
          loading="lazy"
        />
        <Image
          src={logo}
          alt="logo"
          loading="lazy"
          className={`${open ? "hidden" : "block"}`}
        />
        <TbLayoutDashboard
          size={25}
          onClick={() => setOpen(!open)}
          className="hidden lg:block cursor-pointer"
        />
      </div>
      <div className="mt-10">
        <div
          className={`flex items-center gap-3 hover:bg-blue-100 py-4 hover:border-r-4 pl-3 rounded-l-xl border-blue-900 cursor-pointer group ${
            pathname === "/dashboard"
              ? "bg-blue-100 border-r-4 border-blue-900"
              : ""
          }`}
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          <MdOutlineDashboard
            size={25}
            className="text-gray-500 group-hover:text-blue-900"
          />
          <h1
            className={`font-semibold text-sm text-gray-500 group-hover:text-blue-900 ${
              open ? "hidden" : "block"
            }`}
          >
            Dashboard
          </h1>
        </div>
        <div
          className={`flex items-center gap-3 hover:bg-blue-100 py-4 hover:border-r-4 pl-3 rounded-l-xl border-blue-900 cursor-pointer group ${
            pathname === "/dashboard/pendaftaran"
              ? "bg-blue-100 border-r-4 border-blue-900"
              : "bg-white"
          }`}
          onClick={() => {
            router.push("/dashboard/pendaftaran");
          }}
        >
          <GrTask
            size={25}
            className="text-gray-500 group-hover:text-blue-900"
          />
          <h1
            className={`font-semibold text-sm text-gray-500 group-hover:text-blue-900 ${
              open ? "hidden" : "block"
            }`}
          >
            Pendaftaran Lomba
          </h1>
        </div>
      </div>
    </div>
  );
}
