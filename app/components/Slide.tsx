"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_ASSET_TEST_URL;

export default function Slide() {
  return (
    <main className="flex items-center justify-center z-0">
      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="shadow-lg transition"
        >
          <SwiperSlide><Image src={`${baseUrl}/images/2.png`} alt="Slide 2" className="w-full"/></SwiperSlide>
          <SwiperSlide><Image src={`${baseUrl}/images/3.png`} alt="Slide 3" className="w-full" /></SwiperSlide>
          <SwiperSlide><Image src={`${baseUrl}/images/4.png`} alt="Slide 4" className="w-full" /></SwiperSlide>
          <SwiperSlide><Image src={`${baseUrl}/images/5.png`} alt="Slide 5" className="w-full" /></SwiperSlide>
          <SwiperSlide><Image src={`${baseUrl}/images/6.png`} alt="Slide 6" className="w-full" /></SwiperSlide>
          <SwiperSlide><Image src={`${baseUrl}/images/7.png`} alt="Slide 7" className="w-full" /></SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}