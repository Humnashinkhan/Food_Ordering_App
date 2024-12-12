import React from 'react'

const About = () => {
  return (
    <div  className="flex justify-between px-36 py-24">
    <div className="">
      <h1 className="text-[#545454] font-bold text-5xl">Welcome to<br/>
      The world of
    </h1>
       <p>Tasty & Fresh Food</p>
       <p>"Better you will feel if you eat a FoodFire healthy meal"
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