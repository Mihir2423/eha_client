import dynamic from "next/dynamic";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
const ProductImage = dynamic(() => import("./ProductImage"), {
  loading: () => <p>Loading...</p>,
});

import AboutProduct from "./AboutProduct";
import AddBtns from "./AddBtns";
import { useDispatch } from "react-redux";
import { getProduct } from "@/redux/features/productSlice";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const ProductDetail = ({product}) => {
 console.log("product",product)
  



  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box
        className={`flex flex-col bg-white gap-[13px] md:flex-row  px-4 py-16 md:pr-16 justify-center text-black`}
      >
        <Box className={`md:w-1/2`}>
          <ProductImage data={product} />
        </Box>
        <Box className={`md:w-1/2`}>
          <AboutProduct data={product} />
        </Box>
      </Box>
      <Box className={`sticky bottom-0 left-0 w-full `}>
        {isMobile && <AddBtns data={product?.data} />}
      </Box>
    </>
  );
};

export default ProductDetail;
