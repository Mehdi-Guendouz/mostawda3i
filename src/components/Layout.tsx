import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="lg:grid lg:grid-cols-5 w-full bg-background border-solid lg:py-6 py-1">
      <div></div>
      <div className="w-full col-span-4 rounded-[30px]  bg-background px-6 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
