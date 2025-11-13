import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import logo3 from "../assets/logo.png";
import { FaMoon, FaRegMoon } from "react-icons/fa";
const Navbar = () => {
  const { logoutUser, user } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const menuRef = useRef();
  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = (
    <>
      <NavLink className="font-semibold  flex flex-col gap-4" to="/">
        Home
      </NavLink>
      <NavLink
        className="font-semibold flex flex-col gap-4 mt-4 md:mt-0 md:ml-6"
        to="/all-reviews">
        All Review
      </NavLink>
      <NavLink
        className="font-semibold flex flex-col gap-4 mt-4 md:mt-0 md:ml-6"
        to="/add-review">
        Add Review
      </NavLink>
    </>
  );
  return (
    <div className="w-full fixed top-0 z-20">
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white border text-black rounded-box mt-3 w-52 p-2 shadow  z-10">
              {links}
            </ul>
          </div>
          <Link to="/" className="ml-2 flex gap-1 items-center">
            <img className="w-12 h-12" src={logo3} alt="" />
            <span className="font-bold text-2xl">FOODIES</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="relative" ref={menuRef}>
                {/* User Avatar */}
                <img
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-500 transition"
                  referrerPolicy="no-referrer"
                  src={user.photoURL}
                  alt="User Avatar"
                  onClick={() => setOpen(!open)}
                />

                {open && (
                  <div className="absolute bg-white text-black right-0 mt-2 shadow-lg rounded-lg border w-48 flex flex-col p-2 z-50 animate-fadeIn">
                    <Link
                      to="/add-review"
                      className="btn btn-sm btn-ghost justify-start text-left">
                      Add Review
                    </Link>
                    <Link
                      to="my-reviews"
                      className="btn btn-sm btn-ghost justify-start text-left">
                      My Reviews
                    </Link>
                    <Link
                      to="favorite"
                      className="btn btn-sm btn-ghost justify-start text-left">
                      My Favorite
                    </Link>
                    <Link
                      to="profile"
                      className="btn btn-sm btn-ghost justify-start text-left">
                      My Profile
                    </Link>
                    <button
                      className="btn btn-sm btn-ghost justify-start text-left text-red-500"
                      onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
        <button onClick={toggleTheme} className="ml-4 cursor-pointer">
          {theme === "light" ? <FaRegMoon /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
