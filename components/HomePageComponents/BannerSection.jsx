import React from "react";
import Banner1 from "../../assets/png/banner.png";
import leftArrow from "../../assets/svg/leftArrow.svg";
import rightArrow from "../../assets/svg/rightArrow.svg";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { useMediaQuery } from "@mui/material";

const BannerSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
        type: "bullets",
      }}
      navigation={{
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide",
      }}
      loop={true}
      modules={[Keyboard, Pagination, Navigation]}
      className={`mySwiper relative `}
    >
      <SwiperSlide>
        <Image src={Banner1} alt="img" className="w-screen" loading="eager" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Banner1} alt="img" className="w-screen" loading="eager" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Banner1} alt="img" className="w-screen" loading="eager" />
      </SwiperSlide>
      {!isMobile && (
        <>
          <div
            className="absolute top-[40%] left-[2%] z-[20] button-prev-slide w-[25px] md:w-[80px] h-[25px] md:h-[80px] grid place-items-center rounded-full p-2"
            style={{ backgroundColor: "rgba(169, 176, 172, 0.50)" }}
          >
            <Image src={leftArrow} alt="leftbtn" />
          </div>
          <div
            className="absolute top-[40%] z-[20] right-[2%] button-next-slide w-[25px] md:w-[80px] h-[25px] md:h-[80px] grid place-items-center rounded-full p-2"
            style={{ backgroundColor: "rgba(169, 176, 172, 0.25)" }}
          >
            <Image src={rightArrow} alt="rightbtn" />
          </div>
        </>
      )}

      {!isMobile && (
        <div
          className="swiper-pagination bg-transparent flex justify-center gap-4 md:gap-1"
          style={{ transform: "translateY(-100px)" }}
        >
          <h1>.</h1>
        </div>
      )}
    </Swiper>
  );
};

export default BannerSection;
