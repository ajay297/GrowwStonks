import React from "react";
import Link from "next/link";
import Search from "./Search";
import ThemeSwitcher from "@/theme/ThemeSwitcher";

const Navbar = () => {
  return (
    <>
      <div className="py-4 bg-primary">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-2">
          <div className="px-4 text-xl font-bold py-1">
            <Link href="/">
              <div className="flex items-center">
                <div className="text-2xl font-bold text-white">GrowwStonks</div>
              </div>
            </Link>
          </div>
          <div className="px-4 py-1 min-w-[50%]">
            <Search />
          </div>
          <div className="pl-2 py-1">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
