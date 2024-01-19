"use client"

import Image from "next/image";

const Contact = () => {
   return (
      <div className="bg-white px-20">
         <div className='w-full flex gap-10 py-20 items-center' >
            <div className="w-1/2">
               <Image width={1000} height={1000} src="https://i.ibb.co/sbCf76C/13184991-5138232.png" alt='Contact image' />
            </div>
            <div className="flex flex-col space-y-14 w-1/2">
               <h2 className=" text-3xl text-black font-bold "> Get in Touch </h2>
            
               <form className=" flex flex-col w-full space-y-8 "  >
         
                  <input  className=" border border-slate-300 bg-gray-200 font-semibold  rounded-2xl py-3 px-4 " type="text" placeholder=" Your name " name="user_name" />
                  
                  <input className="  border border-slate-300 bg-gray-200 font-semibold  rounded-2xl py-3 px-4 " type="email" placeholder=" Your email " name="user_email" />
                  
                  <textarea placeholder="Write your message here..." className="  border border-slate-300 bg-gray-200 font-semibold   rounded-2xl py-3 px-4   textarea textarea-bordered textarea-lg w-full" ></textarea>
                  <input className="btn py-3 bg-[#0079D3] text-white font-semibold mt-4 rounded-3xl hover:bg-blue-800 "  type="submit" value="Send" />
               </form>
            </div>
            
         </div>
      </div>
   );
};

export default Contact;