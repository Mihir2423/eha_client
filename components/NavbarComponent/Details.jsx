import React from "react";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { smallTypo } from "@/styles/typoStyles";
import EditIcon from "@/assets/svg/editicon";

import localFont from 'next/font/local'

const nova_thai = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})

const Details = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      className={`${nova_thai.className} bg-black shadow-none flex ${
        isMobile ? `justify-start` : `justify-end`
      }`}
      style={{
        borderBottom: "2px solid rgba(217, 217, 217, 1)",
        padding: "0px 150px 5px 0",
        paddingRight: isMobile ? "0px" : "150px",
      }}
    >
      <Box
        className={`flex justify-between pl-4 pb-1 md:pl-10 items-center`}
        sx={{ width: isMobile ? "100%" : "45%" }}
      >
        {!isMobile && (
          <>
            <Typography variant="p" className="text-white" sx={smallTypo}>
              CONTACT US
            </Typography>
            <Typography variant="p" className="text-white text-xl font-bold">
              |
            </Typography>
            <Typography variant="p" className="text-white" sx={smallTypo}>
              QUERY : +91 0000000000
            </Typography>
            <Typography variant="p" className="text-white text-xl font-bold">
              |
            </Typography>
          </>
        )}
        <Box className={`flex items-center  ${isMobile ? `gap-1` : `gap-3`}`}>
          <Typography variant="p" className="text-white" sx={smallTypo}>
            Please Select Your Location
          </Typography>
          <Typography variant="span">
            <EditIcon width={16} height={14} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
