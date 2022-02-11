import './NavBar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/Departamento"} className="navlink">
                    Asignaciones
                </NavLink>

            </li>
            <li>
                <NavLink to={"/Asignaciones"} className="navlink">
                    Departamentos
                </NavLink>
            </li>
            <li>
                <NavLink to={"/Empleados"} className="navlink">
                    Empleados
                </NavLink>
            </li>
        </ul>

    );
}
