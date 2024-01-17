import { NavLink } from "react-router-dom";
import "./Footer.css"

export const Footer = () =>
    <footer>
        <div className="footer-container">

            <section>
                <h4>Institucional</h4>
                <p><NavLink to="/nosotros">Quienes somos </NavLink></p>
            </section>

            <section>
                <h4>Atención al cliente</h4>
                <p> <NavLink to="/contacto">Contactanos </NavLink></p>
                <p> <NavLink to="/contacto">Preguntas frecuentes </NavLink></p>
            </section>

        </div>
        <h6 className="pb-2">Copyright 2023</h6>
    </footer>