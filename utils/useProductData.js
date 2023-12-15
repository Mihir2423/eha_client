import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import SingleProduct from "@/components/LandingPageComponents/SingleProduct";
import styles from "./prod.module.css";
import axios from "axios"; 
const useProductsData = (id, sortField, dir) => {
  // variables
  let content;
  let title;
  const endpoint = id === 1 ? "/api/products" : "/api/products";
  const params = {
    id: id === 1 ? 1 : undefined,
    sortField,
  };
  console.log("params", params)

  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/products/id=${id}`);
        setProductsData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, sortField]);

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