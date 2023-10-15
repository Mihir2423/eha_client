import { Box } from "@mui/material";
import React from "react";
import Title from "./Title";
import AllProducts from "./DealsForYou/AllProducts";

const KeyBoardSection = () => {
  return (
    <Box>
      <Title title={"KEYBOARDS FOR YOU"} viewAll={true} />
      <AllProducts totalslides={5} />
    </Box>
  );
};

export default KeyBoardSection;
