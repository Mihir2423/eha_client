import React from "react";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";

import { nova, nova_thai } from "@/utilities/font";
import { useRouter } from "next/router";

import { signOut } from "next-auth/react";

const ProfileMenu = ({
  profileEl,
  isProfileOpen,
  handleCloseProfile,
  profile,
}) => {
  const router = useRouter();
  return (
    <Menu
      id="profile-menu"
      anchorEl={profileEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ marginTop: "101px", paddingRight: "30px" }}
      open={isProfileOpen}
      onClose={handleCloseProfile}
    >
      {profile.slice(0, -1).map((item) => (
        <MenuItem
          key={item.id}
          onClick={handleCloseProfile}
          className="hover:bg-black hover:text-white hover:text-md"
        >
          <div className="flex items-center ">
            <Link
              className={`text-sm font-semibold ${nova_thai.className}`}
              href={item.component}
              onClick={() => {
                router.push("/" + item.component);
              }}

            >
              {item.name}
            </Link>
          </div>
        </MenuItem>
      ))}
      <MenuItem
        onClick={handleCloseProfile}
        className="hover:bg-black hover:text-white hover:text-md"
      >
        <div className="flex items-center ">
          <Link
            className={`text-sm font-semibold ${nova_thai.className}`}
            href={"/auth/login"}
            onClick={signOut}
          >
            Logout
          </Link>
        </div>
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
