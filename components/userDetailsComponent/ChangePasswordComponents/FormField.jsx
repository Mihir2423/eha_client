import { nova_thai } from "@/utilities/font";
import { Box } from "@mui/material";
import React from "react";

const FormField = ({ title }) => {
  return (
    <Box className={`px-[12px] md:px-[22px]`}>
      <Box className={`py-4 px-5 mt-10`}>
        <Box className={`text-left border-b-2 border-b-[#888888] w-[100%] md:w-[33%]`}>
          <h4
            className={`${nova_thai.className} text-[12px] line-height-[19px] text-[#888888] `}
          >
            {title}
          </h4>
          <Box className={`mt-4 relative`}>
            <input text="text" className={`outline-none bg-transparent`} />
            <span
              className={` ${nova_thai.className} text-[12px] line-height-[19px] text-[#009A4C] absolute right-[10px] cursor-pointer`}
            >
              Show
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormField;
