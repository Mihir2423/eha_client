import { nova, nova_thai } from "@/utilities/font";
import { Instagram, YouTube, Facebook } from "@mui/icons-material";
import Script from "next/script";
import MapComponent from "./maps";
import CardsFooter from "@/components/footer/cards.footer";
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <CardsFooter />
      <Box className="overflow-hidden">
        {isMobile ? (
          <Box
            className="bg-black rounded-none"
            sx={{ backgroundColor: "black" }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="text-white" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="bg-black text-white text-[15px] font-normal"
              >
                <Typography>Useful Links</Typography>
              </AccordionSummary>
              <AccordionDetails
                className={`text-center text-md bg-black text-white ${nova_thai.className}`}
              >
                <Box className=" hover:underline active:text-red-500 ">
                  <Link href="/">Home</Link>{" "}
                </Box>
                <Box className=" hover:underline active:text-red-500 ">
                  <Link href="/about-us">About Us</Link>{" "}
                </Box>
                <Box className=" hover:underline active:text-red-500 ">
                  <Link href="/contact-us">Contact Us</Link>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        ) : null}
        <div className="bg-black md:flex  w-full flex-cols p-8 md:space-x-[80px] justify-between">
          {/* Contact Information */}
          {!isMobile ? (
            <div
              className={` ${nova_thai.className} w-[20%] flex-cols items-start justify-start px-[80px]`}
            >
              <Box className="bg-black rounded-none">
                <h1 className="text-lg text-white ">Useful Links</h1>
                <div className="border border-green-600 " />
                <ul className="text-md bg-black text-white flex-cols list-none pl-0">
                  <li className="hover:underline active:text-red-500">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:underline active:text-red-500">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="hover:underline active:text-red-500">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </Box>
            </div>
          ) : null}

          {/* Map Component (Hidden on Mobile) */}
          <div className="md:flex md:justify-center  hidden">
            <MapComponent />
          </div>

          {/* Follow Us */}
          <div className={`${nova_thai.className} md:font-md p-2 `}>
            <span
              className={`font-sm text-white ${nova.className} md:text-[32px] mb-5 md:-ml-4 items text-center flex justify-center items-center`}
            >
              EHA SHIVAM TECHNOLOGIES
            </span>
            <div className="flex md:space-x-8 justify-between">
              <div className="flex flex-col text-white  md:w-[180px]">
                <div className="text-zinc-300 md:text-lg">Follow Us On:-</div>
                <div className="border border-green-600 " />
                <div className="flex text-white justify-between mt-2 ">
                  <i>
                    <Instagram className="w-[38px] h-[38px] " />
                  </i>
                  <i>
                    <YouTube className="w-[38px] h-[40px] " />
                  </i>
                  <i>
                    <Facebook className="w-[38px] h-[38px]" />
                  </i>
                </div>
              </div>
              <div
                className={` flex-cols bg-black text-white  md:font-md ${nova_thai.className}  font-sm `}
              >
                <div className="border-green-600" />
                <div className="text-zinc-300 text-xl md:text-lg font-medium border-b-2 border-green-600 w-[180px] pb-1">
                  For Queries :-
                </div>
                <div className="text-zinc-300 text-xl font-medium m-2">
                  +91 XXXXXXXXXX
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative border border-white md:font-md"></div>
        <Box className="md:flex md:justify-between bg-black px-2">
          <Typography className="text-center text-white text-[15px] font-normal bg-black p-2 md:p-none">
            © 2023 EHA SHIVAM TECHNOLOGIES
          </Typography>
          <Typography className="text-center text-white text-[15px] font-normal bg-black">
            Designed by Trinity
          </Typography>
        </Box>
      </Box>
    </>
  );
}
