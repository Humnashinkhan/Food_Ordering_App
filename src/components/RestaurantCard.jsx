import React from 'react'
import { IMG_CDN_URL } from '../utils/common'
const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating,
 }) => {
  return (
    <div className="h-[300px] w-64 ml-8 mt-8 hover:border-2 shadow-2xl cursor-pointer hover:scale-95 hover:transition transform duration-300 ease-in-out rounded-md">
       <img 
        className="p-2 rounded-lg h-44 w-full"
        alt="food logo"
        src= {IMG_CDN_URL + cloudinaryImageId}
        />
       <h3 
       className="text-[#353535] font-bold px-2 text-[15px]">
        {name}
    </h3> 
       <h5 
       className="text-[#545454] px-2 text-[12px]">
        {cuisines.join(", ")}
    </h5>
       <h5 
       className="text-[#545454] px-2 text-[12px]">
        {area}
    </h5>
       <span 
       className="flex gap-5 px-2 mt-1 font-bold text-[#353535] text-[13px]">
        <h4>{avgRating}</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
       </span>
    </div>
  )
}

export default RestaurantCard