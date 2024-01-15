"use client";
import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";

export default function GridCard({ data: initialData, selectedTab }) {
  const [data, setData] = useState(initialData);

  const handleOnClick = async () => {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    );
    const resp = await response.json();
    const top_gainers = resp?.top_gainers || [];
    const top_losers = resp?.top_losers || [];
    if (selectedTab === "top_gainers") {
      setData((prev) => [...prev, ...top_gainers]);
    } else {
      setData((prev) => [...prev, ...top_losers]);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8 w-full">
        {data &&
          data.map((company) => (
            <CompanyCard
              key={company.ticker}
              ticker={company.ticker}
              value={company.price}
              percent={company.change_percentage}
              profitloss={
                parseFloat(company.change_amount) > 0 ? "increase" : "decrease"
              }
            />
          ))}
      </div>
      <div className="flex justify-center mt-6">
        <div
          className="px-4 py-2 bg-primary rounded-full font-bold cursor-pointer hover:scale-105 hover:shadow-md transition transform text-white"
          onClick={handleOnClick}
        >
          Load More
        </div>
      </div>
    </>
  );
}
