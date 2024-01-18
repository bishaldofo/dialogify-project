import { FaHome, FaStrava, FaUserSecret } from "react-icons/fa";
import { FaArrowDownWideShort, FaMessage, FaPeopleGroup } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const LeftMenu = () => {
    return (
        <div>
        <h2 className="text-xl font-bold pl-6">Feed</h2>
        <ul className="menu rounded-box">
        <li>
          <a>
          <FaHome />
          Home
          </a>
        </li>
        <li>
          <a>
          <FaPeopleGroup />
            Popular
          </a>
        </li>
        <li>
          <a>
          <FaArrowDownWideShort />
           All
          </a>
        </li>
      </ul>
        <div className="divider"></div>
      <ul className="menu rounded-box">
      <h2 className="text-xl font-bold pl-6">Others</h2>
      <li>
        <a>
        <FaUserSecret />
        User Setting
        </a>
      </li>
      <li>
        <a>
        <FaMessage />
          Message
        </a>
      </li>
      <li>
        <a>
      
         + Create Post
        </a>
      </li>
      <li>
        <a>
        <IoIosNotifications />
        Notification
        </a>
      </li>
      <li>
        <a>
        <MdOutlineWorkspacePremium />
          Premium
        </a>
      </li>
      <li>
        <a>
        <FaStrava />
        Avatar
        </a>
      </li>
      </ul>
        </div>
    );
};

export default LeftMenu;