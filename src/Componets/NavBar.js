import './NavBar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/departamento"} className="navlink">
                    Departamentos
                </NavLink>

            </li>
            <li>
                <NavLink to={"/asignaciones"} className="navlink">
                    Asignaciones
                </NavLink>
            </li>
            <li>
                <NavLink to={"/empleados"} className="navlink">
                    Empleados
                </NavLink>
            </li>
        </ul>

    );
}
