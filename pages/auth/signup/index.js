import Signup from "@/components/authComponents/signup";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      {/* <Background className="-z-50"/> */}
      <div
        style={{ overflow: "hidden", transform: "translateY(-0px)" }}
      >
        <div className="loginBg flex items-center justify-center">
          <Signup />
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
