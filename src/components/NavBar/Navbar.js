import React, { useState } from "react";
import "../css/nav.css";
import logo from "../Imagenes/logo.png";
import {NavLink} from "react-router-dom";
import {
  Container,
  LogoContainer,
  Menu,
  MobilIcon,
  Wrapper,
} from "./Narbar.elements";
import { IconContext } from "react-icons";
import {
  FaBars,
  FaHome,
  FaTimes,
  FaProductHunt,
  FaBlog,
  FaPhone,
  FaUser
} from "react-icons/fa";


const Navbar = () => {
  const [showMobilMenu, setShowMobilMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>   
          <p>Cortinas Vicky</p>   
          <img src={logo} alt="logo"/> 

          </LogoContainer>
          <MobilIcon onClick={() => setShowMobilMenu(!showMobilMenu)}>
              {
                  showMobilMenu ? <FaTimes/> : <FaBars/>
              }
          </MobilIcon>
          <Menu open={showMobilMenu}>

          <NavLink className="menu" to="/">
                <button>
                  <div>
                    <FaHome/>
                  </div>
                Inicio
               </button> 
              </NavLink>

              <NavLink className="menu" to="/Productos">
                <button>
                <div>
                    <FaProductHunt/>
                  </div>
                Productos
               </button> 
              </NavLink>

              <NavLink className="menu" to="/Blog">
                <button>
                <div>
                    <FaBlog/>
                  </div>
                Blog
               </button> 
              </NavLink>

              <NavLink className="menu" to="/Contacto">
                <div>
                <button>
                <div>
                    <FaPhone/>
                  </div>
                Contactenos
               </button> 
                </div>      
              </NavLink>

              <NavLink className="menu" to="/Login">
                <div>
                <button>
                <div>
                    <FaUser/>
                  </div>
                Login
               </button> 
                </div>      
              </NavLink>


          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
