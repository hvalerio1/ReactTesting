import stylefondo from "../components/css/fondo.module.css";
import {NavLink} from "react-router-dom";
export function Fondo(){

    return(

        <div className={stylefondo.fondo}>
            <h1>Innova los espacios de tu hogar</h1>
            <p>Con Nuestos Productos</p>
            <NavLink to="/ListaProductos">
            <button>Ver Productos</button>
            </NavLink>
            
        </div>
    );
}
