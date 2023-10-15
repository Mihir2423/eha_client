import { Typography, useMediaQuery } from "@mui/material";
import React from "react";

import localFont from "next/font/local";

const nova_thai = localFont({
  src: "../../assets/fonts/NotoSansThaiLooped-Regular.ttf",
  display: "swap",
});

const UIButton = ({ title, interactive, handleClick }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleEvent = () => {
    if (interactive) {
      handleClick(title);
    }
  }
  return (
    <button
      type="button"
      style={{
        border: " 2px solid rgba(217, 217, 217, 1)",
        padding: isMobile ? "3px 13px" : "8px 25px",
        textAlign: "center",
        borderRadius: isMobile ? "5px" : "13px",
      }}
      onClick={handleEvent}
    >
      <Typography
        variant="p"
        className={`text-white normal-case text-base ${nova_thai.className} text-[11px]  md:text-[14px]`}
      >
        {title}
      </Typography>
    </button>
  );
};

export default UIButton;
