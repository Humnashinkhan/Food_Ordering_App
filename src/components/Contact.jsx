import React from 'react'

const Contact = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-72 pt-16">
        <img 
         alt="img"
         src="https://foodfire-app.netlify.app/contactUs.6d5a1f67.png"
         />
      </div>
      <form>
      <div className="grid gap-5 pt-20 mr-64">
         <h1 className="text-[#545454] text-center font-bold text-[30px]">Contact Us</h1>
        <input
           className="md:w-[30rem] p-2 border-2 border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200" 
           type="text" 
           name="name"
           placeholder='Your Name'
           required
           />
            <input
           className="md:w-[30rem] p-2 border-2 border-gray-200 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200" 
           type="text" 
           email="email"
           placeholder='Your Email'
           required
           />
           <textarea 
          className="md:w-[30rem] h-32 border-2 border-gray-200 pb-20 pl-2 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200" 
          name="message" 
          id=""
           placeholder='Message' 
           required
           />
          <input 
          className="bg-[#d97919] text-white rounded-md hover:bg-[#9c5813] w-40 ml-36 py-2"
          type="submit"
          value="Send Message"
          />
      </div>
      </form>

    </div>
  )
}

export default Contact