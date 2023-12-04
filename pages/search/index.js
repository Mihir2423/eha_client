import React from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import axios from "axios"; // Import Axios

import SingleProduct from "@/components/LandingPageComponents/SingleProduct";
import Title from "@/components/LandingPageComponents/Title";

const SearchDetails = ({ loading }) => {
  const router = useRouter();
  const { name, id } = router.query;
  // console.log(name, id);
  const error = false;
  const [productsData, setProductsData] = React.useState(null);

  React.useEffect(() => {
    const productDatas = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    productDatas();
  }, [id]); // Add id to the dependency array to re-run the effect when id changes

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
  // console.log(productsData);
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
