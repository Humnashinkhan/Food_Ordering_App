import React, { useState } from 'react'
import { restaurantList } from '../utils/constants'
import RestaurantCard from './RestaurantCard'

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

const Home = () => {
const [searchText, setSearchText] = useState("");
const [restaurants, setRestaurants] = useState (restaurantList);

  return (
    <>
    <div className="">
        <input
        className="border-2 md:w-[450px] h-9 mt-8 ml-10 md:ml-96 outline-[#cead8d] p-3" 
        type="text" 
        placeholder="Search a restaurant you want.." 
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        />
        <button
        className="h-9 bg-[#c26100] text-white w-20 rounded-r-md"
        onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
         Search</button>
        </div>
        <div className="md:h-[160vh] flex flex-wrap ml-8">
        {restaurants.map((restaurant) => {
          return (
         <RestaurantCard  key={restaurant.data.id} {...restaurant.data}/>
        );
    })}
        </div>
        <hr/>
        </>
  )
}

export default Home;