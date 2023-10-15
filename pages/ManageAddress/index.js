import ManageAddressPage from "@/components/userDetailsComponent/ManageAddressPage";
import { setDetails } from "@/redux/features/userSlice";
import { Box } from "@mui/material";
import axios from "axios";
import { getSession } from "next-auth/react";
import React from "react";
import { useDispatch } from "react-redux";

const ManageAddress = ({ profile, id }) => {
  const dispatch = useDispatch();
  dispatch(setDetails(profile));
  return (
    <Box className="mt-14">
      <ManageAddressPage profile={profile} profileId={id} />
    </Box>
  );
};
export default ManageAddress;

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
    const profile = response.data.data?.attributes;
    const id = response.data.data?.id;
    return {
      props: {
        profile,
        id,
      },
    };
  } catch (error) {
    console.error("Error fetching profile:", error);
    return {
      props: {
        profile: {},
        id: null,
      },
    };
  }
}
