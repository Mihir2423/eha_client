import { fieldName, sortDir } from "@/redux/features/filterSlice";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

import localFont from 'next/font/local'

const nova_thai = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})

const SortForm = () => {
  const sortOptions = [
    { name: "Popular", field: "name", dir: "asc" },
    { name: "Price: Low to High", field: "price", dir: "asc" },
    { name: "Price: High to Low", field: "price", dir: "desc" },
    { name: "Alphabetically: A to Z", field: "name", dir: "asc" },
    { name: "Alphabetically: Z to A", field: "name", dir: "desc" },
  ];

  const dispatch = useDispatch();

  return (
    <Box className={`w-[90%] px-4 bg-[white]`}>
      <Box className={`flex flex-col gap-5`}>
        {sortOptions?.map((data, i) => (
          <Typography
            key={i}
            variant="h1"
            className={`${nova_thai.className} cursor-pointer`}
            style={{ fontSize: "16px", lineHeight: "22px" }}
            onClick={() => {
              dispatch(fieldName(data.field));
              dispatch(sortDir(data.dir));
            }}
          >
            {data.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SortForm;
