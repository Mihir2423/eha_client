import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

import whiteCart from "../../assets/svg/whiteCart.svg";
import bag from "../../assets/svg/bag.svg";
import listIcon from "../../assets/svg/listIcom.svg";
import printIcon from "../../assets/svg/printIcon.svg";
import Image from "next/image";
import localFont from "next/font/local";
import { useSelector } from "react-redux";
import { useCart } from "react-use-cart";

const nova_thai = localFont({
  src: "../../assets/fonts/NotoSansThaiLooped-Regular.ttf",
  display: "swap",
});

const AddBtns = () => {
  const item = useSelector((state) => state?.product?.prodDetails);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [ele, setEle] = React.useState(null);

  const status = useSelector((state) => state?.govCorporate?.status);

  const { addItem } = useCart();

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const eleItem = localStorage.getItem("ele");
      setEle(eleItem);
      console.log(ele);
    }
  }, [ele, status]);

  const addToCart = () => {
    addItem({
      id: item?.id,
      name: item?.attributes?.name,
      price: item?.attributes?.price,
      img: item?.attributes?.thumbnail?.data?.attributes?.url,
    });
  };

  return (
    <Box
      className={`flex items-center justify-end md:pr-24 md:mt-8 md:gap-5 w-full bg-white `}
      style={{ boxShadow: isMobile && "0px -4px 10px 0px #00000040" }}
    >
      <Box
        className={` bg-black py-3 md:h-[60px] px-3 md:px-7 flex w-1/2 md:w-fit justify-center items-center gap-5 md:rounded-[14px] cursor-pointer `}
        onClick={addToCart}
      >
        <Typography
          className={`text-white normal-case text-base ${nova_thai.className} text-[10px] md:text-[24px] leading-[35px]`}
          style={{ textTransform: isMobile ? "uppercase" : "none" }}
        >
          {`Add To ${
            ele === "Government" || ele === "Commercial" ? "List" : "Cart"
          } `}
        </Typography>
        <Image
          src={
            ele === "Government" || ele === "Commercial" ? listIcon : whiteCart
          }
          alt={"cart"}
        />
      </Box>
      <Box
        className={` bg-white py-3 px-5 md:px-7 md:h-[60px] md:border-2  md:border-black flex w-1/2 md:w-fit justify-center items-center gap-5 md:rounded-[14px] cursor-pointer`}
      >
        <Typography
          className={`text-black normal-case text-base ${nova_thai.className} text-[12px] md:text-[24px] leading-[35px]`}
          style={{
            textTransform:
              isMobile && !(ele === "Government" || ele === "Commercial")
                ? "uppercase"
                : "none",
          }}
        >
          {`${
            ele === "Government" || ele === "Commercial"
              ? "Print Details"
              : "Buy Now"
          }`}
        </Typography>
        <Image
          src={ele === "Government" || ele === "Commercial" ? printIcon : bag}
          alt={"cart"}
          style={{
            transform: "translateY(-3px)",
          }}
        />
      </Box>
    </Box>
  );
};

export default AddBtns;
