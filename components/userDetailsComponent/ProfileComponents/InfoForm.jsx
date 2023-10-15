
import React from "react";
import { Alert, Box, Button, Snackbar, Typography, useMediaQuery} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import axios from "axios";
import { nova_thai_bold, nova_thai } from "@/utilities/font";
import { setDetails } from "@/redux/features/userSlice";
import { useSession } from "next-auth/react";
import editIconSvg from "../../../assets/svg/editIconSvg.svg";
import Image from "next/image";

const InfoForm = ({ setTakeInput, takeInput, ProfileId }) => {
  const [loading, setLoading] = React.useState(false);


  const userDetails = useSelector((state) => state.user.userDetails.details);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNo: Yup.string(),
    landlineNo: Yup.string(),
    gender: Yup.string(),
    dateOfBirth: Yup.string(),
    age: Yup.string(),
  });

  const initialValues = {
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName || "",
    email: userDetails?.email || "",
    phoneNo: userDetails?.phoneNo || "",
    landlineNo: userDetails?.landlineNo || "",
    gender: userDetails?.gender || " ",
    dateOfBirth: userDetails?.dateOfBirth || "",
    age: userDetails?.age || "",
  };

  const onSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}/api/profiles/${ProfileId}`;
      const payload = {
        data: {
          firstName: values?.firstName,
          lastName: values?.lastName || "",
          email: values?.email || "",
          phoneNo: values?.phoneNo || "",
          landlineNo: values?.landlineNo || "",
          gender: values?.gender || " ",
          dateOfBirth: values?.dateOfBirth || "",
          age: values?.age || ""
        }
      };

      const headers = {
        Authorization: `Bearer ${session?.jwt}`,
      };
      const response = await axios.put(apiUrl, payload, { headers });
      setLoading(false);
      dispatch(setDetails(response?.data?.data?.attributes));
      setTakeInput(false);
      console.log("API response:", response.data);
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched, values }) => (
        <Form className={`${nova_thai.className} text-left m-4 rounded-md shadow-2xl bg-white py-8`}>

        
          <h1 className="flex items-center justify-center md:text-3xl text-xl text-center font-bold border-b-2 pb-4 border-red-500">Personal Information
          {
            !takeInput ? (
              <Box
              className={` ml-4 md:hidden`}
              onClick={() => setTakeInput(true)}
            >
              <Image src={editIconSvg} alt="edit" />
            </Box>
            ): null
          }
          </h1>
         
          <Box className={`md:flex gap-20 flex-col`}>
            <Box className={`md:flex w-full py-4 px-8 justify-between md:space-x-3`}>
              <label className="block mt-4">
                <span className="text-gray-700">First Name*</span>
                <Field
                  name="firstName"
                  type="text"
                  disabled={!takeInput}
                  className="w-full my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm "
                  placeholder="Enter your first name"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm font-medium mt-0"
                />
              </label>
              <label className="block mt-4">
                <span className="text-gray-700">Last Name*</span>
                <Field
                  name="lastName"
                  type="text"
                  disabled={!takeInput}
                  className="w-full md:px-1 md:my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                  placeholder="Enter your last name"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm font-medium mt-1"
                />
              </label>
              <label className="block mt-4">
                <span className="text-gray-700">Email Address*</span>
                <Field
                  name="email"
                  type="email"
                  disabled={!takeInput}
                  className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm font-medium mt-1"
                />
              </label>
            </Box>
          </Box>
          <Box className={`md:flex  w-full py-4 px-8 justify-between`}>
            <label className="block mt-4">
              <span className="text-gray-700">Phone No.</span>
              <Field
                name="phoneNo"
                type="text"
                disabled={!takeInput}
                className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                placeholder="Enter your phone number"
              />
              <ErrorMessage
                name="phoneNo"
                component="div"
                className="text-red-500 text-sm font-medium mt-1"
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Landline No.</span>
              <Field
                name="landlineNo"
                type="text"
                disabled={!takeInput}
                className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                placeholder="Enter your landline number"
              />
              <ErrorMessage
                name="landlineNo"
                component="div"
                className="text-red-500 text-sm font-medium mt-1"
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Your Gender*</span>
              <Field
                name="gender"
                type="text"
                disabled={!takeInput}
                className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                placeholder="Enter your gender"
              />
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm font-medium mt-1"
              />
            </label>
          </Box>
          <Box className={`md:flex  w-full py-4 px-8 justify-between`}>
            <label className="block mt-4">
              <span className="text-gray-700">Date of Birth*</span>
              <Field
                name="dateOfBirth"
                type="date"
                disabled={!takeInput}
                className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                placeholder="Enter your date of birth"
              />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="text-red-500 text-sm font-medium mt-1"
              />
            </label>
            <label className="block mt-4">
              <span className="text-gray-700">Age*</span>
              <Field
                name="age"
                type="text"
                disabled={!takeInput}
                className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                placeholder="Enter your age"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm font-medium mt-1"
              />
            </label>
            <Box className={`w-[31%]`} />
          </Box>
          {
            takeInput ? (
              <Box className={`flex md:justify-left justify-end px-[32px] mt-6`}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#EA1D25",
                    width: 110,
                    padding: "12px 25px",
                    borderRadius: 7,
                  }}
                  onClick={onSubmit}

                >
                  <Typography
                    variant="p"
                    className={`${nova_thai_bold.className} text-[14px] line-height-[22px] text-[#FFFFFF]`}
                  >
                    SAVE
                  </Typography>
                </Button>

              </Box>
            ) : null
          }
          {loading && (
            <Snackbar
              className="mb-8"
              open={true}
              autoHideDuration={3000}
              onClose={() => setLoading(false)}
              message="Personal Details Updated Successfully🥳"
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert severity="success" className="bg-green-200 text-lg">
                Updated Successfully !!🥳
              </Alert>
            </Snackbar>
          )}
        </Form>
      )}
    </Formik>
  );
};



export default InfoForm;

