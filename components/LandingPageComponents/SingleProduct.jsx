import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

import laptopImg from "../../assets/svg/laptopImg.svg";
import greyCart from "../../assets/svg/greyCart.svg";
import heartImg from "../../assets/svg/heartImg.svg";
import searchIcon from "../../assets/svg/searchIcon.svg";
import ListIcon from "../../assets/svg/listIcom.svg";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./dealStyle.module.css";

import { useCart } from "react-use-cart";

import localFont from "next/font/local";
import { useDispatch, useSelector } from "react-redux";
import { addedMsg } from "@/redux/features/addToCartSlice";

const nova_thai = localFont({
  src: "../../assets/fonts/NotoSansThaiLooped-Regular.ttf",
  display: "swap",
});

const SingleProduct = ({ item }) => {
  const { addItem } = useCart();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 380px)");
  const dispatch = useDispatch();
  const router = useRouter();
  const status = useSelector((state) => state?.govCorporate?.status);
  const [ele, setEle] = React.useState(null);
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const eleItem = localStorage.getItem("ele");
      setEle(eleItem);
    }
  }, [ele, status]);

  const addToCart = () => {
    addItem({
      id: item?.id,
      name: item?.attributes?.name,
      price: item?.attributes?.price,
      img: item?.attributes?.thumbnail?.data?.attributes?.url,
    });
    dispatch(addedMsg());
  };

  return (
    <>
      <Box className={`${styles.singleProdContainer}`}>
        <Box
          className={` flex relative justify-center gap-5 flex-col py-10 ${
            !isMobile ? styles.singleProd : `max-w-[340px]`
          }`}
        >
          {/* Details Start*/}
          <Image
            alt="product"
            src={
              item?.attributes?.thumbnail?.data?.attributes?.url || laptopImg
            }
            width={200}
            height={200}
            style={{ width: "100%" }}
            loading="lazy"
          />
          <Box className={`${styles.descContainer}`}>
            <Typography variant="p" className={styles.productDesc}>
              {item?.attributes?.name}
            </Typography>
            <Typography
              className={`${styles.prodPrice} ${nova_thai.className}`}
            >
              {`₹${item?.attributes?.price}`}
            </Typography>
          </Box>

          {/* Details End*/}

          <Box className={`${styles.cartBtns}`}>
            <Box className={`flex ${ele || status ? `justify-center`: `justify-between`} items-center px-2`}>
              <Box
                className={` bg-black py-2 px-[7px] md:px-3 flex justify-between items-center gap-1 md:gap-[8px]`}
                style={{
                  borderRadius: "5px",
                }}
                onClick={addToCart}
              >
                <h3
                  className={`text-white normal-case text-base${
                    nova_thai.className
                  } text-[10px] md:text-[13px] 
                  ${isSmallMobile && (ele || status) ? "text-[10px]" : isSmallMobile ? "text-[9px]" : ""}`}
                >
                  {"Add To Cart"}
                </h3>
                <Image
                  src={ele || status ? ListIcon : greyCart}
                  alt={"cart"}
                  style={{ width: isMobile ? "13px" : (ele || status) ? "20px" : "30px" }}
                />
              </Box>
              <Box
                className={`${
                  ele || status ? `hidden` : ``
                } rounded-full border-black border-2 p-1 md:p-2 overflow-hidden`}
              >
                <Image
                  src={heartImg}
                  alt={"cart"}
                  className="w-[16px] h-[16px]"
                />
              </Box>
            </Box>
          </Box>
          <Box className={`${styles.searchImgContainer}`}>
            <Box
              className={`bg-black rounded-full p-2 inline-block`}
              onClick={() => router.push(`/product/${item?.id}`)}
            >
              <Image alt={"search"} src={searchIcon} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleProduct;
