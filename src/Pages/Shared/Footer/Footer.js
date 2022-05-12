import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" bg-footer bg-white text-accent bg-cover mb-20">
      <footer class="footer p-20 lg:pl-60 content-center">
        <div>
          <span class="footer-title">SERVICES</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="footer-title">ORAL HEALTH</span>
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teeth Whitening</a>
        </div>
        <div>
          <span class="footer-title">OUR ADDRESS</span>
          <a class="link link-hover">New York - 101010 Hudson</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="mt-20 text-center">
        <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
      </div>
    </div>
  );
};

export default Footer;
