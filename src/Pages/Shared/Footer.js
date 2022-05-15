import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" bg-footer bg-white text-accent bg-cover mb-20">
      <footer className="footer p-20 lg:pl-60 content-center">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link to="" className="link link-hover">Emergency Checkup</Link>
          <Link to="" className="link link-hover">Monthly Checkup</Link>
          <Link to="" className="link link-hover">Weekly Checkup</Link>
          <Link to="" className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link to="" className="link link-hover">Fluoride Treatment</Link>
          <Link to="" className="link link-hover">Cavity Filling</Link>
          <Link to="" className="link link-hover">Teeth Whitening</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link to="" className="link link-hover">New York - 101010 Hudson</Link>
          <Link to="" className="link link-hover">Privacy policy</Link>
          <Link to="" className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className="mt-20 text-center">
        <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
      </div>
    </div>
  );
};

export default Footer;
