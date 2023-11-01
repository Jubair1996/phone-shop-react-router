import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <div> 
      <nav className="flex justify-between items-center my-6 shadow-lg py-2 px-4">
        <Logo></Logo>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-600 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/fevorite"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-600 underline"
                  : ""
              }
            >
              Fevorite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-green-600 underline"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
