import { Box } from "@mui/material";
import React from "react";
import SectionHeading from "../ProfileComponents/SectionHeading";
const Orders = () => {
  let prods = true;
  return (
    <Box
      className={`flex flex-col  rounded-[8px] text-center py-4 px-3 pb-16 `}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
    >
      <SectionHeading title={"MY ORDERS"} />
      {prods ? (
        <Box className={`flex w-full justify-center items-center p-[119px]`}>
          {/* <Image src={noDataFound} alt="No Products Found" /> */}
        </Box>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
};

export default Orders;
