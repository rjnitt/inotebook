import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  let location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/"
                } ? "active":""`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about"
                } ? active:""`}
                aria-current="page"
                to="/about"
              >
                about
              </Link>
            </li>
          </ul>
        </div>
        <Link to="login" type="button" className="btn btn-primary">
          Login
        </Link>
        <Link to="signup" type="button" className="btn btn-primary">
          SignUp
        </Link>
      </div>
    </nav>
  );
}
