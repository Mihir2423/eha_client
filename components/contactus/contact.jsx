import React from 'react'

import Image from 'next/image'
import ContactImage from '../../assets/png/contact-image.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nova, nova_thai } from '@/utilities/font';


function Contact() {
    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      };
  return (

    <div className=' md:flex md:items-center md:justify-center w-[1/2] h-screen space-x-5'>
    <div className='md:w-[505px] md:h-[480px] shadow-2xl md:p-2 rounded-2xl'>
    <Formik
    initialValues={{
        fullname: '',
      email: '',
      message: '',
    }}
    validate={(values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.message) {
        errors.message = 'Message is required';
      }

      return errors;
    }}
    onSubmit={handleSubmit}
  >
    {() => (
      <Form className={`px-8 ${nova_thai.className}`}>
      <h1 className="text-3xl font-black text-center mb-2">Contact us</h1>
      <div className="mb-4 ">
          <label htmlFor="fullname" className="block text-gray-400 ml-4">Full Name*</label>
          <Field
            type="text"
            id="fullname"
            name="fullname"
            className="form-input mt-1 block w-full rounded-xl border-2 border-gray-700 p-2"
          />
          <ErrorMessage name="fullname" component="div" className="text-red-500 px-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 ml-4">Email address</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="form-input mt-1 block w-full rounded-xl border-2 border-gray-700 p-2"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 px-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-400 ml-4">Message</label>
          <Field
            as="textarea"
            id="message"
            name="message"
            rows={3}
            className="form-input mt-1 block w-full rounded-xl border-2 border-gray-700 p-2"
          />
          <ErrorMessage name="message" component="div" className="text-red-500" />
        </div>

        <div className='w-full flex items-center justify-center '>
          <button
            type="submit"
            className=" bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded "
          >
            Submit
          </button>
        </div>
      </Form>
    )}
  </Formik>    
    </div>
    <div className='md:block hidden'>   
    <Image src={ContactImage} alt="contactus" width={500} height={680}  className='object-fill'/>
    </div>
    </div>
  )
}

export default Contact;