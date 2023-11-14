import { Outlet, Link } from "react-router-dom";
import "./layout.css"

const Layout = ()=>{
    return(
        <>
        <nav className="nav-bar">

    <strong className="logo">PlayMusic</strong>

            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/listmusic">Lista de Musica</Link>
                </li>

                <li>
                    <Link to="/following">Seguir Musicos</Link>
                </li>
            </ul>

            <div className="btn">
           <button>Suscribirte</button>
           <button>Subir Contenido</button>
            </div>

           
        </nav>
         <Outlet />
         </>
    )
}

export default Layout;