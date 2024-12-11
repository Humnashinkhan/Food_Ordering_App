import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h-24 bg-white shadow-lg">
        <div className="flex justify-between">
          <img
           className="h-28 p-4 ml-8"
           alt="logo"
           src="https://i.pinimg.com/736x/84/4d/85/844d8535fb36b860d3a16635ef20fbab.jpg"
           />
        <div className="mr-10">
          <ul className="flex">
            <li 
              className="px-3 py-2 rounded-lg mt-8 font-bold text-gray-500 hover:bg-[#d97919]">
                <Link to="/"> Home </Link>
              </li>
              <li 
              className="px-3 py-2 rounded-lg mt-8 font-bold text-gray-500 hover:bg-[#d97919]">
                <Link to="/about"> About </Link>
              </li>
              <li 
              className="px-3 py-2 rounded-lg mt-8 font-bold text-gray-500 hover:bg-[#d97919]">
                 <Link to="/contact">Contact </Link>
              </li>
              <li 
              className="px-3 py-2 rounded-lg mt-8 font-bold text-gray-500 hover:bg-[#d97919]">
                 <Link to="/login"> Login </Link>
              </li>
            </ul>
           </div>
           </div>
    </div>
  )
}

export default Header