"use client";

import React, { useState, useRef, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { debounce } from "@/utils";
import Pill from "./Pill";
import { PILLS_MAPPER } from "@/constants";
import { useRouter } from "next/navigation";

import "./search.css";

const AsyncAutocomplete = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();

  const handleCatgoryChange = (newCategory) => {
    setActiveCategory(newCategory);
  };
  const loadOptions = debounce(async (inputValue, callback) => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputValue}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`
    );
    const data = await response.json();
    let options = data?.bestMatches;
    const formattedOptions = options?.map((option) => ({
      label: option["2. name"],
      value: option["1. symbol"],
      type: option["3. type"],
    }));

    callback(formattedOptions);
  }, 300);

  const handleFilter = (option) => {
    if (activeCategory === "All") return true;
    return option?.data?.type?.includes(PILLS_MAPPER[activeCategory]);
  };

  const handleOnChange = (option) => {
    router.push(`/product/${option.value}`);
  };

  const MenuList = (props) => {
    return (
      <components.MenuList {...props}>
        <div className="p-2">
          <Pill
            label="All"
            isActive={activeCategory === "All"}
            onClick={() => handleCatgoryChange("All")}
          />
          <Pill
            label="Stocks"
            isActive={activeCategory === "Stocks"}
            onClick={() => handleCatgoryChange("Stocks")}
          />
          <Pill
            label="ETFs"
            isActive={activeCategory === "ETFs"}
            onClick={() => handleCatgoryChange("ETFs")}
          />
        </div>
        {props.children}
      </components.MenuList>
    );
  };

  return (
    <AsyncSelect
      loadOptions={loadOptions}
      isSearchable
      placeholder="Search stocks & etfs"
      components={{ MenuList }}
      className="search"
      classNamePrefix="custom-dropdown"
      filterOption={handleFilter}
      onChange={handleOnChange}
    />
  );
};

export default AsyncAutocomplete;
