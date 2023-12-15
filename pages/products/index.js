import BestSellerPage from "@/components/BestSellers/BestSellerPage";
import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Head from "next/head";
import Loading from "@/utils/loading";

const BestSellers = () => {

  const router = useRouter();
  const {category} = router.query;
  console.log("id",category)
  const isMobile = useMediaQuery("(max-width: 768px)");

  const filterOption = useSelector((state) => state?.filter);
  console.log("All categary",filterOption);
if (!filterOption) {
  // Handle loading state, e.g., show a loading spinner
  return <Loading/>;
}

  return (
    <Box>
      <Head>
        <title>EHA | Category </title>
        <description>Get all electronics products</description>
      </Head>
      <BestSellerPage
        category={category}
        sortField={filterOption.name}
        dir={filterOption.sort}
        isMobile={isMobile}
      />
    </Box>
  );
};

export default BestSellers;
