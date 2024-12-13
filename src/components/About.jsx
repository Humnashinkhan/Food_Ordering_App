import React from 'react'

const About = () => {
  return (
    <div  className="flex justify-between px-56 py-24">
    <div className="">
      <h1 className="text-[#545454] font-bold text-[60px]">Welcome to<br/>
      The world of
    </h1>
       <p className="text-[60px] font-bold bg-[#d97919] text-white px-4 rounded-lg">Tasty & Fresh Food</p>
       <p className="text-[20px] italic font-semibold text-[#545454]">"Better you will feel if you eat a FastFood healthy meal"
       </p>
    </div>
    <div className="">
        <img 
        alt="img"
        src="https://foodfire-app.netlify.app/burgerImage.cadf9cb9.png"
        />
    </div>
    </div>
  )
}

export default About