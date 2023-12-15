import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import SingleProduct from "@/components/LandingPageComponents/SingleProduct";
import Title from "@/components/LandingPageComponents/Title";
import axios from "axios";

const SearchDetails = () => {
  const router = useRouter();
  const { name } = router.query;
  const [productsData, setProductsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/products?name=${name}`);

        setProductsData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    if (name) {
      fetchData();
    }
  }, [name]);
  
  console.log("productsData:", productsData.data);
  let content;
  if (loading) content = <h1>Loading...</h1>;
  else if (error) content = <h1>Something Went Wrong...</h1>;
  else {
    content = Object.values(productsData?.data).map((data, i) => (
      <Box key={i} style={{ width: "20%" }}>
        <SingleProduct item={data} />
      </Box>
    ));
  }

  return (
    <>
      <Box className={`px-20 pt-10`}>
        <Title title={`Search Products for ${name}...`} viewAll={false} />
      </Box>
      <Box className={`flex px-20 justify-center`}>
        <Box className={`flex flex-wrap`} style={{ width: "100vw" }}>
          {content}
        </Box>
      </Box>
    </>
  );
};

export default SearchDetails;
