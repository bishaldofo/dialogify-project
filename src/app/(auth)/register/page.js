import Form from "@/components/Form/Form";

const SignUp = () => {

   return (
      <div>
         <div className="hero h-screen" style={{backgroundImage: 'url(https://i.ibb.co/PjQKzd4/bg.jpg)'}}>
            <div className='bg-white p-10 rounded-sm'>
               <Form type="register" />
            </div>
         </div>
      </div>
   );
};

export default SignUp;