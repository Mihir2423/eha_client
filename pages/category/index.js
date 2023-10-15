import BestSellerPage from "@/components/BestSellers/BestSellerPage";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";

const BestSellers = () => {
  const router = useRouter();
  const { id } = router.query;
  const isMobile = useMediaQuery("(max-width: 768px)");

  const filterOption = useSelector((state) => state.filter);
  return (
    <Box>
      <Head>
        <title>EHA | Category </title>
        <description>Get all electronics products</description>
      </Head>
      <BestSellerPage
        id={id}
        sortField={filterOption.field}
        dir={filterOption.sort}
        isMobile={isMobile}
      />
    </Box>
  );
};

export default BestSellers;
