"use client";

import Navbar from "@/components/Navbar/Navbar";
import home1 from "@/assets/home1.png";
import home2 from "@/assets/home2.png";
import home3 from "@/assets/home3.png";
import about from "@/assets/about.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineRocketLaunch,
} from "react-icons/md";
import Link from "next/link";
import HeaderGray from "@/components/Header/HeaderGray";
import Card from "@/components/Card/Card";
import Dokumentasi from "@/components/Dokumentasi";
import Typewriter from "typewriter-effect";
import Faq from "@/components/Faq/Faq";
import ParticlesComponent from "@/components/Particle";
import Terms from "@/components/Terms/Terms";
import { useFormStatus } from "react-dom";
import Footer from "@/components/Footer";
import ScrollButton from "@/components/ScrollButton";
import kmmuba from '@/assets/LogoKmmuba.png'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { pending } = useFormStatus();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <ParticlesComponent />
          <div className="relative">
            <ScrollButton />
            <Image src={kmmuba} alt="kmmuba" width={300} height={300} className="fixed top-20 w-[30rem] right-2 opacity-10  lg:hidden"/>
          </div>
          <section id="home" className="lg:pl-20 flex relative pt-20 z-[10rem]">
            <div className="lg:w-1/2 mt-14">
              <div className="flex items-center justify-center lg:justify-start mb-4 font-bold">
                <Typewriter
                  options={{
                    strings: [
                      "Pendaftaran telah dibuka",
                      "Silahkan daftarkan diri anda ",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <AiFillThunderbolt size={20} className="text-secondary" />
              </div>
              <div className="lg:w-[63%]">
                <h1 className="lg:text-6xl lg:max-w-lg text-center text-5xl lg:text-left tracking-wider font-extrabold">
                  Pekan Bakat dan Kreativitas Siswa
                </h1>
                <p className="text-lg my-4 text-center lg:text-left">Salurkan bakatmu mulai dari sini</p>
                <div className="flex items-center w-1/2 bg-primary px-4 py-2 justify-center gap-2 rounded-xl hover:bg-blue-900 cursor-pointer mx-auto lg:mx-0">
                  <MdOutlineRocketLaunch size={20} className="text-secondary" />
                  <Link href={"/register"}>
                    <button className="font-bold text-white z-50" disabled={pending}>
                      Daftar Sih
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bounce hidden lg:block">
              <Image
                alt="logo"
                src={home1}
                width={500}
                height={500}
                loading="lazy"
                className="absolute w-[25rem] lg:right-60 lg:top-20 z-10"
              />
              <Image
                alt="logo"
                src={home2}
                width={500}
                height={500}
                loading="lazy"
                className="absolute w-52 right-[30rem] top-10"
              />
              <Image
                alt="logo"
                src={home3}
                width={500}
                height={500}
                className="absolute w-72 right-32 top-14 z-20"
              />
            </div>
          </section>

          <section id="about" className="lg:flex lg:px-20 items-center gap-10 lg:my-52 lg:bg-[#FBF8FF] relative my-36 px-6">
            <div className="lg:w-1/2 lg:pt-20">
              <Image
                alt="about"
                src={about}
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
            <div className="lg:w-1/2 relative">
              <HeaderGray title="About Pekat" />
              <div className="lg:mt-14 mt-5">
                <h1 className="text-5xl font-extrabold lg:max-w-md">
                  Apa itu PEKAT?
                </h1>
                <p className="lg:pt-8 pt-4 lg:max-w-sm">
                  Pekan bakat yang diselenggaran oleh organisasi kedaerahan
                  Universitas Sriwijaya merupakan kegiatan perlombaan untuk
                  menyalurkan bakat yang dimiliki oleh siswa yang berada di
                  Kabupaten Musi Banyuasin.
                </p>
              </div>
            </div>
          </section>

          <section id="category" className="lg:px-20 px-10 mt-32 relative lg:bg-white w-full ">
            <HeaderGray title={"Category"} />
            <h1 className="text-5xl font-extrabold mt-5">
              Kategori Perlombaan
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-14">
              <Card />
            </div>
          </section>

          <section id="timeline" className="lg:px-20 lg:my-52 relative lg:bg-white px-6">
            <div className="flex flex-col justify-center items-center">
              <HeaderGray title={"Alur Timeline"} />
              <h1 className="text-5xl font-extrabold mt-5">
                Timeline Perlombaan
              </h1>
            </div>
            <div className="bg-gray-200 px-3 py-4 mx-auto lg:w-[40rem] w-full shadow-xl rounded-full flex justify-evenly mt-14 items-center">
              <h1 className="lg:text-xl font-semibold">Registrasi</h1>
              <MdKeyboardDoubleArrowRight size={25} />
              <h1 className="lg:text-xl font-semibold">Perlombaan</h1>
              <MdKeyboardDoubleArrowRight size={25} />
              <h1 className="lg:text-xl font-semibold">Pengumuman</h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-7 mt-14">
              <div className="text-center ">
                <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                </div>
                <h1 className="font-bold mt-4">11 - 20 Juni 2024</h1>
                <p className="text-sm font-bold text-gray-400">Registrasi</p>
              </div>
              <hr className="border w-28 border-black" />
              <div className="text-center">
                <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                </div>
                <h1 className="font-bold mt-4">20 - 30 Juni 2024</h1>
                <p className="text-sm font-bold text-gray-400">Perlombaan</p>
              </div>
              <hr className="border w-28 border-black" />
              <div className="text-center">
                <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                </div>
                <h1 className="font-bold ">30 Juni 2024</h1>
                <p className="text-sm font-bold text-gray-400">Pengumuman</p>
              </div>
            </div>
          </section>

          <section id="terms" className="mt-32 px-[5%] lg:bg-[#FBF8FF] relative py-10">
            <div>
              <HeaderGray title={"Syarat dan Ketentuan"} />
              <h1 className="text-5xl font-extrabold mt-5">
                Persyaratan Khusus
              </h1>
              <p className="max-w-xl mt-5 font-semibold text-xl text-gray-500">
                Perlombaan ini hanya dikhususkan kepada talenta daerah Kabupaten
                Musi Banyuasin
              </p>
              <Terms />
            </div>
          </section>

          <section id="dokumentasi"  className="lg:mt-32 my-20 px-[5%] relative lg:bg-white">
            <HeaderGray title={"Dokumentasi Perlombaan"} />
            <h1 className="text-5xl font-extrabold mt-5">Foto Pekat 2023</h1>
            <Dokumentasi />
          </section>

          <section id="faq" className="lg:mt-72 lg:px-[5%] relative lg:bg-white px-4">
            <HeaderGray title={"FAQ"} />
            <h1 className="text-5xl font-extrabold mt-5">
              Pertanyaan yang sering diajukan
            </h1>
            <Faq />
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}
