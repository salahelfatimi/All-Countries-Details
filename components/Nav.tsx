"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMointed] = useState<boolean>(false);
  useEffect(() => {
    setMointed(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <>
      <div>
        <div className="flex justify-between p-5 bg-[#ffffff] dark:bg-[#2b3743] dark:text-white shadow-2xl">
          <span className=" capitalize font-bold ">where in the world ? </span>
          <button className="flex items-center  gap-1" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"  viewBox="0 0 512 512">
            <path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="white" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>

            <span className="capitalize  font-medium text-sm">dark mode</span>{" "}
          </button>
        </div>
      </div>
    </>
  );
}
export default Nav;
