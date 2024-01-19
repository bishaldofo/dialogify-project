"use client"
import LeftSide from "@/components/shared/Home/LeftSide";
import RightSide from "@/components/shared/Home/RightSide";

const Home = () => {
    return (
        <section>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="min-h-screen border rounded">
          <LeftSide></LeftSide>
         </div>
         <div className="md:col-span-2 ">
           <div className="">
            Main contents are comes here
           </div>
         </div>
         <div className="bg-orange-200">
            <RightSide></RightSide>
         </div>
           </div>
        </section>
    );
};

export default Home;