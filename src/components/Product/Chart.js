import DATA from "@/constants/metaData";
import Graph from './Graph';
import TimeSelector from "./TimeSelector";

export default function Chart({ ticker }) {
const data=DATA;
const chartData = Object.keys(data["Time Series (Daily)"]).map(
  (timestamp) => {
    const dataPoint = data["Time Series (Daily)"][timestamp];
    return {
      Date: timestamp,
      Close: parseFloat(dataPoint["4. close"]), // Round the close value to 2 decimal places
    };
  }
);

  return (
    <>
      <div className="border border-black dark:bg-cardColor rounded-lg my-2  px-6 pt-8 py-4">
        <Graph chartData={chartData}/>
        <TimeSelector/>
      </div>
    </>
  );
}
