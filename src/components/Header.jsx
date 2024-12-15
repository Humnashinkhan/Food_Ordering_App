import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-20 md:h-24 bg-white shadow-lg w-full">
        <div className="flex justify-between">
          <img
           className="h-20 md:h-28 p-4 md:ml-8"
           alt="logo"
           src="https://foodfire-app.netlify.app/foodFireLogo.adc19524.png"
           />
        <div className="mr-2 md:mr-10">
          <ul className="flex">
            <li 
              className="px-3 py-2 rounded-lg mt-3 md:mt-8 font-bold text-gray-500 hover:bg-[#d97919]">
                <Link to="/"> Home </Link>
              </li>
              <li 
              className="px-3 py-2 rounded-lg mt-3 md:mt-8 font-bold text-gray-500 hover:bg-[#d97919]">
                <Link to="/about"> About </Link>
              </li>
              <li 
              className="px-3 py-2 rounded-lg mt-3 md:mt-8 font-bold text-gray-500 hover:bg-[#d97919]">
                 <Link to="/contact">Contact </Link>
              </li>
              <li 
              className="px-3 py-2 rounded-lg mt-3 md:mt-8 font-bold text-gray-500 hover:bg-[#d97919]">
                 <Link to="/login"> Login </Link>
              </li>
            </ul>
           </div>
           </div>
    </div>
  )
}

export default Header