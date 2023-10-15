import Login from "@/components/authComponents/login";
import { Box, Container } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import Background from "@/components/background";

const LoginPage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    try {
      const token = window.localStorage.getItem("token");
      if (typeof token === "string") {
        dispatch(getToken(token));
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
  return (
    <>
      {/* <Background className="-z-50"/> */}
      <div
        style={{ overflow: "hidden", transform: "translateY(-0px) " }}
      >
        <div className="loginBg flex items-center justify-center ">
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
