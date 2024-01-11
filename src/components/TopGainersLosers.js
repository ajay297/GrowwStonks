import DATA from "@/constants/topGainersLosers";
import React from "react";
import CompanyCard from "./CompanyCard";

const TopGainersLosers = async({selectedTab}) => {
// const response= await fetch('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=process.env.ALPHA_VANTAGE_API_KEY');
// const obj= await response.json();
const {top_gainers, top_losers}=DATA;
const data = selectedTab === "top_gainers" ? top_gainers : top_losers;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
    {data &&
      data.map(company => (
        <CompanyCard
          key={company.ticker.replace(/[+=-]/g, "")}
          ticker={company.ticker.replace(/[+=-]/g, "")}
          value={company.price}
          percent={company.change_percentage}
          profitloss="increase"
        />
      ))}
  </div>
  );
};

export default TopGainersLosers;
