import React, { useState, useEffect } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import ServicesCard from "./servicesCard";
import ProductsSection from "./ProductsSection";
import { useSelector } from "react-redux";

const DealsForYou = ({ posts }) => {
  const [rating, setRating] = useState([]);

  useEffect(() => {
    
    const ratingFilter = posts?.filter((post) => post?.rating > 2);
    setRating(ratingFilter);
  }, [posts]);
 
  
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [ele, setEle] = React.useState(null);
  const status = useSelector((state) => state.govCorporate?.status);
  
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const eleItem = localStorage.getItem("ele");
      setEle(eleItem);
    }
  }, [ele]);

  return (
    <>
      {isMobile ? (
        <Grid container spacing={2} padding={3} paddingY={{ xs: 0, md: 3 }}>
          <Grid item xs={12} md={12} xl={12}>
            <ProductsSection posts={rating} noView={true} />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2} padding={3}>
          {!status && (
            <Grid item xs={3} md={2} xl={2}>
              <ServicesCard />
            </Grid>
          )}
          <Grid
            item
            xs={status ? 12 : 9}
            md={status ? 12 : 10}
            xl={status ? 12 : 10}
          >
            <ProductsSection posts={rating} num={status ? 5 : 4} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default DealsForYou;
