"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const images = [
  "/fb13.png",
  "/fb14.png",
  "/fb15.png",
  "/fb1.png",
  "/fb2.png",
  "/fb3.png",
  "/fb4.png",
  "/fb5.png",
  "/fb6.png",
  "/fb7.png",
  "/fb8.png",
  "/fb9.png",
  "/fb10.png",
  "/fb11.png",
  "/fb12.png",
];

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
            <img
              src={img}
              alt={`Cảm nhận học viên ${index + 1}`}
              className="rounded-lg shadow-md w-full h-auto object-cover transition hover:scale-105 duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}