import MyOrdersPage from "@/components/userDetailsComponent/MyOrdersPage";
import { Box } from "@mui/material";
import axios from "axios";
import { getSession } from "next-auth/react";
import React from "react";

const Profile = ({ profile }) => {
  return (
    <Box className="mt-12">
      <MyOrdersPage profile={profile} />
    </Box>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session == null) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}/api/profile/me`,
      {
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      }
    );
    const profile = response.data.data?.attributes.firstName;
    return {
      props: {
        profile,
      },
    };
  } catch (error) {
    console.error("Error fetching profile:", error);
    return {
      props: {
        profile: "Not Found",
      },
    };
  }
}
