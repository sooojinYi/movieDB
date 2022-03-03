import React from "react";
import { Link } from "react-router-dom";
import "../style/header.css";
import { BiSearchAlt } from "react-icons/bi";

function Header(props) {
  return (
    <div>
      <nav id="main-nav">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <img src="/img/logo.png" alt="logo" style={{ width: "250px" }} />
        </Link>
        <ul>
          <Link to={"/watchlist"} style={{ textDecoration: "none" }}>
            <li>Watchlist</li>
          </Link>
          <Link to={"/watched"} style={{ textDecoration: "none" }}>
            <li>Watched</li>
          </Link>
          <Link to={"/add"} style={{ textDecoration: "none" }}>
            <li>
              <BiSearchAlt style={{ fontSize: "35px" }} />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
