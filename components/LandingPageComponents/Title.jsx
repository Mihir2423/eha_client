import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import headingLine from "../../assets/svg/headingLine.svg";

import styles from "./dealStyle.module.css";
import { useRouter } from "next/router";

import localFont from 'next/font/local'

const nova_thai = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})

const Title = ({ title, viewAll, id }) => {
  const router = useRouter();
  return (
    <Box className={`hidden md:flex justify-between items-center px-10 py-8`}>
      <Box className={`flex justify-start items-center gap-5`}>
        <Image alt="line" src={headingLine} />
        <h4 className={`${styles.sectionTitle} ${nova_thai.className} `}>
          {title}
        </h4>
      </Box>
      {viewAll && (
        <Box
          className={` bg-black py-2 px-3 flex justify-center items-center cursor-pointer`}
          style={{ borderRadius: "5px" }}
          onClick={() => router.push(`/category?id=${id}`)}
        >
          <h4
            className={`text-white normal-case text-base marker ${nova_thai.className}`}
          >
            {"VIEW ALL"}
          </h4>
        </Box>
      )}
    </Box>
  );
};

export default Title;
