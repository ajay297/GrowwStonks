import React from "react";
import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <>
      <div className="py-4 bg-orange-400">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-2">
          <div className="px-4 text-xl font-bold py-1">
            <Link href="/">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-white">GrowwStonks</div>
              </div>
            </Link>
          </div>
          <div className="px-4 py-1 min-w-[50%]">
            {/* <input
              type="text"
              placeholder="Search stocks and etfs"
              className="border-none rounded-full w-full py-2 px-4 text-black dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-growwOrange focus:border-transparent"
            /> */}
            <Search/>
          </div>
          <div className="pl-2 py-1">
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
