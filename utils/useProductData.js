import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SingleProduct from "@/components/LandingPageComponents/SingleProduct";
import styles from "./prod.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const useProductsData = ( sortField, dir) => {
  // variables
  let content;
  let title;
  const router = useRouter();
  const{category} = router.query;
  console.log("id category",category)
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/products?category=${category}&sortBy=${sortField}&dir=${dir}`);
        
        // Check if 'data' property is present in the response
        const responseData = response?.data?.data || [];

        setProductsData(responseData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [category, sortField]);

  if (loading) content = <h1>Loading...</h1>;
  else if (error) content = <h1>Something went wrong</h1>;
  else {
    let modifiedProductsData = Array.isArray(productsData) ? [...productsData] : [];
    if (dir === "desc") {
      modifiedProductsData = modifiedProductsData.reverse();
    }

    content = modifiedProductsData?.map((data, i) => (
      <Box key={data?.id} className={styles.bestSeller}>
        <SingleProduct item={data} />
      </Box>
    ));
  }

  return { content, title };
};

export default useProductsData;
