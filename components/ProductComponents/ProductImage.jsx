import { useMediaQuery } from "@mui/material";
import React from "react";

import laptopImg from "../../assets/svg/laptopImg.svg";
import Image from "next/image";
import AddBtns from "./AddBtns";


const ProductImage = ({ data }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currImage, setCurrImage] = React.useState(0);
  console.log(data, "dataImage");
  return (
    <div>
      <div className={`flex pl-6 text-black`}>
        {!isMobile && (
          <div
            className={`flex flex-col gap-6 border-2 border-gray-300 px-2 py-4 text-black`}
          >
            {data?.attributes?.image?.data?.map((item, i) => (
              <Image
                key={i}
                src={item?.attributes?.url || laptopImg}
                alt="product"
                width={100}
                height={100}
                loading="lazy"
                onClick={() => setCurrImage(i)}
                className={
                  i !== data?.attributes?.image?.data.length - 1
                    ? `w-[101px] border-b-2 border-gray-300 pb-[10px]`
                    : `w-[101px] pb-[10px]`
                }
              />
            ))}
          </div>
        )}
        <div
          className={`md:border-2  md:border-gray-300 flex flex-col md:flex-row items-center justify-center px-10 md:py-10 py-2`}
          style={{borderLeft: 0}}
        >
          <Image
            src={data?.attributes?.image?.data[currImage]?.attributes?.url}
            alt="product"
            width={100}
            height={100}
            loading="lazy"
            style={{ width: 450, minHeight: isMobile ? "200px" : "350px" }}
          />
          {isMobile && (
            <div className={`flex gap-[7px]`}>
              {data?.attributes?.image?.data?.map((_, i) => (
                <div
                  key={i}
                  className={`w-[13px] h-[13px] rounded-full mt-2 ${
                    currImage === i ? `bg-[#F61C0D]` : `bg-[#818181]`
                  }`}
                  onClick={() => setCurrImage(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {!isMobile && <AddBtns isMobile={isMobile} item={data} />}
    </div>
  );
};

export default ProductImage;
