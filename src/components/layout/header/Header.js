import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/Header/Header.css";
import imgEspana from "../../../assets/icon/espana.png"
import imgCatalonia from "../../../assets/icon/catalonia.png"
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="collapse navbar-collapse" href="/">
          Gemma Reguant
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/biography">
                Biografia
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Cursos
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="#">
                Recitales
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Trayectoria
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" href="#">
                    Maestra
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Actriz
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Investigadora
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" href="#">
                    Directora
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/publications">
                Publicaciones
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/biography">
                Blog
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Galeria
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/gallery">
                    Fotos
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="#">
                    Videos
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/biography">
                Contacto
              </Link>
            </li>
           
          </ul>
        </div>
        <div>
              <img src={imgEspana} alt="bandera españa" style={{width: "25px"}}/>
              <img src={imgCatalonia} alt="bandera cataluña" style={{width: "25px", height: "18px"}}/>
            </div>
      </div>
    </nav>
  );
}
