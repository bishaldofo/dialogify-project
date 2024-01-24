import SignupForm from '@/components/SignupForm/SignupForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUp = () => {

   // const handleSubmit = async (e) => {
   //    e.preventDefault();
   //    const email = e.target[0].value;
   //    const password = e.target[1].value;

   //    console.log(email, password)
   // }
   return (
      <div>
         <div className="hero h-screen" style={{backgroundImage: 'url(https://i.ibb.co/PjQKzd4/bg.jpg)'}}>
            <div className='bg-white p-10 rounded-sm'>
               <div className='text-center text-xl text-[#0079D3]'><p><Link href="/">Dialogify</Link></p></div>
               <SignupForm></SignupForm>
               <div className='space-y-4 text-center my-5'>
                  <p>Already have an account? Let's <Link href="/login" className='text-[#0079D3]'>login here</Link></p>
                  <span className='text-lg my-4 m-auto'>Or</span>
                  <button className='flex items-center w-full border p-3 rounded justify-center gap-2 m-auto'><Image src="https://i.ibb.co/QC1kq3P/google-logo.png" width={20} height={20} alt='google logo'></Image>Sign in with google</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;