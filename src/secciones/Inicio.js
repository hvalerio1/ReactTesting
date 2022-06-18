import Logo from '../img/logo.png';
import abc from '../Listener.js';
import Video from '../videos/video.mp4';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import estilo from './styles/styles_inicio.css';


const Init = () => {
    return (
    <div class="container">  
    
            <nav class="nav-main">
                    <img src={Logo} alt="Logo" class="nav-brand"/>
                    <ul class="nav-menu"> 
                        <li>
                        <a href="./Secciones/Home.php">
                               <button type="submit" name="accion" value="home" class="btn">
                                   Home
                                </button>
                                </a>
                        </li>
    
                        <li>
                        <a href="./Secciones/Galeria.php">
                                <button type="submit" name="accion" value="galeria" class="btn btn-primary">
                                    Galeria
                                 </button>
                                 </a>
                        </li>
    
                        <li>
                            <a href="./Secciones/Reglas.php">
                                <button type="submit" name="accion" value="reglas" class="btn">
                                    Reglas del voleyball
                                 </button>
                            </a>
                        </li>
    
                        <li>
                        <a href="./Secciones/PreguntasFrecuentes.php">
                                <button type="submit" name="accion" value="preguntas" class="btn">
                                    Preguntas frecuentes
                                 </button>
                            </a>
                        </li>
    
                        <li>
                        <a href="./Secciones/Contactenos.php">
                                <button type="submit" name="accion" value="contactenos" class="btn">
                                    Contactenos
                                 </button>
                            </a>
                        </li>
                    </ul>
                    
            </nav>

        
            <div class="menu-btn" id="btn">
            
            </div>


        <video src={Video}  muted autoplay controls loop >
        </video>


        

        <div class="news-cards">
            <div>
                <img src={img1} class="btn" alt="noticia 1" />
                <h3>Titulo aqui a</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quidem repudiandae. Iure natus, illum cupiditate dignissimos molestias magnam recusandae, explicabo quas consectetur ipsam unde, quia labore incidunt repudiandae officiis?</p>
            <a href="#" class="btn">Leer mas...<i class="fas fa-angle-double-right"></i></a>
            </div>

            <div>
                <img src={img2} alt="noticia 1" /> 
                <h3>Titulo aqui a</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quidem repudiandae. Iure natus, illum cupiditate dignissimos molestias magnam recusandae, explicabo quas consectetur ipsam unde, quia labore incidunt repudiandae officiis?</p>
            <a href="#" class="btn">Leer mas...<i class="fas fa-angle-double-right"></i></a>
            </div>

            <div>
                <img src={img3} alt="noticia 1" /> 
                <h3>Titulo aqui a</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quidem repudiandae. Iure natus, illum cupiditate dignissimos molestias magnam recusandae, explicabo quas consectetur ipsam unde, quia labore incidunt repudiandae officiis?</p>
            <a href="#" class="btn">Leer mas...<i class="fas fa-angle-double-right"></i></a>
            </div>

            <div>
                <img src={img4} alt="noticia 1" /> 
                <h3>Titulo aqui a</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quidem repudiandae. Iure natus, illum cupiditate dignissimos molestias magnam recusandae, explicabo quas consectetur ipsam unde, quia labore incidunt repudiandae officiis?</p>
            <a href="#" class="btn">Leer mas...<i class="fas fa-angle-double-right"></i></a>
            </div>
        </div>

        <section class="cards-banner-one">
            <div class="content">
                <h2>
                    Titulo por accaaa
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, illum fugit at laboriosam omnis recusandae nam? Nostrum accusantium ipsum corporis nisi odio architecto? Accusamus numquam ad non neque, perspiciatis tempore.
                </p>
                <a href="#" class="btn">Leer mas <i class="fas fa-angle-double-right"></i></a>
            </div>
        </section>

        <div class="news-cards">
            <div>
                <img src={img1} class="btn" alt="noticia 1" />
                <h3>Titulo aqui a</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quidem repudiandae. Iure natus, illum cupiditate dignissimos molestias magnam recusandae, explicabo quas consectetur ipsam unde, quia labore incidunt repudiandae officiis?</p>
            <a href="#" class="btn">Leer mas...<i class="fas fa-angle-double-right"></i></a>
            </div>

            <div>
                <img src={img2} alt="noticia 1" /> 
                <h3>Titulo aqui a</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quidem repudiandae. Iure natus, illum cupiditate dignissimos molestias magnam recusandae, explicabo quas consectetur ipsam unde, quia labore incidunt repudiandae officiis?</p>
            <a href="#" class="btn">Leer mas...<i class="fas fa-angle-double-right"></i></a>
            </div>

            <div>
                <img src={img3} alt="noticia 1" /> 
                <h3>Titulo aqui a</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quidem repudiandae. Iure natus, illum cupiditate dignissimos molestias magnam recusandae, explicabo quas consectetur ipsam unde, quia labore incidunt repudiandae officiis?</p>
            <a href="#" class="btn">Leer mas...<i class="fas fa-angle-double-right"></i></a>
            </div>

            <div>
                <img src={img4} alt="noticia 1" /> 
                <h3>Titulo aqui a</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sed quidem repudiandae. Iure natus, illum cupiditate dignissimos molestias magnam recusandae, explicabo quas consectetur ipsam unde, quia labore incidunt repudiandae officiis?</p>
            <a href="#" class="btn">Leer mas...<i class="fas fa-angle-double-right"></i></a>
            </div>
        </div>


        <section class="cards-banner-two">
            <div class="content">
                <h2>
                    Titulo por allaaaa
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, illum fugit at laboriosam omnis recusandae nam? Nostrum accusantium ipsum corporis nisi odio architecto? Accusamus numquam ad non neque, perspiciatis tempore.
                </p>
                <a href="#" class="btn">Leer mas <i class="fas fa-angle-double-right"></i></a>
            </div>
        </section>


        <section class="redessociales">
            <p>
                Siguenos en nuestras distintas redes sociales
            </p>
            <div class="links">
                <a href="#">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="#">
                    <i class="fab fa-discord"></i>
                </a>
                
            </div>
        </section>



    <div class="footer-links">
        <div class="footer-container">

            <ul>
                <li>
                    <a href="#">
                        <h3>
                            Titulos
                        </h3>
                    </a>
                </li>
                <li>
                    <a class="#" >Estamos ubicados</a>
                </li>
                <li>
                    <a class="#" >Educacion</a>
                </li>
                <li>
                    <a class="#" >Ayuda</a>
                </li>
                <li>
                    <a class="#"> Por aquí</a>
                </li>
             </ul>



             <ul>
                <li>
                    <a href="#">
                        <h3>
                            Empresa
                        </h3>
                    </a>
                </li>
                <li>
                    <a class="#" >Estamos h</a>
                </li>
                <li>
                    <a class="#" >ardilla</a>
                </li>
                <li>
                    <a class="#" >gru</a>
                </li>
                <li>
                    <a class="#" >Por alla</a>
                </li>
             </ul>



             <ul>
                <li>
                    <a href="#">
                        <h3>
                            Producto
                        </h3>
                    </a>
                </li>
                <li>
                    <a class="#" >botellas</a>
                </li>
                <li>
                    <a class="#" >uniformes</a>
                </li>
                <li>
                    <a class="#" >balones</a>
                </li>
                <li>
                    <a class="#" >complementos</a>
                </li>
             </ul>


             <ul>
                <li>
                    <a href="#">
                        <h3>
                            Soluciones
                        </h3>
                    </a>
                </li>
                <li>
                    <a class="#" >Estrategias</a>
                </li>
                <li>
                    <a class="#" >reglamento</a>
                </li>
                <li>
                    <a class="#" >canchas</a>
                </li>
                <li>
                    <a class="#" >ligas</a>
                </li>
             </ul>

        </div>
    </div>

    <footer class="footer">
        <h3>Voleibol NOMBRE MARCA Copyright</h3>
    </footer>

   <script src={abc}></script>


    </div>
    

 );

}

export default Init;
       