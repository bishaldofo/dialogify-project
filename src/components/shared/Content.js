"use client"

import Image from "next/image";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { TfiCommentAlt } from "react-icons/tfi";

const Content = () => {
   return (
      <div className="space-y-5">
         <div className="card w-full bg-base-100 rounded-sm shadow-xl">
            <div className="card-body p-3">
               <div className="flex items-center gap-2">
                  <div className="w-10 rounded-full">
                     <Image width={100} height={100} className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                  <div>
                     <p className="text-sm font-bold">John Doe</p>
                  </div>
               </div>
               <h2 className="card-title text-sm">Wizards of Waverly Place reboot has been announced !</h2>
               <p className="text-sm">According to Deadline, Selena Gomez and David Henrie will executive produce the show and will reprise their roles as well.</p>
            </div>
            <figure><Image width={600} className="w-full" height={600} src="https://i.ibb.co/dLKCKmd/wizards-of-waverly-place-reboot-has-been-announced-v0-yp6morblj8dc1.webp" alt="News" /></figure>
            <div className="flex items-center">
               <div className="flex items-center p-1 m-2 shadow-sm border-gray-100 bg-gray-100 rounded gap-2">
                  <button className="btn py-0 flex items-center gap-2 bg-transparent"><ImArrowUp />Likes 10</button>|
                  <button className="btn py-0 bg-transparent border-0" title="Dislike"><ImArrowDown /></button>
               </div>
               <div>
                  <button className="btn bg-transparent border-0"><TfiCommentAlt /></button>
               </div>
            </div>
         </div>
         
         <div className="card w-full bg-base-100 rounded-sm shadow-xl">
            <div className="card-body p-3">
               <div className="flex items-center gap-2">
                  <div className="w-10 rounded-full">
                     <Image width={100} height={100} className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                  <div>
                     <p className="text-sm font-bold">John Doe</p>
                  </div>
               </div>
               <h2 className="card-title">Whats the most disturbing?</h2>
               <p className="text-sm">Just think once Sometime I just imagine of those people lived in the past Imagine for a moment that you were born in the year 1900. When you were 14 years old, World War I begins and ends only when you are 18 years old, leaving 22 million dead.</p>
            </div>
            <figure><Image width={600} className="w-full" height={600} src="https://i.ibb.co/HVcFr1H/main-qimg-257a079719ac5566424e5c3b3569a192-pjlq.jpg" alt="News" /></figure>
            <div className="flex items-center">
               <div className="flex items-center p-1 m-2 shadow-sm border-gray-100 bg-gray-100 rounded gap-2">
                  <button className="btn py-0 flex items-center gap-2 bg-transparent"><ImArrowUp />Likes 10</button>|
                  <button className="btn py-0 bg-transparent border-0" title="Dislike"><ImArrowDown /></button>
               </div>
               <div>
                  <button className="btn bg-transparent border-0"><TfiCommentAlt /></button>
               </div>
            </div>
         </div>
         
         <div className="card w-full bg-base-100 rounded-sm shadow-xl">
            <div className="card-body p-3">
               <div className="flex items-center gap-2">
                  <div className="w-10 rounded-full">
                     <Image width={100} height={100} className="rounded-full" alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                  <div>
                     <p className="text-sm font-bold">John Doe</p>
                  </div>
               </div>
               <h2 className="card-title text-sm">Which eating habit is ordinary in your country but strange in the rest of the world?</h2>
               <p>From Indonesia,Eating Everything with rice</p>
            </div>
            <figure><Image width={600} className="w-full" height={600} src="https://i.ibb.co/Rgg1JDq/main-qimg-d1dbc691ddcb41ffeaf4f158cf1d0681.jpg" alt="News" /></figure>
            <div className="flex items-center">
               <div className="flex items-center p-1 m-2 shadow-sm border-gray-100 bg-gray-100 rounded gap-2">
                  <button className="btn py-0 flex items-center gap-2 bg-transparent"><ImArrowUp />Likes 10</button>|
                  <button className="btn py-0 bg-transparent border-0" title="Dislike"><ImArrowDown /></button>
               </div>
               <div>
                  <button className="btn bg-transparent border-0"><TfiCommentAlt /></button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Content;