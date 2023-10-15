import { Box, Typography } from "@mui/material";
import React from "react";

const CustomCategory = (props) => {
  return (
    <Box
      className={`relative`}
      onMouseEnter={() => props.setMonitorDropDown(true)}
      onMouseLeave={() => props.setMonitorDropDown(false)}
    >
      <Typography variant="p" className="text-gray-700 cursor-pointer">
        {props.name}
      </Typography>
      {props.monitorDropDown && (
        <Box
          style={{
            transform:
              props.name === "CPU"
                ? "translate(-70px)"
                : props.name === "MOUSE"
                ? "translateX(-45px)"
                : "translateX(-25px)",
          }}
          className={`flex flex-col gap-3 absolute bg-[#ffffff]  w-[200px] px-4 py-1 left-[-50%] text-center border-t-0`}
        >
          {props.monitorItems?.map((item, i) => (
            <Typography
              key={i}
              variant="p"
              className="text-[#1E1E1E] cursor-pointer hover:bg-black hover:text-white py-[5px]"
            >
              {item}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CustomCategory;
