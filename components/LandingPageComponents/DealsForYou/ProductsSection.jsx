import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SectionTitle from "./SectionTitle";
import AllProducts from "./AllProducts";
import SmallTitle from "../SmallTitle";

const ProductsSection = ({ posts, num, noView }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 380px)");

  const totalslides = isSmallMobile ? 1.5 : isMobile ? 1.7 : num;
  return (
    <Box>
      {isMobile ? <SmallTitle title={"DEALS FOR YOU"} /> : <SectionTitle />}
      <Box
        className={`bg-white mt-5 md:mt-0 relative rounded-[5px] md:rounded-none px-5 md:px-none pt-7 md:pt-0`}
        style={{ boxShadow: isMobile && "0px 0px 7px 1px #00000040" }}
      >
        <AllProducts data={posts?.data} totalslides={totalslides} />
        {isMobile && !noView && (
          <Box
            className={`bg-[#EA1D25] absolute w-[100px] flex items-center justify-center py-2 top-[-15px] left-1/2 -translate-x-1/2 `}
          >
            <span className={`text-white font-[NovaThai]`}>VIEW ALL</span>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductsSection;
