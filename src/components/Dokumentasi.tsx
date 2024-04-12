"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import gmb1 from "@/assets/1.jpeg";
import gmb3 from "@/assets/gdsc.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

export default function Dokumentasi() {
  const tabs = [
    {
      title: "Futsal",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-secondary to-primary">
          <p>Dokumentasi Lomba Futsal</p>
          <DummyContent img={gmb1} />
        </div>
      ),
    },
    {
      title: "Vocal",
      value: "vocal",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-primary to-blue-300">
          <p>Vocal Solo</p>
          <DummyContent img={gmb3} />
        </div>
      ),
    },
    {
      title: "Essay",
      value: "essay",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-secondary to-yellow-300">
          <p>Essay</p>
          <DummyContent img={gmb1} />
        </div>
      ),
    },
    {
      title: "Commitee",
      value: "commitee",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Commitee</p>
          <DummyContent img={gmb1} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  lg:flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-10 hidden">
        <Tabs tabs={tabs} />
      </div>

      <div className="lg:hidden mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Image src={gmb1} alt="dummy image" width="1000" height="1000" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={gmb3} alt="dummy image" width="1000" height="1000" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={gmb3} alt="dummy image" width="1000" height="1000" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

const DummyContent = ({ img }: { img: any }) => {
  return (
    <>
      <Image
        src={img}
        alt="dummy image"
        width="1000"
        height="1000"
        loading="lazy"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </>
  );
};
