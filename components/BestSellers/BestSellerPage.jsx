import { Grid } from "@mui/material";
import React from "react";
import ProductsSide from "./ProductsSide";
import FilterSort from "./FilterSort";
import FilterSortModal from "./FilterSortModal";

const BestSellerPage = ({ id, sortField, dir, isMobile }) => {
  let content;
  content = isMobile ? (
    <div>
      <FilterSortModal />
      <ProductsSide id={id} sortField={sortField} dir={dir} />
    </div>
  ) : (
    <Grid container spacing={2} padding={3}>
      <Grid item xs={3} md={3} xl={3}>
        <FilterSort />
      </Grid>
      <Grid item xs={9} md={9} xl={9}>
        <ProductsSide
          id={id}
          sortField={sortField}
          dir={dir}
          isMobile={isMobile}
        />
      </Grid>
    </Grid>
  );
  return content;
};

export default BestSellerPage;
