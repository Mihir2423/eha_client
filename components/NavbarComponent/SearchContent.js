import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SearchContent = ({ productsData, setSearchInput }) => {
  const router = useRouter();
 
  return (
    <Box
      className={`absolute flex flex-col w-full bg-[#f1f1f1] z-10 shadow-md shadow-black py-[15px] px-[15px] rounded-b-[10px] max-h-[300px] overflow-y-scroll`}
    >
      {productsData === null ? (
        <h4 className={`font-[NovaThai] text-black text-[15px] cursor-pointer`}>
          Searching...
        </h4>
      ) : productsData.length !== 0 ? (
        productsData.map((item) => (
          <Box
            key={item.id}
            className={`cursor-pointer flex gap-5 items-center border-b-[#c7c6c6] border-b-[2px] pb-3`}
            onClick={() => {
              router.push(`/product/${item.id}`);
              setSearchInput("");
            }}
          >
            {item.image && (
              <Image
                src={item.image}
                width={38}
                height={38}
                alt="product"
              />
            )}
            <h4 className={`font-[NovaThai] text-black text-[15px]`}>
              {item?.name}
            </h4>
          </Box>
        ))
      ) : (
        <h4 className={`font-[NovaThai] text-black text-[15px] cursor-pointer`}>
          No Products Found
        </h4>
      )}
    </Box>
    
  );
};

export default SearchContent;
