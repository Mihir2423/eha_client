import React from "react";

const UserProfileTitle = ({ title }) => {
  return (
    <div
      className="bg-[#FFFFFF] flex md:hidden items-center justify-center p-[6px] py-[10px] mt-2 mb-6"
      style={{ boxShadow: "0px 4px 7px 0px #00000040" }}
    >
      <h1 className="font-[NovaThai] text-[16px]">{title}</h1>
    </div>
  );
};

export default UserProfileTitle;
