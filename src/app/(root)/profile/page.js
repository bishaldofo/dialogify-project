"use client"
import Profile from "@/components/Profile/Profile";
import Navbar from "@/components/shared/Navbar";

const userProfile = () => {
   return (
      <div>
         <div className='shadow-md bg-white sticky top-0 z-50'>
            <Navbar/>
         </div>
         <div className="flex items-center justify-center py-40">
            <Profile/>
         </div>
      </div>
   );
};

export default userProfile;