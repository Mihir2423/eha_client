import { Box } from "@mui/material";
import React from "react";

import styles from "../page.module.css";
import FilterSortTitle from "./FilterSortTitle";
import FilterForm from "./FilterForm";
import SortForm from "./SortForm";

const FilterSort = () => {
  const [filter, setFilter] = React.useState(true);
  return (
    <Box className={`${styles.boxShadow} py-2 pb-16 px-5 mt-12 flex flex-col`}>
      <Box className={` mb-5 flex justify-center`}>
        <FilterSortTitle filter={filter} setFilter={setFilter} />
      </Box>
      {filter ? <FilterForm /> : <SortForm />}
    </Box>
  );
};

export default FilterSort;
