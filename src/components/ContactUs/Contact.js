import Image from 'next/image';
import React from 'react';
import emailImg from '../../assets/vecteezy_design-de-simbolo-de-sinal-de-icone-de-e-mail-e-correio_10153613.png'

const Contact = () => {
    return (
         <div>

         
        <div className=' grid grid-cols-2 my-20 gap-32 ' >
          <div>
            <Image width={400} height={400} src={emailImg} alt='' />
          </div>
          
          <div className=" flex flex-col space-y-14  ">
          <h2 className=" text-2xl text-black font-bold "> Get in Touch </h2>
         
          <form className=" flex flex-col w-96 space-y-8 "  >
      
      <input  className=" border border-slate-300 bg-gray-200 font-semibold  rounded-2xl py-3 px-4 " type="text" placeholder=" your name " name="user_name" />
      
      <input className="  border border-slate-300 bg-gray-200 font-semibold  rounded-2xl py-3 px-4 " type="email" placeholder=" your email " name="user_email" />
      
      <textarea placeholder="Bio" className="  border border-slate-300 bg-gray-200 font-semibold   rounded-2xl py-3 px-4   textarea textarea-bordered textarea-lg w-full" ></textarea>
      <input className=" py-3 bg-[#0079D3] text-white font-semibold mt-4  rounded-3xl hover:bg-blue-800 "  type="submit" value="Send" />
    </form>

          

        </div>
          
        </div>
        </div>
    );
};

export default Contact;