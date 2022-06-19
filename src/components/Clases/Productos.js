import React from "react";
import container from "../css/producto.module.css";
import Navbar from "../NavBar/Navbar";



class Productos extends React.Component{
    render(){
        return(
            <div className={container.fondo}>
                <Navbar/>
            </div>
        );
    }

}

export default Productos;