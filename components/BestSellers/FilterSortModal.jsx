import React from "react";
import FilterIcon from "../../assets/svg/filterIcon.svg";
import SortIcon from "../../assets/svg/sortIcon.svg";
import Image from "next/image";
import FilterForm from "./FilterForm";
import SortForm from "./SortForm";
import styles from "../page.module.css";

const FilterSortModal = () => {
  const [openSort, setOpenSort] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);

  return (
    <div
      className="relative flex mt-[4px] items-center justify-center gap-[22px] w-screen bg=[#FFFFFF] py-[10px]"
      style={{ boxShadow: "0px 3px 8px 0px #00000040" }}
    >
      <div
        className="flex gap-[5px] items-center"
        onClick={() => {
          setOpenFilter(!openFilter);
          setOpenSort(false);
        }}
      >
        <Image src={FilterIcon} alt="filterIcon" />
        <span className="font-[NovaThai] text-[16px] text-[#5F5F5F]">
          Filter
        </span>
      </div>
      <span>/</span>
      <div
        className="flex gap-[5px] items-center"
        onClick={() => {
          setOpenSort(!openSort);
          setOpenFilter(false);
        }}
      >
        <Image src={SortIcon} alt="sortIcon" />
        <span className="font-[NovaThai] text-[16px] text-[#5F5F5F]">Sort</span>
      </div>
      {(openSort || openFilter) && (
        <div
          className={`z-[100] absolute w-[80%] h-fit top-1/2 left-1/2 -translate-x-1/2 translate-y-28 ${styles.boxShadow} py-5 px-5 mt-12 flex flex-col bg-white`}
        >
          {openSort && <SortForm />}
          {openFilter && <FilterForm />}
        </div>
      )}
    </div>
  );
};

export default FilterSortModal;
