"use client";
import axios from "axios";
import React from "react";

const styles ={
  container:`pt-96 flex flex-col items-center justify-center bg-gray-50`,
  button:`w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600`,
  form:`bg-white p-8 rounded shadow-md max-w-md w-full`,
  label:`block text-sm font-medium text-gray-600`,
  input:`mt-1 p-2 w-full border rounded-md`,
}
export default function AddData(){

  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await axios.post('/api/signup', formData)
    if (result.status === 200 || result.status === 201) {
      console.log("success");
      alert("Registration Successful")
      
      router.push("/login");
    } else {
      console.log("something went wrong");
      alert("something")
  };
  
  return (
    <div className="" >
      <form action="" onSubmit={handleSubmit} method="post" >

        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={FormData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" name='email'>email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" name='phone'>Phone</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label name='password'>Passowrd</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

}
  
