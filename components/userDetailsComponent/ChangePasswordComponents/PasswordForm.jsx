import { Box, Button } from "@mui/material";
import React from "react";
import SectionHeading from "../ProfileComponents/SectionHeading";
import { nova_thai, nova_thai_bold } from "@/utilities/font";
import FormField from "./FormField";

const PasswordForm = () => {
  return (
    <Box
      className={`flex flex-col  rounded-[8px] text-center py-4 px-3 pb-16 `}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
    >
      <SectionHeading title={"SET PASSWORD"} />
      <Box className={`px-[22px]`}>
        <h4
          className={`${nova_thai.className} text-[#8B8B8B] text-[16px] line-height-[25px] text-left`}
        >
          Set Your Password
        </h4>
      </Box>
      <FormField title="Enter Password" />
      <FormField title="Re-Enter Password" />
      <Box className={`flex justify-left mt-5 px-[40px] gap-10`}>
        <Button
          variant="text"
          style={{
            border: "2px solid #000000",
            width: 110,
            padding: "4px 20px",
            borderRadius: 7,
          }}
        >
          <h4
            className={`${nova_thai_bold.className} text-[14px] line-height-[22px] text-[#777777]`}
          >
            CANCEL
          </h4>
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#EA1D25",
            width: 110,
            padding: "4px 20px",
            borderRadius: 7,
          }}
        >
          <h4
            className={`${nova_thai_bold.className} text-[14px] line-height-[22px] text-[#FFFFFF]`}
          >
            UPDATE
          </h4>
        </Button>
      </Box>
      
    </Box>
  );
};

export default PasswordForm;
