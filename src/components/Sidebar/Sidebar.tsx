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

export default function Sidebar() {
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
                <BsBoxSeam className="mr-4" /> Produits
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
                <FaArrowRightLong className="mr-4" /> Achats
              </li>
              <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
                <FaArrowLeftLong className="mr-4" /> Ventes
              </li>
            </CollapItems>

            <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
              <GiReceiveMoney className="mr-4" /> Finances
            </li>
          </ul>
        </div>
        <div className="sidebarBottomSection mx-5 mb-3">
          <ul className="sidebarItems flex-col space-y-1 mt-4">
            <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100">
              <PiGear className="mr-4" /> Paramètres
            </li>
            <li className="flex items-center p-3 text-primary-gray cursor-pointer rounded-md hover:bg-secondary-blue-100 text-red-500">
              <IoMdLogOut className="mr-4" /> Logout
            </li>
            <div className="profile flex items-center p-3 cursor-pointer rounded-md hover:bg-secondary-blue-100">
              <img src={Zaki} alt="" className="w-[40px] rounded-full" />
              <div className="flex ml-2 flex-col ">
                <p className="text-sm text-gray-500">Amine Rahmouni</p>
                <p className="text-xs text-gray-400">rahmouni@gmail.com</p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
