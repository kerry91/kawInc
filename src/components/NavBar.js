import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Home from "../pages/Home";

function Nav() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar " onClick={(e) => e.stopPropagation()}>
        <div className="nav-container ">
          <NavLink exact to="/" className="nav-logo">
            <FontAwesomeIcon icon={faCode} />
            KAW Inc.
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                activeclassname="active"
                class="nav-links"
                href="#"
                rel="noreferrer"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                activeclassname="active"
                class="nav-links"
                href="#"
                rel="noreferrer"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                activeclassname="active"
                class="nav-links"
                href="#"
                rel="noreferrer"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                activeclassname="active"
                class="nav-links"
                href="#"
                rel="noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-icon inline-flex h-5 w-7 p-2 " onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function NavBar() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <hr />
        <div className="pages">
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
