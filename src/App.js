import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contacto from "./components/Clases/Contacto";
import Home from "./components/Clases/Inicio";
import Productos from "./components/Clases/Productos";
import Blog from "./components/Clases/Blog";
import Login from "./components/Clases/Login"
import Agregar from "./components/Mantenimiento/AgregarP";
import Mantenimiento from "./components/Clases/Mantenimiento";
import ListaProductos from "./components/Mantenimiento/ListaProductos";


function App() {
  return (
  
   <Router>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Productos" element={<Productos/>}/>
       <Route path="/Blog" element={<Blog/>}/>
       <Route path="/Contacto" element={<Contacto/>}/>
       <Route path="/Login" element={<Login/>}/>
       <Route path="/Agregar" element={<Agregar/>}/>
       <Route path="/ListaProductos" element={<ListaProductos/>}/>
       <Route path="/Mantenimiento" element={<Mantenimiento/>}/>
    </Routes>
  </Router>

  );
}

export default App;
