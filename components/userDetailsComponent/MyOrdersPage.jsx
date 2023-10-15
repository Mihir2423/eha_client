import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileComponents/ProfileCard";
import ProfileRoutes from "./ProfileComponents/ProfileRoutes";
import Orders from "./OrderComponents/Orders";
import UserProfileTitle from "./UserProfileTitle";

const MyOrdersPage = ({ profile }) => {
  return (
    <>
      <UserProfileTitle title={"MY ORDERS"} />
      <Grid
        container
        spacing={{ xs: 0, md: 3 }}
        padding={{ xs: 0, md: 3 }}
        paddingX={{ xs: 2, md: 12 }}
      >
        <Grid item xs={12} md={3.4} xl={3.4}>
          <Box className={`hidden md:flex flex-col gap-[56px]`}>
            <ProfileCard profile={profile} />
            <ProfileRoutes page={"MY ORDERS"} />
          </Box>
        </Grid>
        <Grid item xs={12} md={8.6} xl={8.6}>
          <Orders />
        </Grid>
      </Grid>
    </>
  );
};

export default MyOrdersPage;
