"use client";

import { TIMES } from "@/constants";

export default function TimeSelector({ selectedTime, handleTimeChange }) {
  const not_selected_timeStyle =
    "text-lg font-bold py-1 px-2 cursor-pointer rounded-full";
  const selected_timeStyle =
    "text-lg font-bold py-1 px-2 cursor-pointer rounded-full bg-primary";
  return (
    <div className="flex items-center justify-center">
      <div className="flex border border-black dark:border-white rounded-full mt-6 p-2">
        {Object.keys(TIMES).map((time) => (
          <div
            className={
              selectedTime === time
                ? selected_timeStyle
                : not_selected_timeStyle
            }
            key={time}
            onClick={() => handleTimeChange(time)}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
}
