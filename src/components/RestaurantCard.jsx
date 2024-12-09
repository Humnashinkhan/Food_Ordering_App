import React from 'react'

const RestaurantCard = () => {
  return (
    <div className="h-72 w-60 ml-8 mt-8 hover:border-2 shadow-2xl cursor-pointer hover:scale-95 hover:transition transform duration-300 ease-in-out rounded-md">
        <img 
        className="p-2 rounded-lg"
        alt="food logo"
        src="https://assets.architecturaldigest.in/photos/60084f361b516d492c3ab3ec/16:9/w_1920,c_limit/Mumbai-restaurant-COVID-19-1366x768.jpg"
        />
       <h3 className="text-[#353535] font-bold px-2">Domino's Pizza</h3> 
       <h5 className="text-[#545454] px-2">Pizzas, italian, pastas, Desserts</h5>
       <h5 className="text-[#545454] px-2">SHHLOK BUSINESS CENTER</h5>
       <span className="flex gap-5 px-2 mt-3 font-bold text-[#353535]">
        <h4>4.3</h4>
        <h4>2.7km</h4>
        <h4>₹400 for two</h4>
       </span>
    </div>
  )
}

export default RestaurantCard