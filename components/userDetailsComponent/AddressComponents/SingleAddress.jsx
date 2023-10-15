import { Box, Typography } from "@mui/material";
import React from "react";
import { nova_thai } from "@/utilities/font";
import sideDots from "../../../assets/svg/sideDots.svg";
import Image from "next/image";
import { useSelector } from "react-redux";

const SingleAddress = () => {
  const profile = useSelector((state) => state.user.userDetails.details);
  return (
    <Box className={`flex justify-between md:px-8 md:pr-16 items-center mt-5`}>
      <Box className={`flex gap-5 flex-col`}>
        <Box className={`flex items-center gap-16`}>
          <Typography
            variant="h5"
            className={` ${nova_thai.className} text-[18px] text-[#4B4B4B] line-height-[28px]`}
          >
            {profile?.userAddress?.values?.name}
          </Typography>
          <Typography
            variant="p"
            className={`${nova_thai.className} bg-[#D9D9D9] px-3 rounded-[58px] py-[1px] text-[12px] line-height-[15px] text-[#6B6B6B]`}
          >
            HOME
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="p"
            className={`${nova_thai.className} text-[18px] line-height-[28px] text-[#707070]`}
          >
            {/* 184/3, Zone No. 1, Jamshedpur, Jharkhand */}
            {profile?.userAddress?.values?.address1} ,{" "}
            {profile?.userAddress?.values?.address2},{" "}
            {profile?.userAddress?.values?.city},{" "}
            {profile?.userAddress?.values?.state},{" "}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Image alt="sideIcon" src={sideDots} />
      </Box>
    </Box>
  );
};

export default SingleAddress;
