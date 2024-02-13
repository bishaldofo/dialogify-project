"use client"

import { useSession } from 'next-auth/react';
import React, { useState } from 'react';


const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { data: session } = useSession()
  const user = session?.user;
  console.log(user)
  const email = session?.user?.email;
  const name = session?.user?.name;
  const profileImage = session?.user?.profileImage;

  const handleImageUpload = async (e) => {
    try {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      
      const response = await fetch("https://api.imgbb.com/1/upload?key=0a2cd9fc757377b32a44ae3f2baa763c", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      setImage(data.data.url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const currentDate = new Date().toISOString();

      const res = await fetch('https://dialogify-server-xi.vercel.app/posts', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description, image, email, name, profileImage, createdAt: currentDate }),
      });

      if (res.ok) {
        window.location.reload()


      } else {
        throw new Error("Failed to create a topic");
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="card-body">
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Title" className="input input-bordered" required />
        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder="Description" className="input input-bordered" required />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="my-2" required />
        <button type='submit' className="btn btn-primary">Post</button>
      </form>
    </>
  );
};

export default PostForm;