import logo from "@/assets/logo.svg";
import { FiHome } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { PiGear } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
import Zaki from "@/assets/Zakii.jpg";
import CollapItems from "./CollapItems";
import { Icons } from "../Icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="main w-1/5 fixed mt-0 bg-white ">
      <div className="sidebarMain flex flex-col justify-between h-screen">
        <div className="sidebarTopSection flex flex-col mx-5 mb-5 mt-[10%]">
          <img src={logo} alt="MOUSTAWDA3I" className="logo self-center" />
          <hr className="h-2" />
          <ul className="sidebarItems flex-col space-y-1">
            <CollapItems
              title={
                <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
                  <FiHome className="mr-4" /> Dashboard
                  <Icons.arrow className="rotate-180 ml-auto" />
                </li>
              }
            >
              <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
                <Link
                  className="flex items-center gap-1 w-full "
                  to="/addProduct"
                >
                  <BsBoxSeam className="mr-4" /> Produits
                </Link>
              </li>
            </CollapItems>
            <CollapItems
              title={
                <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
                  <HiMiniArrowsRightLeft className="mr-4" /> Transactions
                  <Icons.arrow className="rotate-180 ml-auto" />
                </li>
              }
            >
              <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
                <Link
                  className="flex items-center gap-1 w-full "
                  to="/AchatPage"
                >
                  <FaArrowRightLong className="mr-4" /> Achats
                </Link>
              </li>
              <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
                <Link
                  className="flex items-center gap-1 w-full "
                  to="/VentePage"
                >
                  <FaArrowLeftLong className="mr-4" /> Ventes
                </Link>
              </li>
            </CollapItems>

            <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
              <Link className="flex items-center gap-1 w-full " to="/">
                <GiReceiveMoney className="mr-4" /> Finances
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarBottomSection mx-5 mb-3">
          <ul className="sidebarItems flex-col space-y-1 mt-4">
            <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
              <Link className="flex items-center gap-1 w-full " to="/UserInfo">
                <PiGear className="mr-4" /> Paramètres
              </Link>
            </li>
            <li
              className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100 text-red-500"
              onClick={handleLogout}
            >
              <IoMdLogOut className="mr-4 cursor-pointer" /> Logout
            </li>
            <div className="profile flex items-center p-3 cursor-pointer rounded-md hover:bg-secondary-blue-100">
              <img src={Zaki} alt="" className="w-[40px] rounded-full" />
              <div className="flex ml-2 flex-col ">
                <p className="text-sm text-gray-500 cursor-pointer">
                  <Link
                    className="flex items-center gap-1 w-full "
                    to={"/UserInfo"}
                  >
                    Amine Rahmouni
                  </Link>
                </p>
                <p className="text-xs text-gray-400">rahmouni@gmail.com</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
