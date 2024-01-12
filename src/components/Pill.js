"use client";

import React from "react";

const Pill = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 mr-2 text-sm ${
        isActive ? "bg-tertiary text-black" : "bg-gray-300 text-gray-700"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
