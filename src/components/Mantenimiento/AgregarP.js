import React from "react";
import { NavLink } from "react-router-dom";
import NavbarM from "../NavBar/NavBarMantenimeinto";
import "../css/agregarP.css";

class Agregar extends React.Component {
  render() {
    return (
      <div className="ContenedorA">
        <NavbarM />
        <div className="AgregarC">
          <h1 className="titulo">Agregar Productos</h1>
          <div className="inputs">

            <label className="label" htmlFor="nombre">
              Nombre del Producto:
            </label>
            <input
              autoFocus
              required
              placeholder="Nombre"
              type="text"
              id="nombre"
              className="input"
            />
          
          <label className="label" htmlFor="precio">
            Precio:
          </label>
          <input
            required
            placeholder="Precio"
            type="number"
            id="precio"
            className="input"
          />

          <label className="label" htmlFor="Descripción">
            Descripción:
          </label>
          <input
            required
            placeholder="Descripción"
            type="text"
            id="descripcion"
            className="input"
          />

          <label className="label" htmlFor="Imagen">
            Imagen:
          </label>
          <input required placeholder="Imagen" type="file" id="imagen" />
          
          <br/>
          <button className="guardar">Guardar</button>
          <NavLink to="/ListaProductos">
          <button className="volver">Volver</button>
          </NavLink>         
          </div>
        </div>
      </div>
    );
  }
}

export default Agregar;
