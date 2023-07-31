"use client";
import { data } from "@/types";
import React, { useState,useEffect } from "react";
import { fetchCountry } from "@/utils";


import {FindByName ,FindByRegion ,FilterRegion } from '@/function'
export default function Saction() {

  const countruTablu: data[] = [];
  const [data, setData] = useState<data[]>(countruTablu);
  const [country, setCountry] = useState<data[]>(countruTablu);
  const [selectRegion, setSelectRegion] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const allCountry = await fetchCountry();
      setData(allCountry);
      setCountry(allCountry);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectRegion && searchName) {
      const regionData = FindByRegion(selectRegion,data);
      const find = FindByName(searchName,regionData)
      setCountry(find);
    }
    else if  (searchName) {
      setCountry(FindByName(searchName,data));
    } else if (selectRegion) {
      setCountry(FindByRegion(selectRegion,data));
    }
    
  }, [selectRegion, searchName]);
 

  return (
    <>
    
      <div className="min-h-screen bg-[#fafafa] dark:bg-[#222e37] ">
        <div className="sm:flex sm:justify-between sm:space-y-0 space-y-4 p-4">
          <div className="relative w-full">
            <input
              onChange={(event) => setSearchName(event.target.value)}
              type="text"
              placeholder="Search for a country..."
              className="text-sm font-semibold font-mono w-full h-12 p-2 pl-10 sm:w-1/3 dark:text-gray-400 bg-[#ffffff] dark:bg-[#2b3641] rounded-sm shadow-xl"
            />
      
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute  top-3 left-3 h-6 w-6 text-gray-400"
              viewBox="0 0 512 512"
            >
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29L448 448"
              />
            </svg>
          </div>

          <select
            name=""
            id=""
            onChange={(event) => setSelectRegion(event.target.value)}
            className="text-sm font-semibold font-mono bg-[#ffffff] dark:bg-[#2b3641] dark:text-gray-400 h-12 px-4 rounded shadow-xl"
          >
            <option value="none">All Region</option>
            {FilterRegion(data).map((region, key) => (
              <option key={key} value={region.region}>
                {region.region}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center">
          {country.length > 0 ? (
            <div className="grid  gap-16 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  p-4">
              {country.map((ele, key) => (
                <a  key={key} href={`/countryInformation/${ele.name.common}`}>
                <div
                
                 
                  className=" bg-[#ffffff] dark:bg-[#2b3641] pb-12 rounded-lg shadow-md"
                >
                 
                  <img
                    src={ele.flags.png}
                    alt=""
                    className="w-full h-40 object-cover  rounded-t-md"
                  />
                  <div className="dark:text-white font-bold capitalize my-5 pt-4 ml-4">
                    {ele.name.common}
                  </div>
                  <div className="dark:text-white ml-4">
                    <span className=" font-semibold capitalize">
                      population:
                    </span>
                    {ele.population.toLocaleString()}
                  </div>
                  <div className="dark:text-white ml-4">
                    <span className=" font-semibold capitalize">region: </span>
                    {ele.region}
                  </div>
                  <div className="dark:text-white ml-4">
                    <span className=" font-semibold capitalize">capital: </span>
                    {ele.capital}
                  </div>
               
                </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-screen ">
              <div className="text-center dark:text-white">
                <h1 className="text-4xl font-bold mb-6">Oops!</h1>
                <p className="text-xl font-semibold">No country found.</p>
                <p className="text-lg font-semibold mt-4">
                  Please try another search.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

    </>
  );
}
