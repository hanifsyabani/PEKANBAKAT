'use client'

import { GiLoveSong, GiSoccerBall } from "react-icons/gi";
import { IoNewspaperOutline } from "react-icons/io5";

export default function Card(){

  
  const daftarLomba = [
    {
      id: 1,
      title: "Vocal Solo",
      deskripsi:
        "Kategori vocal solo pekan bakat dtujukan untuk mencari dan mengasah talenta muda untuk menujukkan keterampilan dalam bernyanyi",
      background: "#05182B",
      icons: <GiLoveSong size={35} className="text-white" />,
    },
    {
      id: 2,
      title: "Futsal",
      deskripsi:
        "Kategori futsal pekan bakat dtujukan untuk mencari dan mengasah talenta muda untuk menujukkan keterampilan dalam olahraga terutama futsal",
      background: "#CFF4EE",
      icons: <GiSoccerBall size={35} className="text-[#05182B]" />,
      textColor: "#ffffff",
    },
    {
      id: 3,
      title: "Cipta Puisi",
      deskripsi:
        "Kategori vocal solo pekan bakat dtujukan untuk mencari dan mengasah talenta muda untuk menujukkan keterampilan dalam bernyanyi",
      background: "#DDDEE0",
      icons: <IoNewspaperOutline size={35} className="text-[#05182B]" />,
    },
  ];

  return (
    <>
      {daftarLomba.map((lomba) => (
        <div
          key={lomba.id}
          className="p-5 lg:w-80 rounded-lg relative shadow-xl h-72"
          style={{ backgroundColor: lomba.background }}
        >
          <h1 className="absolute text-7xl font-extrabold text-[#A4A4A4] -right-4 -top-6 ">
            0{lomba.id}
          </h1>
          {lomba.id === 1 ? (
            <div className="text-white mt-4">
              <div className="flex items-center gap-6">
                {lomba.icons}
                <h1 className="text-4xl font-bold">{lomba.title}</h1>
              </div>
              <p className="pt-5">{lomba.deskripsi}</p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-6 mt-4">
                {lomba.icons}
                <h1 className="text-4xl font-bold ">{lomba.title}</h1>
              </div>
              <p className="pt-5">{lomba.deskripsi}</p>
            </>
          )}
        </div>
      ))}
      <div className="flex py-20 items-center justify-center antialiased">
    </div>
    </>
  );
}