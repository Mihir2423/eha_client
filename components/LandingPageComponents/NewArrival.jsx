import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Title from "./Title";
import AllProducts from "./DealsForYou/AllProducts";
import SmallTitle from "./SmallTitle";
import { useRouter } from "next/router";

const NewArrival = ({ posts }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 568px)");

  // Get Date
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  oneMonthAgo.setHours(0, 0, 0, 0);
  const formattedDate = oneMonthAgo.toISOString();

  // Get Filtered Array
  const filteredArray = posts?.data?.filter((item) => {
    return new Date(item.attributes.updatedAt) > new Date(formattedDate);
  });
  filteredArray?.sort((a, b) => {
    const dateA = new Date(a.attributes.updatedAt);
    const dateB = new Date(b.attributes.updatedAt);
    return dateB - dateA;
  });
  let content;
  content = !isMobile ? (
    <AllProducts totalslides={5} data={filteredArray} />
  ) : (
    <Box
      className={`bg-white mt-5 md:mt-0 relative rounded-[5px] md:rounded-none px-5 md:px-none pt-7 md:pt-0`}
      style={{ boxShadow: isMobile && "0px 0px 7px 1px #00000040" }}
    >
      <AllProducts
        data={filteredArray}
        totalslides={isSmallMobile ? 1.7 : isMobile ? 2 : 5}
      />
      {isMobile && (
        <Box
          className={`bg-[#EA1D25] absolute w-[100px] flex items-center justify-center py-2 top-[-15px] left-1/2 -translate-x-1/2 `}
          onClick={() => router.push(`/category?id=2`)}
        >
          <Typography variant="span" className="text-white font-[NovaThai]">
            VIEW ALL
          </Typography>
        </Box>
      )}
    </Box>
  );
  return (
    <Box className={`px-[20px] mt-4`}>
      {isMobile ? (
        <SmallTitle title={"NEW ARRIVALS"} />
      ) : (
        <Title title={"NEW ARRIVALS"} viewAll={true} id={2} />
      )}
      {content}
    </Box>
  );
};

export default React.memo(NewArrival);
