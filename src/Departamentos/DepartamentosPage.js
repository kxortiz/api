import React, { useState, useEffect } from "react";
import Departamentos from './Departamentos';
import Departamento from './Departamento'
import { getListDepartamentos } from '../service/DepartamentoService'
import { Link } from "react-router-dom";


function DepartamentosPage() {

    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() => {

        getListDepartamentos().then(data => {
            setDepartamentos(data);
        }
        );
    }, []);

    return (
        <div className="pageup">
<div className="enlace">
            <Link to='./createdepartamento'>
                Crear Departamento
            </Link>
            </div>
            <h2>Lista de Departamentos</h2>
            <Departamentos>
                {
                    departamentos.map(item =>
                        <Departamento
                            key={item.id}
                            itemDepartamento={item} />

                    )
                }
                
            </Departamentos>
        </div>
    );
}

export default DepartamentosPage