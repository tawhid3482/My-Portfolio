import { useState } from "react";
import NavLinks from "./NavLink";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../assets/logo (2).png";
const Navber = () => {
  const [openMenu, setMenu] = useState(false);
  const { user, isAdmin, logOut } = useState();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "project", name: "Projects" },
    { path: "contact", name: "Contact" },
  ];
  

  return (
    <nav className="flex justify-between items-center md:justify-center md:items-center md:text-white p-1 bg-black">
      <div className="">
        <div className="hidden dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src="" alt="" />
              )}
            </div>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
            <li className="">
              <button className="btn btn-sm uppercase">
                {user?.displayName}
              </button>
            </li>

            <li className="">
              {user && isAdmin && (
                <Link
                  to={"/dashboard/adminHome"}
                  className="btn btn-sm uppercase"
                >
                  Dashboard
                </Link>
              )}
              {user && !isAdmin && (
                <Link to={"/dashboard/home"} className="btn btn-sm uppercase">
                  Dashboard
                </Link>
              )}
            </li>

            <li className="">
              <button onClick={logOut} className="btn btn-sm uppercase">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="md:hidden flex justify-start mr-20 items-center"
        onClick={() => setMenu(!openMenu)}
      >
        {openMenu === true ? (
          <RxCross1 className="text-3xl text-yellow-600"></RxCross1>
        ) : (
          <MdOutlineMenuOpen className="text-3xl text-yellow-600"></MdOutlineMenuOpen>
        )}
      </div>

      <ul
        className={` md:flex  md:justify-center rounded-md w-40  md:w-full duration-1000 absolute left-0 md:static bg-black text-white p-4
      ${openMenu ? "top-16" : "-top-60"}
      `}
      >
        {routes.map((route) => (
          <NavLinks key={route.path} route={route}></NavLinks>
        ))}
      </ul>
      <div className="">
        <img src={logo} className="h-20 w-40" alt="" />
      </div>
    </nav>
  );
};

export default Navber;
