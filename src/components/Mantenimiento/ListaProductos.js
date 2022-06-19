import React from "react";
import NavbarM from "../NavBar/NavBarMantenimeinto";
import "../css/listaP.css";

class ListaProductos extends React.Component {
  render() {
    return (
      <div className="Contenedorlp">
        <NavbarM />
        <div className="ContenedorT">
          <div className="column">
            <h1 className="Titulo">Productos</h1>
          </div>
          <div className="TablaC">
            <table className="table">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Imagen</th>
                  <th>Editar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListaProductos;
