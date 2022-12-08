import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = (props) => {
  const { books } = props;
  return (
    <div className="navbar">
      <Link href={"/"}>
        <div className="navbar-icon">
          <Image
            src="/assets/ben-icon.png"
            alt="a ben icon"
            height={30}
            width={30}
          />
        </div>
        <div className="logo">PQs Books in the Cloud!</div>
      </Link>
    </div>
  );
};

export default NavBar;
