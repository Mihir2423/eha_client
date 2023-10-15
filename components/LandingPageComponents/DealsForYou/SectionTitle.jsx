import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import headingBigLine from "../../../assets/svg/headingBigLine.svg";

import styles from "../dealStyle.module.css";
import { nova_thai } from "@/utilities/font";

const SectionTitle = () => {
  return (
    <Box className={`flex items-center gap-4 ml-8 mb-2`}>
      <Image src={headingBigLine} style={{ width: "38%" }} alt="line" />
      <h4
        className={`${styles.sectionTitle} ${nova_thai.className} `}
        style={{ width: "24%" }}
      >
        DEALS FOR YOU!
      </h4>
      <Image src={headingBigLine} style={{ width: "38%" }} alt="line" />
    </Box>
  );
};

export default SectionTitle;
