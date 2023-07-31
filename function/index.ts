import { data } from "@/types";


export  const FindByName = (searchName:string,regionData: data[]): data[] => {
    const find = regionData.filter((ele) =>ele.name.common.toLowerCase().includes(searchName.toLowerCase()));
    return find;
  };

export  const FindByRegion = (selectRegion:string,regionData: data[]):data[] =>  {
    const find =selectRegion === "none"? regionData: regionData.filter((ele) =>ele.region.toLowerCase().includes(selectRegion.toLowerCase()));
    return find
};

export function FilterRegion(regionData:data[]): data[]{
    const regions = regionData.filter((obj, index) =>regionData.findIndex((item) => item.region === obj.region) === index);
    return regions
}

export function DarkMode(DarkMode?:boolean){
   
}