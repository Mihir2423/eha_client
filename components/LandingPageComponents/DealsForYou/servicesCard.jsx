import { Box, Typography } from "@mui/material";
import React from "react";
import localFont from "next/font/local";

const nova_thai = localFont({
  src: "../../../assets/fonts/NotoSansThaiLooped-Regular.ttf",
  display: "swap",
});

import styles from "../dealStyle.module.css";
import UIButton from "@/components/ui/UIButton";
import { useDispatch } from "react-redux";
import { changeStatus } from "@/redux/features/govCorporateSlice";

const ServicesCard = () => {
  const dispatch = useDispatch()
  const handleClick = (ele) => {
    localStorage.setItem("ele", ele);
    dispatch(changeStatus(ele))
  };
  return (
    <Box className={`${styles.cardBgColor} ${nova_thai.className}`}>
      <Box>
        <h3 className={`${nova_thai.className} ${styles.serviceCardTitle}`}>
          Looking For
        </h3>
        <h3 className={styles.serviceCardTitle}>Other Services ?</h3>
      </Box>
      <Box className={styles.btnsBox}>
        <UIButton
          title={"Government"}
          handleClick={handleClick}
          interactive={true}
        />
        <UIButton
          title={"Commercial"}
          handleClick={handleClick}
          interactive={true}
        />
      </Box>
    </Box>
  );
};

export default ServicesCard;
