import { Box, Grid, useMediaQuery } from "@mui/material"; //done review
import React, { use } from "react";
import ProfileCard from "./ProfileComponents/ProfileCard";
import ProfileRoutes from "./ProfileComponents/ProfileRoutes";
import InfoForm from "./ProfileComponents/InfoForm";

import InfoNotFound from "./ProfileComponents/getpersonalinfo";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const PersonalInformation = ({ profile, ProfileId }) => {
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [takeInput, setTakeInput] = React.useState(false);
  const { data: session, status } = useSession();
  React.useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [session]);

  const userDetails = session?.user;
  // const userDetails = useSelector((state) => state?.user?.userDetails?.details);

  return (
    <Grid className="md:px-16 px-4 items-center justify-center md:justify-none">
      {isMobile ? (
        <Grid item md={8.6} xl={8.6} className=" ">
          {userDetails ? (
            <InfoForm
              takeInput={takeInput}
              setTakeInput={setTakeInput}
              className="bg-white "
              ProfileId={ProfileId}
            />
          ) : (
            <InfoNotFound setTakeInput={setTakeInput} takeInput={takeInput} />
          )}
        </Grid>
      ) : (
        <Box className="flex mt-8 item-center justify-center gap-8">
          <Grid item md={3} xl={3.4}>
            <Box className={`flex flex-col gap-[36px] mt-4`}>
              <ProfileCard
                edit={true}
                setTakeInput={setTakeInput}
                takeInput={takeInput}
                profile={profile}
              />
              <ProfileRoutes page={"PERSONAL INFORMATION"} />
            </Box>
          </Grid>
          <Grid item xs={8.6} md={8.6} xl={8.6}>
            {userDetails ? (
              <InfoForm
                takeInput={takeInput}
                setTakeInput={setTakeInput}
                ProfileId={ProfileId}
              />
            ) : (
              <InfoNotFound setTakeInput={setTakeInput} takeInput={takeInput} />
            )}
          </Grid>
        </Box>
      )}
    </Grid>
  );
};

export default PersonalInformation;
