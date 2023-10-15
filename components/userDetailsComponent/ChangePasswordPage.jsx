import { Box, Grid } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileComponents/ProfileCard";
import ProfileRoutes from "./ProfileComponents/ProfileRoutes";
import PasswordForm from "./ChangePasswordComponents/PasswordForm";
import UserProfileTitle from "./UserProfileTitle";

const ChangePasswordPage = ({ profile }) => {
  return (
    <>
      <UserProfileTitle title={"Change Password"} />
      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        padding={{ xs: 2, md: 3 }}
        paddingX={{ xs: 2, md: 12 }}
      >
        <Grid item xs={12} md={3.4} xl={3.4}>
          <Box className={`hidden md:flex flex-col gap-[56px]`}>
            <ProfileCard profile={profile} />
            <ProfileRoutes page={"CHANGE PASSWORD"} />
          </Box>
        </Grid>
        <Grid item xs={12} md={8.6} xl={8.6}>
          <Box className={`flex flex-col gap-4`}>
            <PasswordForm />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ChangePasswordPage;
