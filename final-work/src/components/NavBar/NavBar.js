import React from "react";
import "./NavBar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const hideSignUpButton = location.pathname === "/signUp";
  const hideSignInButton = location.pathname === "/signIn";
  const navigate = useNavigate();

  const handleUTNClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="link-utn" onClick={handleUTNClick}>
        <h1>UTN</h1>
      </div>
      {hideSignUpButton ? (
        <div className="btn">
          <Link to="/signIn" className="btn btn-primary">
            Login
          </Link>
        </div>
      ) : (
        <div className="btn">
          {!hideSignInButton && (
            <Link to="/signIn" className="btn btn-primary">
              Login
            </Link>
          )}
          <Link to="/signUp" className="btn btn-light">
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
