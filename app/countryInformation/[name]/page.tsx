"use client"
import { Nav } from "@/components";
import { fetchNAme } from "@/utils";
import { data } from "@/types";
import { useEffect, useState } from "react";

function page ({params}:{params:{name:string}}) {

  const countruTablu: data[] = [];

  const [data, setData] = useState<data[]>(countruTablu);

  useEffect(() => {
    const fetchData = async () => {
      const allCountry = await fetchNAme(params.name);
      setData(allCountry);
    
    };
    fetchData();
  }, []);

  
 
    return (
      <>
      <Nav/>
      <div className="p-4 lg:p-10  min-h-screen bg-[#fafafa] dark:bg-[#222e37]">
  <a href="/">
    <button className="flex items-center gap-2 bg-[#ffffff] dark:bg-[#2b3641] px-4 py-1 rounded shadow-md capitalize dark:text-white font-thin">
      <svg className="w-4 h-4 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292"/>
      </svg>
      Back
    </button>
  </a>
  <div className="overflow-y-auto">
    {data.map((ele, key) => (
      <div key={key} className="flex flex-col lg:flex-row justify-evenly mt-8 lg:mt-12">
        <div>
        <img className="w-96 h-auto" src={ele.flags.png} alt="" />
        </div>
        <div className="dark:text-white mt-4 lg:mt-0">
          <div className="font-bold text-2xl pb-4">{ele.name.common}</div>
          <div className="flex flex-col sm:flex-row gap-24">
            <div className="space-y-2">
              <div className="font-light"><span className="font-semibold">Native Name: </span>{ele.altSpellings[1]}</div>
              <div className="font-light"><span className="font-semibold">Population: </span>{ele.population.toLocaleString()}</div>
              <div className="font-light"><span className="font-semibold">Region: </span>{ele.region}</div>
              <div className="font-light"><span className="font-semibold">Sub Region: </span>{ele.subregion}</div>
              <div className="font-light"><span className="font-semibold">Capital: </span>{ele.capital}</div>
            </div>
            <div className="space-y-2">
              <div className="font-light"><span className="font-semibold">Top Level Domain: </span>{ele.tld}</div>
              <div className="font-light"><span className="font-semibold">Currencies: </span>{Object.entries(ele.currencies).map(([code, { name }], index) => (<span key={code}>{name}{index < Object.keys(ele.currencies).length - 1 ? ", " : ""}</span>))}</div>
              <div className="font-light"><span className="font-semibold">Languages: </span> {Object.entries(ele.languages).map(([code, name], index) => (<span key={code}>{name}{index < Object.keys(ele.languages).length - 1 ? " , " : ""}</span>))}</div>
            </div>
          </div>
          {ele.borders && (
            <div className="pt-4 sm:flex flex-row gap-2">
              <span className="font-semibold">Border Countries :</span>
              <div className="flex flex-wrap gap-2">
                {ele.borders.map((border, borderKey) => (
                  <div key={borderKey} className="bg-[#ffffff] dark:bg-[#2b3641] px-4 py-1 rounded font-light shadow-md">{border}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

      </>
    );
  };
  
  export default page;
  