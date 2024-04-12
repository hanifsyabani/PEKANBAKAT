"use client";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import LoginButton from "./LoginButton";

const itemNav = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Kategori",
    link: "/dokumentasi",
  },
  {
    name: "Timeline",
    link: "/faq",
  },
  {
    name: "Syarat & ketentuan",
    link: "/terms",
  },
  {
    name: "Berita",
    link: "/about",
  },
  {
    name: "FAQ",
    link: "/contact",
  },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos === 0 || currentScrollPos < prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`lg:hidden flex justify-between items-center px-4 py-3 bg-white fixed w-full transition-all z-50 ${
          visible ? "top-0" : "-top-20"
        }`}
      >
        <Image alt="logo" src={logo} width={50} height={50} className="w-20 object-cover" />
        <div className="flex items-center gap-4">
          <LoginButton />
          <TiThMenuOutline
            size={25}
            className="text-gray-500 group-hover:text-blue-900 cursor-pointer"
            onClick={() => setNav(!nav)}
          />
        </div>
      </div>

      {/* mobile */}
      <nav
        className={`h-screen z-20 bg-gradient-to-r from-primary to-blue-400 w-1/2 fixed ${
          nav ? "right-0" : "-right-1/2"
        } transition-all pt-8 rounded-tl-lg mt-12`}
      >
        <ul className="flex flex-col items-center gap-10 text-sm font-semibold text-white">
          {itemNav.map((item, i) => (
            <li key={i} className="hover:text-primary cursor-pointer">{item.name}</li>
          ))}
        </ul>
      </nav>

      {/* desktop */}
      <nav
        className={`hidden lg:flex justify-between items-center px-4 py-3 md:px-10 fixed bg-white z-10 w-full transition-all duration-300 ${
          visible ? "top-0" : "-top-20"
        }`}
      >
        <Image alt="logo" src={logo} width={50} height={50} className="w-20" />
        <div className="flex items-center gap-14">
          <ul className="flex items-center gap-10 text-sm font-semibold">
            {itemNav.map((item, i) => (
              <li key={i} className="hover:text-primary cursor-pointer">{item.name}</li>
            ))}
          </ul>
          <LoginButton />
        </div>
      </nav>
    </>
  );
}
