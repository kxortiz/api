import React, {useState, useEffect} from "react";
import Empleados from './Empleados';
import Empleado from './Empleado'
import { getListEmpleados } from '../service/EmpleadoService'
import { Link } from "react-router-dom";

function EmpleadosPage () {
    
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {

        getListEmpleados().then(data => {
            setEmpleados(data);
        });
        
    }, []);

    return (
        <div>
            
            <Link to ='./createempleados'>
                Crear Empleado
            </Link>
            <h2>LISTA DE EmpleadoS</h2>
            <Empleados>
                {
                    empleados.map(item =>
                        <Empleado
                        key={item.id}
                        itemEmpleado={item} />

                    )
                }
            </Empleados>
        </div>
    );
}

export default EmpleadosPage