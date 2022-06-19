import React from "react";
import Navbar from "../NavBar/Navbar";
import "../css/inicio.css";
import { Fondo } from "../Fondo";


class Inicio extends React.Component{
    render(){
        return(
            <div className="contenedor">
                <Navbar/> 
                <Fondo/>   
            </div>
        );
    }

}

export default Inicio;