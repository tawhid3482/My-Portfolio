import { NavLink } from "react-router-dom";

const NavLinks = ({ route }) => {
  return (
    <li className=" m-2 md:m-0 md:ml-6 p-1 rounded-lg w-16 md:w-16 text-center hover:bg-yellow-600 ">
      <NavLink
        to={route.path}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-yellow-600 p-2  rounded-lg text-center"
            : ""
        }
      >
        {route.name}
      </NavLink>
    </li>
  );
};

export default NavLinks;

{
  /* <NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>; */
}
