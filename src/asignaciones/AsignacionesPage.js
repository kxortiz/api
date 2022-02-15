import React, {useState, useEffect} from "react";
import Asignaciones from './Asignaciones';
import Asignacion from './Asignacion'
import { getListAsignaciones } from '../service/AsignacionService'
import { Link } from "react-router-dom";


function AsignacionesPage () {
    
    const [asignaciones, setAsignaciones] = useState([]);

    useEffect(() => {

        getListAsignaciones().then(data => {
            setAsignaciones(data);
        }
        ).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="asignation">
            
            <Link to ='./createasignacion'>
                Crear Asignacion
            </Link>
            <h2>LISTA DE Asignaciones</h2>
            <Asignaciones>
                {
                    asignaciones.map(item =>
                        <Asignacion
                        key={item.id}
                        itemAsignacion={item} />

                    )
                }
            </Asignaciones>
        </div>
    );
}

export default AsignacionesPage
