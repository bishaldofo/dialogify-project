"use client"

import Image from "next/image";

const Content = () => {
   return (
      <div className="space-y-5">
         <div className="card w-full bg-base-100 rounded-sm shadow-xl">
            <div className="card-body">
               <h2 className="card-title">Wizards of Waverly Place reboot has been announced !</h2>
               <p>According to Deadline, Selena Gomez and David Henrie will executive produce the show and will reprise their roles as well.</p>
            </div>
            <figure><Image width={600} className="w-full" height={600} src="https://i.ibb.co/dLKCKmd/wizards-of-waverly-place-reboot-has-been-announced-v0-yp6morblj8dc1.webp" alt="News" /></figure>
         </div>
         
         <div className="card w-full bg-base-100 rounded-sm shadow-xl">
            <div className="card-body">
               <h2 className="card-title">Whats the most disturbing?</h2>
               <p>Just think once Sometime I just imagine of those people lived in the past Imagine for a moment that you were born in the year 1900. When you were 14 years old, World War I begins and ends only when you are 18 years old, leaving 22 million dead.</p>
            </div>
            <figure><Image width={600} className="w-full" height={600} src="https://i.ibb.co/HVcFr1H/main-qimg-257a079719ac5566424e5c3b3569a192-pjlq.jpg" alt="News" /></figure>
         </div>
         
         <div className="card w-full bg-base-100 rounded-sm shadow-xl">
            <div className="card-body">
               <h2 className="card-title">Which eating habit is ordinary in your country but strange in the rest of the world?</h2>
               <p>From Indonesia,Eating Everything with rice</p>
            </div>
            <figure><Image width={600} className="w-full" height={600} src="https://i.ibb.co/Rgg1JDq/main-qimg-d1dbc691ddcb41ffeaf4f158cf1d0681.jpg" alt="News" /></figure>
         </div>
      </div>
   );
};

export default Content;