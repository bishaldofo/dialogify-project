import Contact from "@/components/ContactForm";
import Image from "next/image";

export const metadata = {
    title: 'Dialogify | Contact',
    description: 'Dialogify Home Page',
}

const page = () => {
   return (
       <div>
           <div className='relative'>
               <Image width={1000} height={600} className="w-full" src="https://i.ibb.co/myww356/Our-Team.png"  alt='image' />
               <div className='absolute top-[50%] left-[10%] space-y-6' >
                  <h1 className=' text-3xl text-white font-semibold ' >Reach Out to Our Team</h1>
                  <p className=' text-base text-white font-semibold ' >Have questions or suggestions? <br/> Contact us anytime – our team is here to assist you!</p>

                  <button class='py-2 px-5 rounded-2xl bg-[#FF4500] text-white border-none  transition duration-700 ease-in hover:bg-[#140904] '>
                     Contact Us
                  </button>

               </div>
           </div>

           <div>
               <div>
                  <Contact></Contact>
               </div>
           </div>
       </div>
   );
};

export default page;