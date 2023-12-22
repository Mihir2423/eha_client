import { useState } from "react";
import { Box, Button, Snackbar } from "@mui/material";
import SectionHeading from "../ProfileComponents/SectionHeading";
import { nova_thai, nova_thai_bold } from "@/utilities/font";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const PasswordForm = () => {
  const { data: session } = useSession();
  const id = session?.user?.id;
  console.log(id);
  const router = useRouter();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    console.log("clicked", values);
    try {
      const apiUrl = `/api/update-password/${id}`;
      const payload = {
        id: id,
        data: {
          password: values?.password,
        },
      };

      const response = await axios.patch(apiUrl, payload);
      console.log(response);

      if (response.status === 200) {
        setSnackbarMessage("Password updated successfully");
        setSnackbarOpen(true);
        router.push("/PersonalInformation");
      } else {
        setSnackbarMessage("Something went wrong");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("API error:", error);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <Box
            className={`flex flex-col rounded-[8px] text-center py-4 px-3 pb-16 `}
            style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
          >
            <SectionHeading title={"SET PASSWORD"} />
            <Box className={`px-[22px]`}>
              <h4
                className={`${nova_thai.className} text-[#8B8B8B] text-[16px] line-height-[25px] text-left`}
              >
                Set Your Password
              </h4>
            </Box>

            <Box className={`px-[12px] md:px-[22px]`}>
              <Box className={`py-4 px-5 mt-10`}>
                <Box
                  className={`text-left border-b-2 border-b-[#888888] w-[100%] md:w-[33%]`}
                >
                  <h4
                    className={`${nova_thai.className} text-[12px] line-height-[19px] text-[#888888] `}
                  >
                    Password
                  </h4>
                  <Box className={`mt-4 relative`}>
                    <Field
                      title="Enter Password"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className={`outline-none bg-transparent`}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-neutral-500" />
                      ) : (
                        <FaEye className="h-5 w-5 text-neutral-500" />
                      )}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm font-medium mt-0"
                    />
                  </Box>
                </Box>
                {/* re Password */}
                <Box
                  className={`text-left mt-4 border-b-2 border-b-[#888888] w-[100%] md:w-[33%]`}
                >
                  <h4
                    className={`${nova_thai.className} text-[12px] line-height-[19px] text-[#888888] `}
                  >
                    Re-Password
                  </h4>
                  <Box className={`mt-4 relative`}>
                    <Field
                      title="Re-Enter Password"
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      className={`outline-none bg-transparent`}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-neutral-500" />
                      ) : (
                        <FaEye className="h-5 w-5 text-neutral-500" />
                      )}
                    </div>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm font-medium mt-0"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box className={`flex justify-left mt-5 px-[40px] gap-10`}>
              <Button
                variant="text"
                onClick={() => {
                  console.log("clicked");
                  router.push("/PersonalInformation");
                }}
                style={{
                  border: "2px solid #000000",
                  width: 110,
                  padding: "4px 20px",
                  borderRadius: 7,
                }}
                className={`${nova_thai_bold.className} text-[14px] line-height-[22px] text-[#777777]`}
              >
                CANCEL
              </Button>
              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#EA1D25",
                  width: 110,
                  padding: "4px 20px",
                  borderRadius: 7,
                }}
                className={`${nova_thai_bold.className} text-[14px] line-height-[22px] text-[#FFFFFF]`}
              >
                UPDATE
              </Button>
            </Box>
          </Box>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message={snackbarMessage}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default PasswordForm;
