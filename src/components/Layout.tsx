import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="lg:grid lg:grid-cols-5 w-full bg-background border-solid ">
      <aside className="h-screen sticky top-0">
        <Sidebar />
      </aside>
      <div className="w-full col-span-4 rounded-[30px] bg-background px-6 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
