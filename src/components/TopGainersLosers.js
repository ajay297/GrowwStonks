import DATA from "@/constants/topGainersLosers";
import React from "react";

const TopGainersLosers = async({selectedTab}) => {
// const response= await fetch('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=process.env.ALPHA_VANTAGE_API_KEY');
// const obj= await response.json();
const {top_gainers, top_losers}=DATA;
const data = selectedTab === "top_gainers" ? top_gainers : top_losers;

  return (
    <div>
        {
            data?.map(ele=>(
                <div key={ele.ticker}>{ele.price}</div>
            ))
        }
    </div>
  );
};

export default TopGainersLosers;
