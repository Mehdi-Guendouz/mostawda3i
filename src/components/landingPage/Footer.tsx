import logo from "../../assets/logo.svg";
import { Icons } from "../Icons";

const Footer = () => {
  return (
    <div className="py-4 flex items-center flex-col w-full px-4 border-t border-[#42AAE6] border-solid mt-10">
      <div className="flex items-center justify-between px-10 w-full">
        <img src={logo} alt="logo" className="w-[200px]" />
        <div className="flex flex-col items-start gap-1 text-primary-blue text-lg">
          <span className="font-bold text-2xl capitalize">contact us</span>
          <span>034 55 22 33</span>
          <span>moustawda3i@gmail.com</span>
          <div className="flex items-center gap-2 py-1">
            <Icons.FaFacebookSquare className="w-[30px] h-[30px] cursor-pointer " />
            <Icons.FaLinkedin className="w-[30px] h-[30px] cursor-pointer " />
            <Icons.FaTwitterSquare className="w-[30px] h-[30px] cursor-pointer " />
          </div>
        </div>
      </div>
      <div className="text-center py-4">
        <span className="text-secondary-gray-600 text-sm font-medium">
          © 2023 MOUSTAWDA3I. Tous droits réservés !
        </span>
      </div>
    </div>
  );
};

export default Footer;
