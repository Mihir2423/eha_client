import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nova_thai } from "@/utilities/font";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
// import { setDetails } from "@/redux/features/userSlice";
import { addAddress } from "@/redux/features/addressSlice";

const AddressForm = ({ setAdd, profileId }) => {
  const dispatch = useDispatch();
  const {data: session, status} = useSession();
  const id = session?.user.id;
  const [address, setAddress] = React.useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required"),
    telephone: Yup.string(),
    email: Yup.string().email("Invalid email").required("Email is required"),
    address1: Yup.string().required("Address line 1 is required"),
    address2: Yup.string(),
    landmark: Yup.string(),
    zip: Yup.string().required("Zip/Postal code is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State/Province is required"),
    country: Yup.string().required("Country is required"),
  });


  const initialValues = {
    name: "",
    telephone: "",
    email: "",
    address1: "",
    address2: "",
    landmark: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  };

  const handleSubmit = async (values) => {
    console.log("clicked");
    try {
      // Make a POST request to the API endpoint
      const response = await axios.post("/api/user-address", { ...values, id });
  
      if (response.status === 201) {
        const responseData = response.data;
        setAddress(responseData);
        console.log(responseData);
        dispatch(addAddress(responseData));
      } else {
        console.error("Failed to submit address:", response.statusText);
      }
    } catch (error) {
      console.error("API request error:", error);
    }
  }

  return (
    <center>
      <div
        className={` md:w-[900px] relative  bg-white text-black px-[40px] md:px-[80px] py-5 rounded-2xl  shadow-2xl ${nova_thai.className} text-left `}
      >
        <h1 className="text-4xl font-bold mb-4">Delivery Address</h1>
        <hr />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="font-lg ml-4 mr-4">
              <label className="block mt-4 ">
                <span className="text-gray-700">Full name</span>
                <Field
                  name="name"
                  type="text"
                  className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                  placeholder="Enter Your Full Name "
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm font-medium mt-1"
                />
              </label>
              <div className="flex justify-between flex-col md:flex-row ">
                <label className="block md:mb-6">
                  <span className="text-gray-700">Mobile Number</span>
                  <Field
                    name="telephone" // Change to "telephone"
                    type="text"
                    className=" w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                    placeholder="Mobile number"
                  />
                  <ErrorMessage
                    name="telephone" // Change to "telephone"
                    component="div"
                    className="text-red-500 text-sm font-medium mt-1"
                  />
                </label>
                <label className="block md:mb-6">
                  <span className="text-gray-700">Email</span>
                  <Field
                    name="email" // Change to "email"
                    type="text"
                    className=" w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                    placeholder="Email address"
                  />
                  <ErrorMessage
                    name="email" // Change to "email"
                    component="div"
                    className="text-red-500 text-sm font-medium mt-1"
                  />
                </label>
              </div>
              <label className="block md:mb-6">
                <span className="text-gray-700">House No, Building Name*</span>
                <Field
                  name="address1"
                  type="text"
                  className=" w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                  placeholder="House No, Building Name"
                />
                <ErrorMessage
                  name="address1"
                  component="div"
                  className="text-red-500 text-sm font-medium mt-1"
                />
              </label>
              <label className="block md:mb-6">
                <span className="text-gray-700">Road Name, Area, Colony*</span>
                <Field
                  name="address2"
                  type="text"
                  className=" w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                  placeholder="Road Name, Area, Colony"
                />
                <ErrorMessage
                  name="address2"
                  component="div"
                  className="text-red-500 text-sm font-medium mt-1"
                />
              </label>
              <div className="flex justify-between flex-col md:flex-row">
                <label className="block md:mb-6">
                  <span className="text-gray-700">Landmark</span>
                  <Field
                    name="landmark" // Change to "landmark"
                    type="text"
                    className=" w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                    placeholder="Landmark"
                  />
                  <ErrorMessage
                    name="landmark" // Change to "landmark"
                    component="div"
                    className="text-red-500 text-sm font-medium mt-1"
                  />
                </label>
                <label className="block md:mb-6">
                  <span className="text-gray-700">Pincode</span>
                  <Field
                    name="zip" // Change to "zip"
                    type="text"
                    className=" w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                    placeholder="Pincode"
                  />
                  <ErrorMessage
                    name="zip" // Change to "zip"
                    component="div"
                    className="text-red-500 text-sm font-medium mt-1"
                  />
                </label>
              </div>
              <label className="block mb-6">
                <span className="text-gray-700">City</span>
                <Field
                  name="city"
                  type="text"
                  className=" w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-sm font-normal"
                  placeholder="City"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-xsm font-medium mt-1"
                />
              </label>
              <div className="flex justify-between">
                <label className="block mb-6">
                  <span className="text-gray-700">State/Province</span>
                  <Field
                    name="state"
                    type="text"
                    className="block w-full mt-1 border-gray-300 border-b-2 shadow-sm  text-sm"
                    placeholder="State/Province"
                  />
                  <ErrorMessage
                    name="state"
                    component="div"
                    className="text-red-500 text-sm font-medium mt-1"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Country</span>
                  <Field
                    name="country"
                    type="text"
                    className="block w-full mt-1 border-gray-300 border-b-2 shadow-sm  text-sm"
                    placeholder="Country"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm font-medium mt-1"
                  />
                </label>
              </div>
              <div className="mt-4 flex justify-center mr-5 text-white space-x-4">
                <button
                  type="submit"
                  className="text-black h-10 px-8 bg-white rounded-lg transition-colors duration-150 focus:shadow-outline border-2 border-red-500 hover:bg-red-600 hover:text-white shadow-md"
                >
                  Save
                </button>
                <button
                  type="submit"
                  className="h-10 px-5 bg-red-600 rounded-lg transition-colors duration-150 focus:shadow-outline shadow-md"
                  onClick={() => setAdd(false)}
                >
                  Cancel & Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </center>
  );
};

export default AddressForm;
