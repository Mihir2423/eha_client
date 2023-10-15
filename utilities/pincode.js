import axios from "axios";
import react from "react";

export async function checkPincode(pincode){
    try{
      const response = await axios.request({
        method: "get",
        url: `https://api.postalpincode.in/pincode/${pincode}`
      });
      if (response.data[0].Status === "Success") {
        if (response.data[0].PostOffice[0].State === "Jharkhand") {
          return true;
        } else {
          return false;
        }
      } else {
        // Handle the case where Status is not "Success" here if needed
        return false;
      }
    } catch (error) {
      console.error(error);
      // Handle the error here, e.g., return false or throw an exception
      return false;
    }
  };