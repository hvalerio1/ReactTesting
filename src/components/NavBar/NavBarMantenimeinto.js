import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navMantenimiento.css";

const NavbarM = () => {
  return (
    <nav className="navM" role="navigation" aria-label="main navigation">
      <div className="navbarM-Logo">
        <img alt="" src="#" />
      </div>

      <div id="navbarMant" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            activeClassName="is-active"
            className="navbar-item"
            to="/Agregar"
          >
            Agregar Productos
          </NavLink>

          <NavLink
            activeClassName="is-active"
            className="navbar-item"
            to="/ListaProductos"
          >
            Lista Productos
          </NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink to="/">
              <button>Inicio</button>
              </NavLink>    
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarM;
