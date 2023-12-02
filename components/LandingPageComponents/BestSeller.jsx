import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Title from "./Title";
import AllProducts from "./DealsForYou/AllProducts";
import SmallTitle from "./SmallTitle";
import { useRouter } from "next/router";

const BestSeller = ({ posts }) => {
  const router = useRouter()
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 568px)");

  let content;
  const productsData = posts || [];
  content = !isMobile ? (
    <AllProducts totalslides={5} data={productsData} />
  ) : (
    <Box
      className={`bg-white mt-5 md:mt-0 relative rounded-[5px] md:rounded-none px-5 md:px-none pt-7 md:pt-0`}
      style={{ boxShadow: isMobile && "0px 0px 7px 1px #00000040" }}
    >
      <AllProducts
        data={productsData}
        totalslides={isSmallMobile ? 1.7 : isMobile ? 2 : 5}
      />
      {isMobile && (
        <Box
          className={`bg-[#EA1D25] absolute w-[100px] flex items-center justify-center py-2 top-[-15px] left-1/2 -translate-x-1/2 `}
          onClick={() => router.push(`/category?id=1`)}
        >
          <Typography variant="span" className="text-white">
            VIEW ALL
          </Typography>
        </Box>
      )}
    </Box>
  );
  // }
  return (
    <Box className={`px-[20px] mt-4`}>
      {isMobile ? (
        <SmallTitle id={1} title={"BEST SELLING LAPTOPS"} />
      ) : (
        <Title title={"BEST SELLING LAPTOPS"} viewAll={true} id={1} />
      )}
      {content}
    </Box>
  );
};

export default React.memo(BestSeller);
