"use client";

import dynamic from "next/dynamic";
import TimeSelector from "./TimeSelector";
import { TIMES } from "@/constants";
import React, { useState } from "react";
const Line = dynamic(
  () => import("@ant-design/charts").then(({ Line }) => Line),
  { ssr: false }
);
export default function Graph({ oneDayChartData, oneYearChartData }) {
  const [time, setTime] = useState(TIMES["1D"]);
  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };
  return (
    <>
      <Line
        data={time === TIMES["1D"] ? oneDayChartData : oneYearChartData}
        padding="auto"
        xField="Date"
        yField="Close"
        xAxis={{
          tickCount: 5,
        }}
        yAxis={{
          grid: { line: { style: { lineWidth: 0 } } },
        }}
        smooth
      />
      <TimeSelector selectedTime={time} handleTimeChange={handleTimeChange} />
    </>
  );
}
