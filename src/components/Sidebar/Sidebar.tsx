import logo from "@/assets/logo.svg"
import { FiHome } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { PiGarage } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";

export default function Sidebar() {
    return (
        <div className="main sticky mt-0">
            <div className="sidebarMain flex flex-col justify-between bg-white h-screen">
                <div className="sidebarTopSection flex flex-col mx-5 mb-5 mt-[10%]">
                    <img src={logo} alt="MOUSTAWDA3I" className="logo self-center" />
                    <hr className="h-2"/>
                    <ul className="sidebarItems flex-col space-y-1">
                        <li className="flex items-center p-3 text-primary-gray rounded-md hover:bg-secondary-blue-100"><FiHome className="mr-4"/> Dashboard</li>
                        <li className="flex items-center p-3 text-primary-gray rounded-md hover:bg-secondary-blue-100"><BsBoxSeam className="mr-4"/> Produits</li>
                        <li className="flex items-center p-3 text-primary-gray rounded-md hover:bg-secondary-blue-100"><PiGarage className="mr-4" /> Inventaire</li>
                        <li className="flex items-center p-3 text-primary-gray rounded-md hover:bg-secondary-blue-100"><GiReceiveMoney className="mr-4" /> Finances</li>
                    </ul>
                </div>
                <div className="sidebarBottomSection mx-5 mb-3">
                    <ul className="sidebarItems flex-col space-y-1 mt-4">
                        <li className="flex items-center p-3 text-primary-gray rounded-md hover:bg-secondary-blue-100"><FiHome className="mr-4"/> Settings</li>
                        <li className="flex items-center p-3 text-primary-gray rounded-md hover:bg-secondary-blue-100"><BsBoxSeam className="mr-4"/> Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}