"use client"

import Image from "next/image";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlinePencilSquare, HiOutlinePencil } from "react-icons/hi2";
import { useSession } from "next-auth/react";

const PostCreate = () => {
   const { data: session } = useSession()
  console.log(session)

   return (
      <div className=" sticky top-14 z-10" >
         <div className="w-full p-3 bg-white">
            <div className="flex flex-col lg:flex-row w-full gap-6 items-start">
               <div className="w-[50px] rounded-full">
                  <Image width={50} className="rounded-full" height={50} alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
               </div>
               <div className="space-y-4 w-full">
                  <button
                  className="w-full btn btn-primary py-1 px-5 rounded-full text-left">
                  What do you want to ask or share?
                  </button>
                  <div className="flex sm:flex-row md:flex-col lg:flex-row items-center justify-around md:items-start lg:items-center lg:justify-between px-4">
                     <div className="flex md:w-32 btn bg-transparent border-0 gap-2 items-center">
                        <FaRegQuestionCircle />
                        <p className="text-sm">Ask</p>
                     </div>
                     <span className="sm:block md:hidden lg:block">|</span>
                     <div className="flex md:w-32 btn bg-transparent border-0 gap-2 items-center">
                        <HiOutlinePencilSquare />
                        <p className="text-sm">Answer</p>
                     </div>
                     <span className="sm:block md:hidden lg:block">|</span>
                     <div className="flex md:w-32 btn bg-transparent border-0 gap-2 items-center">
                           <HiOutlinePencil />
                        <p className="text-sm">Post</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
};

export default PostCreate;