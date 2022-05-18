import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> &copy; 2022 Electronix. All rights reserved</p>
      <p className="icons">
        <Link href="https://www.instagram.com/">
          <AiFillInstagram />
        </Link>
        <Link href="https://twitter.com/">
          <AiOutlineTwitter />
        </Link>
        <Link href="https://www.facebook.com/">
          <AiFillFacebook />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
