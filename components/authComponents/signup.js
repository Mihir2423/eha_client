import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nova_thai } from "../../utilities/font";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../../gqloperation/mutation";
import SignImg from "../../assets/sign-img.jpg";
import { Alert, Snackbar, useMediaQuery } from "@mui/material";
import { Router } from "next/router";
import Link from "next/link";

const Signup = () => {
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [signupUser, { loading }] = useMutation(SIGNUP);
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { data } = await signupUser({
        variables: {
          input: values,
        },
      });
      setSuccess(true);
      setSubmitting(false);
      localStorage.setItem("token", data.register.jwt);
      Router.push("/auth/login")
    } catch (errors) {
      setError(errors.message|| errors.graphQLErrors[0].message|| "Something went wrong");
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
        <div className={`flex items-center mt-5 ${nova_thai.className} mx-0 md:w-[50vw]`}>
        <div className="flex-1 h-1/2 max-w-3xl mx-auto bg-white rounded-lg shadow-2xl ">
              <div className="flex flex-col md:flex-row">
              {isMobile?null:
                <div className="h-32 md:h-auto md:w-1/2">
                  <Image
                    className="object-fill w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    src={SignImg}
                    alt="signup"
                    width={500}
                    height={500}
                  />
                </div>
              }  
                <div className="flex items-center justify-center p-6 sm:p-12 md:w-[60%]">
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1 className={`mb-4 text-3xl font-black  text-black text-left ${nova_thai.className}`}>
                        SIGNUP
                      </h1>
                      <Link
                        type="button"
                        className={`mb-4 text-sm text-red-500 text-right ${nova_thai.className}`}
                        href="/auth/login"
                        >
                        LOGIN
                      </Link>
                    </div>
                    <span className={`text-zinc-400 text-sm mt-0 font-normal ${nova_thai.className}`}>
                      Create a new account
                    </span>
                    <div>
                      <Field
                        type="text"
                        name="username"
                        className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-base font-normal"
                        placeholder="Username"
                      />
                      <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <Field
                        type="email"
                        name="email"
                        className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-base font-normal"
                        placeholder="Email"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div>
                      <Field
                        type="password"
                        name="password"
                        className="w-full px-1 my-4  border-b-2 focus:border-b-4 focus:outline-none fopacity-80 text-neutral-700 text-base font-normal"
                        placeholder="Password"
                      />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-blue"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Signing up..." : "Sign Up"}
                    </button>
                  </div>
                </div>
                {error && (
                  <Snackbar
                    open={true}
                    autoHideDuration={6000}
                    onClose={() => setError(null)}
                    message="Signup Failed"
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  >
                    <Alert severity="error">{error}</Alert>
                  </Snackbar>
                )}
                {success && (
                  <Snackbar
                    open={true}
                    autoHideDuration={6000}
                    onClose={() => setSuccess(false)}
                    message="Signup Success"
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  >
                    <Alert severity="success">You have been successfully registered!!</Alert>
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

export default Signup;
