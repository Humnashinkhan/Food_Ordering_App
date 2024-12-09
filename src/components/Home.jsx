import React from 'react'
import RestaurantCard from './RestaurantCard'

const Home = () => {
  return (
    <>
    <div className="">
        <input
        className="border-2 w-[450px] h-9 mt-8 ml-96 outline-[#cead8d] p-3" 
        type="text" 
        placeholder="Search a restaurant you want.." 
        />
        <button
        className="h-9 bg-[#c26100] text-white w-20 rounded-r-md"
        >
         Search</button>
        </div>
        <div>
         <RestaurantCard />
        </div>
        </>
  )
}

export default Home;