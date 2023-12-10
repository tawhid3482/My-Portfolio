import { useState } from "react";
import NavLinks from "./NavLink";
import { MdOutlineMenuOpen } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";


const Navber = () => {
  const [openMenu, setMenu] = useState(false);

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "about" }
    // { path: "/about", name: "about" },
    // { path: "/about", name: "about" },
  ];

  return (
    <nav className="md:text-white p-2 bg-gray-800">

      <div className="md:hidden" onClick={()=>setMenu(!openMenu)}>
        {
          openMenu === true ? <RxCross1 className="text-3xl text-yellow-400"></RxCross1> : <MdOutlineMenuOpen className="text-3xl text-yellow-400"></MdOutlineMenuOpen>
        }
      </div>



      <ul className={` md:flex md:justify-center rounded-md w-40 md:w-full duration-1000 absolute md:static bg-gray-800 text-white p-4
      ${openMenu ? 'top-10' : '-top-60'}
      `}>
        {routes.map((route) => (
          <NavLinks key={route.path} route={route}></NavLinks>
        ))}
      </ul>
    </nav>
  );
};

export default Navber;
