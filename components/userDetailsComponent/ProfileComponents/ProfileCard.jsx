import { Box, Typography } from "@mui/material";
import React from "react";
import { nova_thai } from "@/utilities/font";
import editIconSvg from "../../../assets/svg/editIconSvg.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

const ProfileCard = ({ edit, setTakeInput, takeInput }) => {
  // const userDetails = useSelector((state) => state.user.userDetails.details);

  const {data:session, status} = useSession()
  console.log(session?.user.email)
  const userDetails = session?.user
  return userDetails?.length < 0 ?  (
    <Box
      className={`${nova_thai.className} flex flex-col justify-center rounded-[8px] text-center py-6 pt-[2px] relative bg-white`}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
    >
      <Box className={`flex justify-center items-center p-4`}>
        <Box
          className={`flex justify-center items-center rounded-[100%] bg-[#1B9AC2] md:px-10 md:py-6`}
        >
          <h1 className={`text-white text-[64px]`}>
            {userDetails ? userDetails.firstName : "N"}
          </h1>
        </Box>
      </Box>
      <h1 className={`text-[25px]`}>
        Hi, {userDetails ? userDetails.firstName : "Not found"}
      </h1>
      <p className={`text-[14px] text-[#464646]`}>
        {userDetails ? userDetails.firstName : "Not Found"}
      </p>
      {edit && !takeInput && (
        <Box
          className={`absolute top-[10px] right-[10px]`}
          onClick={() => setTakeInput(true)}
        >
          <Image src={editIconSvg} alt="edit" />
        </Box>
      )}
    </Box>
  ) :
     (
      <Box
      className={`${nova_thai.className} flex flex-col justify-center rounded-[8px] text-center py-6 pt-[2px] relative bg-white`}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
    >
      <Box className={`flex justify-center items-center p-4`}>
        <Box
          className={`flex justify-center items-center rounded-[100%] bg-[#1B9AC2] md:px-10 md:py-6`}
        >
          <h1 className={`text-white text-[64px]`}>
            {"N"}
          </h1>
        </Box>
      </Box>
      <h1 className={`text-[25px]`}>
        Hi, {"Not found"}
      </h1>
      <p className={`text-[14px] text-[#464646]`}>
        {"Not Found"}
      </p>
      {edit && !takeInput && (
        <Box
          className={`absolute top-[10px] right-[10px]`}
          onClick={() => setTakeInput(true)}
        >
          <Image src={editIconSvg} alt="edit" />
        </Box>
      )}
    </Box>

     )
};

export default ProfileCard;
