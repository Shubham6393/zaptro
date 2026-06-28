import React from "react";
import { getData } from "../context/DataContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  // const {categoryOnlyData} = getData();
  const navigate = useNavigate();
  const {data} = getData()

  const getUniqueCategory = (data, property) => {
      let newVal = data?.map((curElem) => {
        return curElem[property];
      });
      newVal = [...new Set(newVal)]; // unique category only
      return newVal;
    };
  
    const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <div className='bg-[#101829]'>
      <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4'>
        {
        categoryOnlyData?.map((item, index) => {
          return(
          <div key={index}>
            <button onClick ={()=>navigate(`/category/${item}`)}className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-full cursor-pointer text-xs font-semibold tracking-wide hover:scale-105 transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30'>
              {item}
            </button>
          </div>
          );
        })
        }
      </div>
    </div>
  );
};

export default Category;
