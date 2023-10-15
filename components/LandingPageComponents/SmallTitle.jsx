import React from "react";
import { Box, Typography } from "@mui/material";


const SmallTitle = ({ title, viewAll, id }) => {
  return (
    <Box className={`my-6 md:hidden`} >
      <Typography
        variant="p"
        className={`font-[NovaThai] text-[18px] text-[#494949] border-b-2 border-[#CFCFCF] `}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SmallTitle;
