import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer class="navbar  d-flex flex-column bg-secondary bg-opacity-10">
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
    
    </div>
      <div>
        <p>Copyright © 2022 - All right reserved by Laura Ruiz</p>
      </div>
    </footer>
  );
}
