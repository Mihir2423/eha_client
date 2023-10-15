import React from "react";
import { Rings } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-[100%]" >
      <Rings
        height="190"
        width="190"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}
