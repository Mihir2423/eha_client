import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_NAME } from "@/gqloperation/queries";
import { Box } from "@mui/material";
import SingleProduct from "@/components/LandingPageComponents/SingleProduct";
import Title from "@/components/LandingPageComponents/Title";

const SearchDetails = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);

  const {
    data: { products: { data: productsData } = {} } = {},
    loading,
    error,
  } = useQuery(GET_PRODUCT_BY_NAME, {
    variables: {
      searchString: name,
    },
  });

  let content;
  if (loading) content = <h1>Loading...</h1>;
  else if (error) content = <h1>Something Went Wrong...</h1>;
  else {
    content = productsData?.map((data, i) => (
      <Box key={i} style={{ width: "20%" }}>
        <SingleProduct item={data} />
      </Box>
    ));
  }
  console.log(productsData);
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
