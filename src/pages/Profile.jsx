import React, { useState } from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css"; // Import default styles
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router";

const Profile = () => {
  const [open, setOpen] = useState(true);
  const { logoutUser, user } = use(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <NavLink
        className="font-medium bg-amber-500 py-2 my-1 text-center text-white rounded-xl"
        to="/">
        Home
      </NavLink>
      <NavLink
        className="font-medium bg-amber-500 py-2 my-1 text-center text-white rounded-xl"
        to="/all-reviews">
        All Review
      </NavLink>
      <NavLink
        className="font-medium bg-amber-500 py-2 my-1 text-center text-white rounded-xl"
        to="/add-review">
        Add Review
      </NavLink>
      <NavLink
        className="font-medium bg-amber-500 py-2 my-1 text-center text-white rounded-xl"
        to="/my-reviews">
        My Review
      </NavLink>
    </>
  );

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setOpen(true)}>Open Drawer</button>

      <Drawer open={open} onClose={() => setOpen(false)} placement="right">
        <div style={{ padding: 20 }}>
          <h2>Drawer Content</h2>
          <div>
            <div>
              <img
                className="w-28 h-28 rounded-full mx-auto my-2"
                src={user.photoURL}
                alt=""
              />
              <h2 className="text-gray-800 text-xl font-semibold text-center mt-2">
                {user.displayName}
              </h2>
              <p className="text-center text-gray-600 mb-4">{user.email}</p>

              <ul className="flex flex-col ">{links}</ul>
            </div>
            <button
              type="submit"
              onClick={handleLogout}
              className="cursor-pointer w-full font-medium bg-amber-500 py-2 my-1 text-center text-white rounded-xl">
              Logout
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Profile;
