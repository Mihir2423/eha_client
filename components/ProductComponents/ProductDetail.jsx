import dynamic from "next/dynamic";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
const ProductImage = dynamic(() => import("./ProductImage"), {
  loading: () => <p>Loading...</p>,
});
import AboutProduct from "./AboutProduct";
import AddBtns from "./AddBtns";
import { useDispatch } from "react-redux";
import { getProduct } from "@/redux/features/productSlice";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProduct(product?.data));
  }, [product?.data, dispatch]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box
        className={`flex flex-col bg-white gap-[13px] md:flex-row w-screen px-4 py-16 md:pr-16 justify-center text-black`}
      >
        <Box className={`md:w-1/2`}>
          <ProductImage data={product?.data} />
        </Box>
        <Box className={`md:w-1/2`}>
          <AboutProduct data={product?.data} />
        </Box>
      </Box>
      <Box className={`sticky bottom-0 left-0 w-full `}>
        {isMobile && <AddBtns data={product?.data} />}
      </Box>
    </>
  );
};

export default ProductDetail;
