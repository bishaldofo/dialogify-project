"use client"

import Image from "next/image";
import { HiOutlinePencil } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaRegQuestionCircle } from "react-icons/fa";

const PostCreate = () => {
   return (
      <div className=" sticky top-14   z-10  " >
         <div className="w-full  p-5 bg-white">
         <div className="flex flex-col lg:flex-row w-full gap-6 items-start">
            <div className="w-[50px] rounded-full">
               <Image width={50} className="rounded-full" height={50} alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <div className="space-y-4 w-full">
               <button className="w-full bg-slate-300 py-2 px-5 rounded-full text-left">What do you want to ask or share?</button>
               <div className="flex sm:flex-row md:flex-col lg:flex-row items-center justify-around md:items-start lg:items-center lg:justify-between px-4">
                  <div>
                     <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>
                        <FaRegQuestionCircle />
                        <p className="text-sm">Ask</p>
                     </button>
                     <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                           <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                              <div className="card-body">
                                 <div className="form-control">
                                    <label className="label">
                                       <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered"/>
                                 </div>
                                 <div className="form-control">
                                    <label className="label">
                                       <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered"/>
                                    <label className="label">
                                       <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                 </div>
                                 <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                 </div>
                              </div>   
                           </form>
                        </div>
                     </dialog>      
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
   );
};

export default PostCreate;