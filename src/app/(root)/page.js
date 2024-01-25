import Advertise from "@/components/shared/Advertise";
import Content from "@/components/shared/Content";
import PostCreate from "@/components/shared/PostCreate";
import Sidebar from "@/components/shared/Sidebar";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 gap-5">
      <div className="w-full md:w-[250px]">
        <Sidebar/>
      </div>
      <div className="max-w-6xl m-auto flex-1 space-y-5">
        <PostCreate/>
        <Content/>
      </div>
      <div className="w-full md:w-[250px]">
        <Advertise/>
      </div>
    </div>
      
  )
}

export default HomePage;