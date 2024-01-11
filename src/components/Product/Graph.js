"use client";

import dynamic from 'next/dynamic';
const Line = dynamic(() => import('@ant-design/charts').then(({ Line }) => Line),
    { ssr: false }
);
export default function Graph({chartData}){
    return (
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
        }}
        smooth
      />
    )
}