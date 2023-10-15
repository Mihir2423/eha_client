import { nova_thai } from "@/utilities/font";
import { Box, Typography } from "@mui/material";
import React from "react";

const InputDetailsFields = ({
  label,
  val,
  gender,
  setTakeInput,
  takeInput,
}) => {
  
  return (
    <Box
      className={
        gender
          ? `flex flex-col w-[31%] justify-left items-start  gap-5 px-2`
          : `flex flex-col w-[31%] justify-left items-start border-b-2 border-b-[#D3D3D3] gap-5 px-2`
      }
    >
      <Typography
        variant="h5"
        className={` ${nova_thai} text-[12px] text-[#757575] line-height-[19px]`}
      >
        {label}
      </Typography>
      {gender ? (
        <Box>
          <Box className={`flex gap-3`}>
            <Box className={`flex gap-2 items-center`}>
              <Box
                className={`border-2 border-[#EA1D25] rounded-[1000px] w-[15px] h-[15px]`}
              />
              <Typography
                variant="h5"
                className={` ${nova_thai} text-[12px] text-[#000000] line-height-[19px]`}
              >
                Male
              </Typography>
            </Box>
            <Box className={`flex gap-2 items-center`}>
              <Box
                className={`border-2 border-[#EA1D25] rounded-[1000px]  w-[15px] h-[15px]`}
              />
              <Typography
                variant="h5"
                className={` ${nova_thai.className} text-[12px] text-[#000000] line-height-[19px]`}
              >
                Female
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : takeInput === true ? (
        <Box className={`w-[90%]`}>
          <input
            type="text"
            className={`${nova_thai.className} text-[14px] text-[#4B4B4B] line-height-[22px] outline-none w-[100%]`}
          />
        </Box>
      ) : (
        <Typography
          variant="h5"
          className={` ${nova_thai.className} text-[14px] text-[#4B4B4B] line-height-[22px] pb-1`}
        >
          {val}
        </Typography>
      )}
    </Box>
  );
};

export default InputDetailsFields;
