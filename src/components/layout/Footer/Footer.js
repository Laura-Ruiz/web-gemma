import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../../socialLinks/SocialLinks"
export default function Footer() {
  return (
    <footer class="navbar fixed-bottom d-flex flex-column bg-secondary bg-opacity-10">
      <div class="d-flex gap-3">
        <div>
        <Link to="/Biography">
          Sobre mí
        </Link>
        <Link to="/Contact" >
          Contacta
        </Link>
      </div>
      <div>
        <label>Newsletter</label>
        <input type="text" placeholder="Email"/>
        <button type="submit">Submit</button>
      </div>
    <SocialLinks/>
    </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Laura Ruiz</p>
      </div>
    </footer>
  );
}
