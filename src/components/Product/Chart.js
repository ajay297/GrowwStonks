"use client";
import dynamic from 'next/dynamic';
import DATA from "@/constants/metaData";
const Line = dynamic(() => import('@ant-design/charts').then(({ Line }) => Line),
    { ssr: false }
);

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

const time="1D";
  const not_selected_timeStyle =
    "text-lg font-bold py-1 px-2 cursor-pointer rounded-full";
  const selected_timeStyle =
    "text-lg font-bold py-1 px-2 cursor-pointer rounded-full bg-orange-500";

  return (
    <>
      <div className="border border-black dark:bg-cardColor rounded-lg my-2  px-6 pt-8 py-4">
        <Line
          data={chartData}
          padding="auto"
          xField="Date"
          yField="Close"
          xAxis={{
            tickCount: 5,
          }}
          yAxis={{
            grid: { line: { style: { lineWidth: 0 } } },
            min: null, // Set the minimum value for the y-axis
            max: null, // Set the maximum value for the y-axis
          }}
          smooth
        />
        <div className="flex items-center justify-center">
          <div className="flex border border-black dark:border-white rounded-full mt-6 p-2">
            <div
              className={
                time === "1D" ? selected_timeStyle : not_selected_timeStyle
              }
            //   onClick={() => {
            //     if (time !== "1D") {
            //       setTime("1D");
            //     }
            //   }}
            >
              1D
            </div>
            <div
              className={
                time === "1W" ? selected_timeStyle : not_selected_timeStyle
              }
            //   onClick={() => {
            //     if (time !== "1W") {
            //       setTime("1W");
            //     }
            //   }}
            >
              1W
            </div>
            <div
              className={
                time === "1M" ? selected_timeStyle : not_selected_timeStyle
              }
            //   onClick={() => {
            //     if (time !== "1M") {
            //       setTime("1M");
            //     }
            //   }}
            >
              1M
            </div>
            <div
              className={
                time === "3M" ? selected_timeStyle : not_selected_timeStyle
              }
            //   onClick={() => {
            //     if (time !== "3M") {
            //       setTime("3M");
            //     }
            //   }}
            >
              3M
            </div>
            <div
              className={
                time === "6M" ? selected_timeStyle : not_selected_timeStyle
              }
            //   onClick={() => {
            //     if (time !== "6M") {
            //       setTime("6M");
            //     }
            //   }}
            >
              6M
            </div>
            <div
              className={
                time === "1Y" ? selected_timeStyle : not_selected_timeStyle
              }
            //   onClick={() => {
            //     if (time !== "1Y") {
            //       setTime("1Y");
            //     }
            //   }}
            >
              1Y
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
