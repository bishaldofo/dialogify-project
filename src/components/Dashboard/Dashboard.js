


import Link from "next/link";
import { FaHome, FaUserCheck } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div>
             <div className=" flex ">
        <div className=" w-64 min-h-screen bg-blue-950 text-white ">
          <ul className="menu p-4">
            <li>
              <Link to="/dashboard/myProfile">
                <FaUserCheck></FaUserCheck> My Profile Menu
              </Link>
            </li>

            <div className="divider"></div>

            <li>
              <Link to="/">
                <FaHome></FaHome> Home
              </Link>
            </li>

           

           
          </ul>
        </div>

        <div className=" flex justify-center items-center mx-auto w-full ">
          <Outlet></Outlet>
        </div>
      </div>
        </div>
    );
};

export default Dashboard;