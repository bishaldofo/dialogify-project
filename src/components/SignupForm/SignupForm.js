import React from 'react';

const SignupForm = () => {
   return (
      <div>
         <form className="card-body p-0 pt-5">
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Email</span>
               </label>
               <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
               <label className="label">
                  <span className="label-text">Password</span>
               </label>
               <input type="password" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
               <button className="btn btn-primary" type='submit'>Sign Up</button>
            </div>
         </form>
      </div>
   );
};

export default SignupForm;