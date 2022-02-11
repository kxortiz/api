import React, {useState, useEffect} from "react";
import Departamentos from '../Departamentos';
import './Departamento'
import { getListDepartamentos } from '../service/DepartamentoService'
import { Link } from "react-router-dom";


function DepartamentosPage () {
    
    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() => {

        getListDepartamentos().then(data => {
            setDepartamentos(data);
        }
        );
    }, []);

    return (
        <div>
            
            <Link to ='./createdepartamento'>
                Crear Departamento
            </Link>
            <h2>LISTA DE DepartamentoS</h2>
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