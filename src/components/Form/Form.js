"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react";
import toast from 'react-hot-toast';

const Form = ({ type }) => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const router = useRouter();

   const onSubmit = async (data) => {
      if (type === "register") {
         const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
         });

         if (res.ok) {
            toast.success("Account created successfully!")
            router.push("/login")
         }

         if (res.error) {
            toast.error("Something went wrong!")
         }
      }

      if (type === "login") {
         const res = await signIn("credentials", {
            ...data,
            redirect: false,
         })

         if (res.ok) {
            toast.success("You have logged in successfully!")
            router.push("/")
         }

         if (res.error) {
            toast.error("Invalid email or password!")
         }
      }
   };


   return (
      <div className='w-96'>
         <div className='text-center text-xl text-[#0079D3]'><p>Dialogify</p></div>
         <form className="card-body p-0 pt-5" onSubmit={handleSubmit(onSubmit)}>

            {type === "register" && (
               <div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input defaultValue="" {...register("name", { required: "Name is required" })} type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                  </div>
                  {errors.name && (
                     <p className='text-red-500'>{errors.name.message}</p>
                  )}
               </div>
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
                     if (value.length < 8 || !value.match(/[!@#$%^&*()_+npm i sharp{}\[\]:;<>,.?~\\/-]/)) {
                        return "Password must be at least 8 characters and contain at least one special character!"
                     }
                  }
               })} type="password" name='password' placeholder="Password" className="input input-bordered" />

            </div>
            {errors.password && (
               <p className='text-red-500'>{errors.password.message}</p>
            )}
            <div className="form-control mt-6">
               <button className="btn btn-primary" type='submit'>
                  {type === "register" ? "Sign Up" : "Login"}
               </button>
            </div>
         </form>
         <div className='py-4'>
            {type === "register" ? (
               <Link href="/login" className="link">
                  <p className="text-center">Already have an account? Sign In Here</p>
               </Link>
            ) : (
               <Link href="/register" className="link">
                  <p className="text-center">Don't have an account? Register Here</p>
               </Link>
            )}
         </div>
         {/* <div className='text-center mb-4'>
            <span className='text-lg text-center m-auto'>Or</span>
         </div>
         <button className='flex items-center w-full border p-3 rounded justify-center gap-2 m-auto'><Image src="https://i.ibb.co/QC1kq3P/google-logo.png" width={20} height={20} alt='google logo'></Image>Sign in with google</button> */}
      </div>
   );
};

export default Form;