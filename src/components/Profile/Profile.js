"use client"

import { useSession } from "next-auth/react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../Loader/Loader";

const Profile = () => {
   const { data: session } = useSession()
   console.log(session)
   const user = session?.user;
   
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      if (user) {
         reset({
            name: user?.name,
            profileImage: user?.profileImage,
         })
      }
      setLoading(false)
   },  [ user  ]);

   const { register, watch, setValue, reset, handleSubmit, formState: { error } } = useForm()
   
   const uploadPhoto = (result) => {
      setValue("profileImage", result?.info?.secure_url);
   }

   const updateUser = async (data) => {
      setLoading(true)
      try {
         const res = await fetch(`/api/users/${user._id}/update`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         })
   
         setLoading(false);
         window.location.reload()
      }
      catch (error) {
         console.log(error)
      }
   }

   return loading ? (<Loader/>) : (
      <div className="max-w-screen-sm m-auto">
         {
            session?.user && <div className="text-center">
               <h1>Edit your profile</h1>
               <form className="space-y-5" onSubmit={handleSubmit(updateUser)}>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input {...register("name", { required: "Name is required" })} type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                  </div>
                  <div className="flex items-center gap-4 justify-center">
                     <Image width={100} height={100} className="rounded-full" style={{ objectFit: 'contain', width: 'auto', height: 'auto' }} alt="Tailwind CSS Navbar component" src={ watch("profileImage") || user?.profileImage || "https://i.ibb.co/MNJLHMM/defalut-img.webp"} />
                     <CldUploadButton options={{ maxFiles: 1 }} onUpload = {uploadPhoto} uploadPreset="giqne9iq">
                        <p className="text-xl">Upload new Photo</p>
                     </CldUploadButton>
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
               </form>
            </div> 
         }
      </div>
   );
};

export default Profile;