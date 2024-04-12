import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";;
import Nav from "@/components/Dashboard/Nav";
import vocal from "@/assets/vocal.jpg";
import futsal from "@/assets/futsal.jpg";
import puisi from "@/assets/puisi.jpg";
import CardDash from "@/components/Card/CardDash";
import LayoutDashboard from '@/components/LayoutsDashboard'

const cardLomba = [
  {
    id: 1,
    title: "Vocal Solo",
    img: vocal,
    deskripsi:
      "Kategori vocal solo pekan bakat dtujukan untuk mencari dan mengasah talenta muda untuk menujukkan keterampilan dalam bernyanyi",
    link: "/dashboard/pendaftaran/vocal",
  },
  {
    id: 2,
    title: "Puisi",
    img: puisi,
    deskripsi:
      "Kategori Puisi pekan bakat dtujukan untuk mencari dan mengasah talenta muda untuk menujukkan keterampilan dalam bernyanyi",
    link: "/dashboard/pendaftaran/puisi",
  },
  {
    id: 3,
    title: "Futsal",
    img: futsal,
    deskripsi:
      "Kategori Futsal pekan bakat dtujukan untuk mencari dan mengasah talenta muda untuk menujukkan keterampilan dalam bernyanyi",
    link: "/dashboard/pendaftaran/futsal",
  },
];

export default function Pendaftaran() {
  return (
      <LayoutDashboard>
        <Nav title="Informasi dan Pendaftaran Lomba" />
        <div className="grid lg:grid-cols-3 mx-auto">
          {cardLomba.map((card) => {
            return (
              <CardDash
                title={card.title}
                image={card.img}
                deskripsi={card.deskripsi}
                link={card.link}
                key={card.id}
              />
            );
          })}
        </div>
      </LayoutDashboard>
  )
}
