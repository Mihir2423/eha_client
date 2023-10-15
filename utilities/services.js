import axios from "axios";
import { useDispatch } from "react-redux";
import { setDetails } from "@/redux/features/userSlice";

export default async function FetchDetails(){
    const token = window.localStorage.getItem("token");
    try {
      const response = await axios.request({
        method: "get",
        url: `${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}/api/profile/me`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setDetails(response.data.data));
    } catch (error) {
      console.error(error.data);
    }
};

