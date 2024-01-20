

import React from 'react';
import contactImage from '../../assets/Our Team.png'
import Image from 'next/image';
import Contact from '@/components/ContactUs/Contact';

const contactpage = () => {
    return (
        <div>
            <div className=' relative ' >
            
            <Image src={contactImage}  alt='' />
            <div className=' absolute top-[20%] left-[10%] space-y-6 ' >
            <h1 className=' text-5xl text-white font-semibold ' >Reach Out to Our Team</h1>
<p className=' text-xl text-white font-semibold ' >Have questions or suggestions? <br/> Contact us anytime – our team is here to assist you!</p>

<button className='py-2 px-5 rounded-2xl bg-[#FF4500] text-white border-none  transition duration-700 ease-in hover:bg-[#140904] '>
  Contact Us
</button>

            </div>
            </div>

            <div className=' flex justify-center gap-40 ' >
                <div>
                <Contact></Contact>
                </div>
                
            </div>
        </div>
    );
};

export default contactpage;