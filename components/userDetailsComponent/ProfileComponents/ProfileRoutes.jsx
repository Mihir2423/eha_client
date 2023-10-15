import { Box, Typography } from "@mui/material";
import React from "react";
import { nova_thai } from "@/utilities/font";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const ProfileRoutes = ({ page }) => {
  const routeArray = [
    { name: "PERSONAL INFORMATION", link: "PersonalInformation" },
    { name: "MY ORDERS", link: "MyOrders" },
    { name: "MANAGE ADDRESS", link: "ManageAddress" },
    { name: "CHANGE PASSWORD", link: "ChangePassword" },
  ];
  const router = useRouter();
  return (
    <Box
      className={`${nova_thai.className} flex flex-col justify-center rounded-[8px] text-left overflow-hidden`}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
    >
      {routeArray?.map((data, i) => (
        <Link key={i} href={`${data.link}`}>
          <h3
            className={
              data.name !== page
                ? `text-[black] text-[18px] leading-[20px] bg-white p-4 px-8 cursor-pointer hover:text-[white] hover:bg-black`
                : `text-[white] text-[18px] leading-[20px] bg-black p-4 px-8 cursor-pointer`
            }
          >
            {data.name}
          </h3>
        </Link>
      ))}
      <h3
        onClick={() => {
          router.push("/auth/login");
          signOut();
        }}
        className={`text-[black] text-[18px] leading-[20px] bg-white p-4 px-8 cursor-pointer hover:text-[white] hover:bg-black`}
      >
        SIGN OUT
      </h3>
    </Box>
  );
};

export default ProfileRoutes;
