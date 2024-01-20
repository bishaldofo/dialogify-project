"use client"

import Link from "next/link";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import { SiVorondesign } from "react-icons/si";
import { TbMath } from "react-icons/tb";
import { MdOutlinePsychologyAlt } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";


const Sidebar = () => {
   return (
      <div className="sticky top-20">
         <div className="w-full md:w-[250px] bg-white rounded-sm">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 min-h-full text-base-content">
               {/* Sidebar content here */}
               <li>
                  <Link href="/">
                     <div className="flex items-center gap-2">
                        <MdOutlineSportsBaseball className="text-lg" /><p>Visiting And Travel</p>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link href="/">
                     <div className="flex items-center gap-2">
                        <MdOutlinePsychologyAlt className="text-lg" /><p>Psychology</p>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link href="/">
                     <div className="flex items-center gap-2">
                        <MdOutlineSportsBaseball className="text-lg" /><p>Sports</p>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link href="/">
                     <div className="flex items-center gap-2">
                        <FaBusinessTime className="text-lg" /><p>Business</p>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link href="/">
                     <div className="flex items-center gap-2">
                        <PiCookingPotBold className="text-lg" /><p>Cookings</p>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link href="/">
                     <div className="flex items-center gap-2">
                        <SiVorondesign className="text-lg" /><p>Design</p>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link href="/">
                     <div className="flex items-center gap-2">
                        <TbMath className="text-lg" /><p>Mathematics</p>
                     </div>
                  </Link>
               </li>
               <li>
                  <Link href="/">
                     <div className="flex items-center gap-2">
                        <TbDeviceMobileMessage className="text-lg" /><p>Mobile Technology</p>
                     </div>
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;