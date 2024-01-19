"use client"

import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Navbar = () => {
   return (
      <div className="max-w-6xl m-auto">
         <div className="navbar bg-base-100">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     <li><IoHome /><Link href="/">Home</Link></li>
                     <li><Link href="/">About</Link></li>
                     <li><Link href="/">Contact</Link></li>
                  </ul>
               </div>
               <a className="btn btn-ghost text-xl text-[#0079D3]">Dialogify</a>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
               <ul className="menu menu-horizontal px-1 flex items-center">
                  <li><Link href="/"><IoHome className="text-xl" />Home</Link></li>
                  <li><Link href="/">About</Link></li>
                  <li><Link href="/">Contact</Link></li>
               </ul>
            </div>
            <div className="navbar-end gap-5">
               <div className="form-control hidden md:block">
                  <input type="text" placeholder="Search" className="input input-bordered w-24 rounded-none md:w-auto" />
               </div>
               <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                        <Image width={100} height={100} alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                     </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     <li>
                        <Link href="/">Name</Link>
                     </li>
                     <li>
                        <Link href="/">Profile</Link>
                     </li>
                     <li>
                        <Link href="/">Settings</Link>
                     </li>
                     <li>
                        <Link href="/">Logout</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;