"use client";

import React, {useState} from 'react';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import { debounce } from '@/utils';
import Pill from './Pill';



const AsyncAutocomplete = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const loadOptions = debounce(async (inputValue, callback) => {
    const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${inputValue}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`);
    const data = await response.json();
    let options = data?.bestMatches;
    if(activeCategory!=='All'){
        options=options?.filter(option=> option['1. symbol']===activeCategory);
    }
    const formattedOptions=options?.map(option=> ({label: option['2. name'], value: option['1. symbol']}));
    callback(formattedOptions);
  },300);

const MenuList = (
    props
  ) => {
    return (
      <components.MenuList {...props}>
        
       <Pill
        label="All"
        isActive={activeCategory === 'All'}
        onClick={() => setActiveCategory('All')}
      />
       <Pill
        label="Stocks"
        isActive={activeCategory === 'Stocks'}
        onClick={() => setActiveCategory('Stocks')}
      />
        <Pill
        label="ETFs"
        isActive={activeCategory === 'ETFs'}
        onClick={() => setActiveCategory('ETFs')}
      />
        {props.children}
      </components.MenuList>
    );
  };
  
  return (
    <div style={{ width: '300px' }}>
      <AsyncSelect
        loadOptions={loadOptions}
        isSearchable
        placeholder="Type to search..."
        components={{ MenuList }}
      />
    </div>
  );
};

export default AsyncAutocomplete;
