"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_ASSET_TEST_URL;

const imagePaths = [
  "/feedback/fb13.png",
  "/feedback/fb14.png",
  "/feedback/fb15.png",
  "/feedback/fb16.png",
  "/feedback/fb17.png",
  "/feedback/fb1.png",
  "/feedback/fb2.png",
  "/feedback/fb3.png",
  "/feedback/fb4.png",
  "/feedback/fb5.png",
  "/feedback/fb6.png",
  "/feedback/fb7.png",
  "/feedback/fb8.png",
  "/feedback/fb9.png",
  "/feedback/fb10.png",
  "/feedback/fb11.png",
  "/feedback/fb12.png",
];

const images = imagePaths.map(path => `${baseUrl}${path}`);

export default function GallerySlider() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}      // 1 slide on mobile
        navigation
        loop
        autoplay={{delay: 3000, disableOnInteraction: false}}
        breakpoints={{
          640: {
            slidesPerView: 2,  // 2 slides on small screens (≥640px)
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,  // 3 slides on large screens (≥1024px)
            spaceBetween: 20,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Cảm nhận học viên ${index + 1}`}
              className="rounded-lg shadow-md w-full h-auto object-cover transition hover:scale-105 duration-300"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}