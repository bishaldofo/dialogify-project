"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()

   const router = useRouter();
   
   const onSubmit = async (data) => {
      if (data) {
         const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         if (res.ok) {
            router.push("/login")
         }

         if (res.error) {
            toast.error("Something went wrong!")
         }
      }
   }
      

   return (
      <div className='w-96'>
         <form className="card-body p-0 pt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Name</span>
               </label>
               <input defaultValue="" {...register("name", { required: "Name is required" })} type="text" name='name' placeholder="Your Name" className="input input-bordered" />
            </div>
            {errors.name && (
                  <p className='text-red-500'>{errors.name.message}</p>
               )}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <input defaultValue="" {...register("email", { required: "Email is required" })} type="email" name='email' placeholder="Email" className="input input-bordered" />
            </div>
            {errors.email && (
                  <p className='text-red-500'>{errors.email.message}</p>
               )}
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Password</span>
               </label>
               <input defaultValue="" {...register("password", {
                  required: "Password is required",
                  validate: (value) => {
                     if (value.length < 8 || !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)) {
                        return "Password must be at least 8 characters and contain at least one special character!"
                     }
                  }
               })} type="password" name='password' placeholder="Password" className="input input-bordered" />
               
            </div>
            {errors.password && (
                  <p className='text-red-500'>{errors.password.message}</p>
               )}
            <div className="form-control mt-6">
               <button className="btn btn-primary" type='submit'>Sign Up</button>
            </div>
         </form>
      </div>
   );
};

export default Register;