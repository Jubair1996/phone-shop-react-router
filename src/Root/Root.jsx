import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  const loc = useLocation();

  console.log(loc);

  useEffect(() => {
    console.log(loc.pathname);

    if (loc.pathname === "/") {
      document.title = `Phone-home`;
    } else {
      document.title = `Phone ${loc.pathname.replace("/", "-")}`;
    }

    if (loc.state) {
      document.title = ` ${loc.state}`;
    }
  }, [loc.pathname]);
  return (
    <div className="max-w-[1250px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
