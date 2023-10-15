import React from "react";
import { Box, Typography } from "@mui/material";

import localFont from 'next/font/local'

const nova_thai = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})

const FilterSortTitle = ({ filter, setFilter }) => {
  return (
    <Box
      className={`text-center flex gap-1 items-center justify-center border-b-[#C8C8C8] border-b-[2px] w-[90%]`}
      style={{ padding: "8px" }}
    >
      <Typography
        variant="span"
        onClick={() => setFilter(true)}
        className={
          filter
            ? `${nova_thai.className} text-[18px] line-height-[29px] text-[#009A4C] cursor-pointer`
            : `${nova_thai.className} text-[16px] line-height-[25px] text-[#5F5F5F] cursor-pointer`
        }
      >
        Filters
      </Typography>
      <Typography
        variant="/"
        className={`${nova_thai.className} text-[18px] line-height-[29px] text-[#5F5F5F] `}
      >
        /
      </Typography>
      <Typography
        variant="/"
        onClick={() => setFilter(false)}
        className={
          !filter
            ? `${nova_thai.className} text-[18px] line-height-[29px] text-[#009A4C] cursor-pointer`
            : `${nova_thai.className} text-[16px] line-height-[25px] text-[#5F5F5F] cursor-pointer`
        }
      >
        Sort
      </Typography>
    </Box>
  );
};

export default FilterSortTitle;
