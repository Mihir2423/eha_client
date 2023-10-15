import { Box } from "@mui/material";
import React, { useState } from "react";
import CustomCategory from "./CustomCategory";

import localFont from 'next/font/local'

const nova_thai = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})

const Categories = () => {
  const [monitorDropDown, setMonitorDropDown] = useState(false);
  const [desktopDropDown, setDesktopDropDown] = useState(false);
  const [cpuDropDown, setCpuDropDown] = useState(false);
  const [keyboardDropDown, setKeyboardDropDown] = useState(false);
  const [mouseDropDown, setMouseDropDown] = useState(false);

  const monitorItems = ["HP", "Dell", "Acer", "MSI"];
  const desktopItems = ["HPP", "Dell", "Acer", "MSI"];
  const cpuItems = ["HP", "Dell", "Acer", "MSI"];
  const keyboardItems = ["HPP", "Dell", "Acer", "MSI"];
  const mouseItems = ["HPP", "Dell", "Acer", "MSI"];

  return (
    <Box
      className={`bg-white shadow-md flex justify-center py-2 px-48 ${nova_thai.className}`}
    >
      <Box className="flex items-center w-1/2 justify-between">
        <CustomCategory
          monitorDropDown={monitorDropDown}
          setMonitorDropDown={setMonitorDropDown}
          monitorItems={monitorItems}
          name={"MONITOR"}
        />
        <CustomCategory
          monitorDropDown={desktopDropDown}
          setMonitorDropDown={setDesktopDropDown}
          monitorItems={desktopItems}
          name={"DESKTOP "}
        />
        <CustomCategory
          monitorDropDown={cpuDropDown}
          setMonitorDropDown={setCpuDropDown}
          monitorItems={cpuItems}
          name={"CPU"}
        />
        <CustomCategory
          monitorDropDown={keyboardDropDown}
          setMonitorDropDown={setKeyboardDropDown}
          monitorItems={keyboardItems}
          name={"KEYBOARD"}
        />
        <CustomCategory
          monitorDropDown={mouseDropDown}
          setMonitorDropDown={setMouseDropDown}
          monitorItems={mouseItems}
          name={"MOUSE"}
        />
      </Box>
    </Box>
  );
};

export default Categories;
