"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LogIn from "../(auth)/login/page";
import HomePage from "./home/page";
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";
import PostCreate from "@/components/shared/PostCreate";
import Content from "@/components/shared/Content";
import Advertise from "@/components/shared/Advertise";

const HomePages = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const user = session?.user;
  console.log(user)
  
  return (
    <>
      <div>
        <div>
          <div className='shadow-md bg-white sticky top-0 z-50'>
            <Navbar/>
          </div>
          <div className="flex flex-col md:flex-row mt-5 gap-5 max-w-6xl m-auto">
            <div className="w-full md:w-[250px]">
              <Sidebar/>
            </div>
            <div className="max-w-6xl mx-auto flex-1 space-y-5">
              <PostCreate/>
              <Content/>
            </div>
            <div className="w-full md:w-[250px]">
              <Advertise/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePages;