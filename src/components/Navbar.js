import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () =>

  <nav className="navbar navbar-expand-lg ">


    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto ">

        <li className="nav-item">
          <NavLink className="navlink nav-link" to="/inicio">Inicio <span className="sr-only">(current)</span></NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="navlink nav-link" to="/alta">Alta </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="navlink nav-link" to="/carrito">Carrito</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="navlink nav-link" to="/contacto">Contacto</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="navlink nav-link" to="/nosotros">Nosotros</NavLink>
        </li>

      </ul>

      <form className="form-inline my-2 my-lg-0 me-3">
        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>

    </div>

  </nav>