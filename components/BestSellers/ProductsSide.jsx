import React from "react";
import { Box } from "@mui/material";
import Title from "../LandingPageComponents/Title";

import useProductsData from "@/utils/useProductData";
import SmallTitle from "../LandingPageComponents/SmallTitle";
const ProductsSide = ({ id, sortField, dir }) => {
  const { content, title } = useProductsData(id, sortField, dir);
  return (
    <Box className={`ml-4 md:mt-1`}>
        <Title title={title} viewAll={false} />
        <SmallTitle title={title} id={id} />
      <Box className={`flex flex-wrap gap-2 md:ml-10`}>{content}</Box>
    </Box>
  );
};

export default ProductsSide;
