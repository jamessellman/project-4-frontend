import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav>
            <Link to="/">
              Home
            </Link>
            <Link to="/players">
              Players
            </Link>
        </nav>
      </header>
    </>
  );
}

export default Navbar;