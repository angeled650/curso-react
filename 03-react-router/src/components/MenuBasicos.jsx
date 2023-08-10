import { Link, NavLink, Outlet } from "react-router-dom";

const MenuBasicos = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <nav>
        <ol>
          <li>
            <span>
              Menú con etiquetas <i>a</i> (no recomendado porque recarga la
              página)
            </span>
            <a href="/">Home</a>
            <a href="/acerca">Acerca</a>
            <a href="/contacto">Contacto</a>
            <a href="/error-ruta">Error 404</a>
          </li>
          <li>
            <span>
              Menú con el componente <i>Link</i> de React Router
            </span>
            <Link to="/">Home</Link>
            <Link to="/acerca">Acerca</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/error-ruta">Error 404</Link>
          </li>
          <li>
            <span>
              Menú con el componente <i>NavLink</i> de React Router
            </span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/acerca">Acerca</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <NavLink to="/error-ruta">Error 404</NavLink>
          </li>
          <li>
            <span>Paso de parámetros:</span>
            <Link to="/usuario/angeled650">angeled650</Link>
            <Link to="/usuario/jojo2702">jojo2702</Link>
          </li>
          <li>
            <span>Parámetros de Consulta:</span>
            <Link to="/productos?inicio=1&fin=20">Productos</Link>
          </li>
          <li>
            <span>Redirecciones:</span>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <span>Rutas Anidadas:</span>
            <Link to="/react">React</Link>
          </li>
          <li>
            <span>Rutas Privadas:</span>
            <Link to="/login">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
};

export default MenuBasicos;
