import React from 'react';
import img2 from '../../assets/svg/Free shipping-pana 1.svg';
import img4 from '../../assets/svg/New entries-bro 1.svg';
import img3 from '../../assets/svg/Service 24_7-pana 1.svg';
import img1 from '../../assets/svg/store-4156934_1280-removebg-preview 2.svg';
import Image from 'next/image';
import { nova,nova_thai } from '../../utilities/font';
import { useMediaQuery } from "@mui/material"
export default function CardsFooter() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const card = [
      {
        title: "We provide genuine products from our authorized dealers.",
        subtitle: "100% Trusted",
        image: img1,
        alt: "100% Trusted",
      },
      {
        title: "Guaranteed Safe Delivery.",
        subtitle: "Safe Delivery",
        image: img2,
        alt: "Safe Delivery",
      },
      {
        title: "We are available 24/7 at your service.",
        subtitle: "Fast Delivery",
        image: img3,
        alt: "24/7 Service",
      },
      {
        title: "We ensure the fastest deliveries.",
        subtitle: "Enquire",
        image: img4,
        alt: "Fast Delivery",
      },
    ];
    
    return (
      <div className="md:flex border-2 ">
        {card.map((item, index) => {
          return (
            <div key={index} className={`${nova.className}  w-full md:w-[400px] h-auto text-center border-b-2 space-x-4 md:border-r-2 md:border-b-2`}>
              <div className="flex flex-col bg-white px-3 py-1 md:h-[260px] md:p-6">
                <span className="flex items-center justify-center">
                  <Image src={item.image} alt={item.alt} className="w-[123px] h-[123px] object-cover " />
                </span>
                <div className={`md:flex flex-col justify-between md:justify-center flex-grow ${nova_thai.className}`}>
                  <p className="leading-relaxed text-xl">{item.subtitle}</p>
                  <p className="md:text-sm text-base mt-2">{item.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
}
