"use client"
import Navbar from "@/components/shared/Navbar";
import { useSession } from "next-auth/react";


const userProfile = () => {
   const { data: session } = useSession()
   console.log(session)
   const user = session?.user;
   
   return (
      <div>
         <div className='shadow-md bg-white sticky top-0 z-50'>
            <Navbar/>
         </div>
         <h1>Profile</h1>
      </div>
   );
};

export default userProfile;