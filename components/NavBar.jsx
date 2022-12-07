import React from "react";
import Link from "next/link";

const NavBar = (props) => {
  const { books } = props;
  return (
    <div className="navbar">
      <Link href={"/"}>
        <div className="navbar-icon">
          <img src="/assets/ben-icon.png" />
        </div>
        <div className="logo">PQs Books in the Cloud!</div>
      </Link>
    </div>
  );
};

export default NavBar;
