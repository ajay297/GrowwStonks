import Graph from "./Graph";
import TimeSelector from "./TimeSelector";
import { fetchData } from "@/utils";

export default async function Chart({ symbol }) {
  const oneDayData = await fetchData(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );
  const oneYearData = await fetchData(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
  );

  const oneDayChartData = Object.keys(
    oneDayData["Time Series (5min)"] || {}
  ).map((timestamp) => {
    const dataPoint = oneDayData["Time Series (5min)"][timestamp];
    return {
      Date: timestamp,
      Close: parseFloat(dataPoint["4. close"]),
    };
  });
  const oneYearChartData = Object.keys(
    oneYearData["Time Series (Daily)"] || {}
  ).map((timestamp) => {
    const dataPoint = oneYearData["Time Series (Daily)"][timestamp];
    return {
      Date: timestamp,
      Close: parseFloat(dataPoint["4. close"]),
    };
  });

  return (
    <>
      <div className="border border-black dark:bg-cardColor rounded-lg my-2  px-6 pt-8 py-4">
        <Graph
          oneDayChartData={oneDayChartData}
          oneYearChartData={oneYearChartData}
        />
      </div>
    </>
  );
}
