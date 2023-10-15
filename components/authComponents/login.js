import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginImg from "../../assets/img-login.png";
import { Alert, Box, Container, Snackbar, useMediaQuery } from "@mui/material";
import { nova, nova_thai } from "../../utilities/font";
import Image from "next/image";
import { useMutation, gql } from "@apollo/client";
import { LOGIN, FORGOT_PASSWORD } from "../../gqloperation/mutation";
import Background from "../background";


import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getToken } from "@/redux/features/userSlice";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Loading from "@/utils/loading";
import { preventDefault } from "ol/events/Event";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isForgotPassword, setIsForgotPassword] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [loginUser, { loading, error, data }] = useMutation(LOGIN);
  const forgotPassword = useMutation(FORGOT_PASSWORD);
  const isMobile=useMediaQuery("(max-width: 768px)");
  const [Error,setError]=React.useState(null);
  const initialValues = {
    identifier: "",
    password: "",
  };
  if(loading) return (
    <div className="w-full flex items-center justify-center">
      <Loading />
    </div>
  );

  const validationSchema = Yup.object().shape({
    identifier: Yup.string().required("identifier is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: values.identifier,
        password: values.password,
      });
      if (result.ok) {
        setSuccess(true);
        router.replace("/");
      } else {
        setError("Login Failed 🫠!!");

      }
    } catch (error) {
      setError(error?.message);
    }
  };  
  
  return (
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit }) => ( 
        <Form>
        <div
        className={`flex items-center mt-5 ${nova_thai.className} mx-0 md:w-[50vw] `}
        
      >
            <div className="flex-1 h-1/2 max-w-3xl mx-auto bg-white rounded-lg shadow-2xl ">
              <div className="flex flex-col md:flex-row">
                
                {isMobile?null:
                  <div className="h-32 md:h-auto md:w-[40%]">
                  <Image
                  className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  src={LoginImg}
                  alt="login"
                  width={500}
                  height={500}
                />
                </div>
                }
                <div className="flex items-center justify-center p-6 sm:p-12 md:w-[60%]">
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1
                        className={`mb-4 text-3xl font-black  text-black text-left ${nova_thai.className}`}
                      >
                        LOGIN
                      </h1>
                      <button
                        className={`mb-4 text-sm text-red-500 text-right ${nova_thai.className}`}
                        onClick={() => router.push("/auth/signup")}
                      >
                        SIGNIN
                      </button>
                    </div>

                    <span
                      className={`text-zinc-400 text-sm mt-0 font-normal ${nova_thai.className}`}
                    >
                      Get access to your account
                    </span>
                    <div>
                      <Field
                        type="identifier"
                        name="identifier"
                        className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-base font-normal"
                        placeholder="Username or Email"
                      />
                      <ErrorMessage
                        name="identifier"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div>
                      <Field
                        type="password"
                        name="password"
                        className="w-full px-1 my-4  border-b-2 focus:border-b-4 focus:outline-none fopacity-80 text-neutral-700 text-base font-normal"
                        placeholder="Enter Password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <p className="mt-4">
                      <Link
                        className="text-sm text-blue-600 hover:underline"
                        href="/auth/forgot-password"
                      >
                        Forgot your password?
                      </Link>
                    </p>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-blue"
                    >
                      Log in 
                    </button>
                  </div>
                </div>
                {Error && (
                  <Snackbar
                    className="mb-8"
                    open={true}
                    autoHideDuration={6000}
                    onClose={() => setSuccess(false)}
                    message="Login Failed"
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  >
                    <Alert severity="error">{Error}</Alert>
                  </Snackbar>
                )}
                {success && (
                  <Snackbar
                    className="mb-8"
                    open={true}
                    autoHideDuration={1000}
                    onClose={() => setSuccess(false)}
                    message="Login Success 🥳"
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  >
                    <Alert severity="success" className="bg-green-200 text-lg">
                      {" "}
                      Welcome back <b>{data?.login?.user.username} 🥳</b>
                    </Alert>
                  </Snackbar>
                )}
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
