




import { useSession } from 'next-auth/react';
import React, { useState } from 'react';


  const  PostForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const { data: session } = useSession()
   console.log(session)
   const user = session?.user;
   const email = session?.user?.email;
   const name = session?.user?.name;
   console.log(user);
   console.log(email);
    
    
    
    
    const handleSubmit = async (e) => {
     e.preventDefault();

     if(!title || !description) {
        alert("Title and description are required");
        return;
     }

     try {

     const res = await fetch('https://dialogify-server-xi.vercel.app/posts', {
             method: "POST",
             headers: {
              "Content-type": "application/json"
             },
             body: JSON.stringify({title, description, image, email, name }),
      });
      
      if ( res.ok ) {
        window.location.reload()
        
           
      } else {
        throw new Error("Failed to create a topic");
      }

     } catch (error) {
         console.log(error);
     }
    }


    return (
        
            
            <form onSubmit={handleSubmit} className="card-body">
        
         
          <input onChange={ (e) => setTitle(e.target.value) }  value={title} type="text" placeholder="Title" className="input input-bordered" required />
        
        
          
          <input onChange={ (e) => setDescription(e.target.value) }  value={description} type="text" placeholder="Description" className="input input-bordered" required />
          
      

        
          
          <input onChange={ (e) => setImage(e.target.value) }  value={image} type="text" placeholder="Link" className="input input-bordered" required />
          
        

        
          <button type='submit' className="btn btn-primary">Post</button>
        
      </form>


            
        
    );
};

export default PostForm;