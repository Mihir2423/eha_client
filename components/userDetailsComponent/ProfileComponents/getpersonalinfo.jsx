import { Box, Button, Typography } from "@mui/material";
import SectionHeading from "./SectionHeading";
import { nova_thai_bold, nova_thai } from "@/utilities/font";
import React from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery"; // Import useMediaQuery
import InfoForm from "./InfoForm";

const InfoNotFound = ({ setTakeInput, takeInput }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onSubmit = () => {
    setTakeInput(true);
  };

  // Define the content variable based on the isMobile condition
  return(
    <Box
      className={`flex flex-col rounded-[8px] text-center py-4 px-3 pb-16 `}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
    >
      <SectionHeading title={"Personal Information"} />
      {takeInput ? (
        <InfoForm setTakeInput={setTakeInput} takeInput={takeInput} />
      ) : (
        <Box className={`grid justify-center items-center p-[119px]`}>
          {/* Uncomment this section and ensure the image path is correct */}
          {/* <Image src={noDataFound} alt="No Address Found" className="flex  justify-center items-center " /> */}
          <Box className="flex justify-center ">
            <Button
              type="button"
              variant="contained"
              style={{
                backgroundColor: "#EA1D25",
                width: 130,
                padding: "10px 5px",
                borderRadius: 7,
                marginTop: 20,
              }}
              className="flex justify-center items-center text-wrap"
              onClick={onSubmit}
            >
              <Typography
                variant="p"
                className={`${nova_thai_bold.className} text-[14px]  text-[#FFFFFF] `}
              >
                Add details
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );

  return content; // Return the content variable
};

export default InfoNotFound;
