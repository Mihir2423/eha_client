import HomePage from "@/components/HomePageComponents/HomePage";
import React, { useEffect } from "react";
import { getToken } from "@/redux/features/userSlice";
import { useDispatch } from "react-redux";
import Head from "next/head";
import { Nova_Flat } from "next/font/google";
import { setProduct } from "@/redux/features/productSlice";
import axios from "axios";

const novaFlat = Nova_Flat({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  display: "swap",
});

const Home = () => {
  const dispatch = useDispatch();
  const [productsData, setProductsData] = React.useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get("/api/products");
        // console.log("RESPONSE", response);
        if (response.data) {
          setProductsData(response.data);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []); 

  useEffect(() => {
    if (productsData) {
      dispatch(setProduct(productsData));
    }
  }, [dispatch, productsData]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token && typeof token === "string") {
      dispatch(getToken(token));
    }
  }, [dispatch]);

  const posts = productsData?.data;
  // console.log(posts);

  return (
    <>
      <Head>
        <title>EHA Shivam Technologies | Dashboard</title>
        <meta name="description" content="Get all electronics products" />
      </Head>
      <HomePage
        posts={posts}
        className={novaFlat.className}
      />
    </>
  );
};

export default Home;