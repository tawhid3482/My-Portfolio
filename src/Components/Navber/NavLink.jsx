import { NavLink } from "react-router-dom";

const NavLinks = ({route}) => {
    return (
        <li className=" m-1 md:m-0 md:ml-10 p-1 rounded-lg md:w-16 text-center hover:bg-white hover:text-black">
        <NavLink to={route.path}
         className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "bg-yellow-400 p-2 w-40 rounded-lg" : ""
       }
        >

          {route.name}
          </NavLink>
      </li>
    );
};

export default NavLinks;

{/* <NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>; */}