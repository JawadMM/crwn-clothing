import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { userContext } from "../../context/user";
import { signOutUser } from "../../utils/firebase/firebase";

import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(userContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
