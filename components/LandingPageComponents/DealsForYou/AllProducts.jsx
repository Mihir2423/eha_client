import React from "react";
import eastIcon from "../../../assets/svg/eastIcon.svg";
import westIcon from "../../../assets/svg/westIcon.svg";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Navigation } from "swiper/modules";
import { Play } from "next/font/google";
import SingleProduct from "../SingleProduct";
import { useMediaQuery } from "@mui/material";

const play = Play({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
  preload: false,
});



const AllProducts = ({ totalslides, data }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Swiper
      slidesPerView={totalslides || 4}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
      loop={true}
      modules={[Keyboard, Navigation]}
      className={`mySwiper relative ${play.className}`}
    >
      {data?.map((item, i) => (
        <SwiperSlide key={i} className={`${ isMobile ? `p-0 py-4` :`p-4`}`}>
          <SingleProduct item={item} />
        </SwiperSlide>
      ))}
      {!isMobile && (
        <div
          className="absolute top-[30%] left-[2%] z-[20] button-prev-slide w-[80px] h-[80px] grid place-items-center rounded-full p-2"
          style={{ backgroundColor: "black" }}
        >
          <Image src={eastIcon} alt="eastIcon" />
        </div>
      )}
      {!isMobile && (
        <div
          className="absolute top-[30%] z-[20] right-[2%] button-next-slide w-[80px] h-[80px] grid place-items-center rounded-full p-2"
          style={{ backgroundColor: "black" }}
        >
          <Image src={westIcon} alt="westIcon" />
        </div>
      )}
    </Swiper>
  );
};

export default AllProducts;
