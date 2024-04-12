import Image from "next/image";
import logo from "@/assets/LogoKmmuba.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary to-sky-500 py-6 mt-20">
      <div className="flex flex-wrap justify-center gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" width={50} height={50} />
            <p className="text-white font-extrabold">KM Muba</p>
          </div>
          <p className="text-gray-200 max-w-xs mt-10">
            Mulai aja dulu, urusan menang kalah belakangan. Ayo segera daftar
          </p>
        </div>
        <div>
          <h1 className="font-bold text-white mb-3">Quick Links</h1>
          <ul className="text-gray-200 text-sm">
            <a href="#">
              <li className="mb-2 cursor-pointer">Beranda</li>
            </a>
            <a href="#">
              <li className="mb-2 cursor-pointer">Tentang</li>
            </a>
            <a href="#">
              <li className="mb-2 cursor-pointer">Kategori</li>
            </a>
            <a href="#">
              <li className="mb-2 cursor-pointer">Syarat & ketentuan</li>
            </a>
            <a href="#">
              <li className="mb-2 cursor-pointer">FAQ</li>
            </a>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-white mb-3">Organisasi</h1>
          <ul className="text-gray-200 text-sm">
            <a href="#">
              <li className="mb-2 cursor-pointer">Terms & Condition</li>
            </a>
            <a href="#">
              <li className="mb-2 cursor-pointer">Privacy Policy</li>
            </a>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-white mb-3">Get In Touch</h1>
          <div className="flex items-center gap-3">
            <FaInstagram
              size={20}
              className="text-gray-200 hover:text-white cursor-pointer"
            />
            <FaFacebook
              size={20}
              className="text-gray-200 hover:text-white cursor-pointer"
            />
            <FaLinkedin
              size={20}
              className="text-gray-200 hover:text-white cursor-pointer"
            />
            <FaYoutube
              size={20}
              className="text-gray-200 hover:text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <p className="text-center text-gray-200">
        &copy; 2024 KM Muba. All rights reserved.
      </p>
    </footer>
  );
}
