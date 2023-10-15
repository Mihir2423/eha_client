import { Box } from "@mui/material";
import React from "react";
import SectionHeading from "../ProfileComponents/SectionHeading";
import SingleAddress from "./SingleAddress";

const Address = () => {
  return (
    <Box
      className={`flex flex-col  rounded-[8px] text-center py-8 px-3 `}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
    >
      <SectionHeading title={"MANAGE ADDRESS"} />
      <SingleAddress />
    </Box>
  );
};

export default Address;
