import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import { FORGOT_PASSWORD } from '../../gqloperation/mutation';

const initialValues = {
  email: '',
};

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});



export default function ForgotPassword() {
  const [forgotPass, { loading, error, data }] = useMutation(FORGOT_PASSWORD);
 
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values)
    // Handle form submission here, for example, sending the email for password reset
    try {
      const { data } = await forgotPass({
        variables: {
          email: values.email,
        },
      });
      setSuccess(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ForgotPasswordSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          {/* Your form JSX */}
          <div className="flex justify-between">
            <h1 className="mb-4 text-3xl font-black text-gray-700 text-left">
              Forgot Password
            </h1>
          </div>
          <div className="mb-8 text-sm text-gray-700">
            <p>
              Enter your email address and we will send you a link to reset your password.
            </p>
          </div>
          <div>
            <Field
              type="email"
              name="email"
              className="w-full px-1 my-4 border-b-2 focus:border-b-4 focus:outline-none opacity-80 text-neutral-700 text-base font-normal"
              placeholder="Enter Email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-blue"
          >
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}
