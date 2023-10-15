// useProductsData.js
import { useQuery } from "@apollo/client";
import {
  GET_NEW_ARRIVALS,
  GET_PRODUCT_BY_CATEGORY,
} from "@/gqloperation/queries";
import { Box } from "@mui/material";
import SingleProduct from "@/components/LandingPageComponents/SingleProduct";
import styles from "./prod.module.css";

const useProductsData = (id, sortField, dir) => {
  // variables
  let content;
  let title;
  const query = id === 1 ? GET_PRODUCT_BY_CATEGORY : GET_NEW_ARRIVALS;
  const variables = {
    categoryId: id === 1 ? 1 : undefined,
    filters: id === 2 ? { updatedAt: { gte: new Date() } } : undefined,
    sortField,
  };

  // useQuery
  const { data, loading, error } = useQuery(query, variables);

  if (loading) content = <h1>Loading...</h1>;
  else if (error) content = <h1>Something went wrong</h1>;
  else {
    title = id === 1 ? "BEST SELLING LAPTOPS" : "NEW ARRIVALS";
    let productsData = data.products.data;
    if (dir === "desc") {
      productsData = [...productsData].reverse();
    }
    content = productsData?.map((data, i) => (
      <Box key={data?.id} className={styles.bestSeller}>
        <SingleProduct item={data} />
      </Box>
    ));
  }

  return { content, title };
};

export default useProductsData;

