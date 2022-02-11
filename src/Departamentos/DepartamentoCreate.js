import React, { useState } from "react";
import { createDepartamento } from '../service/DepartamentoService';



function DepartamentoCreate() {

   
    const [descripcion, setDescripcion] = useState('');
    

    const onSubmit = (event) => {
        event.preventDefault();
        const Departamentos = {
            
            descripcion: descripcion,
            
        }
        createDepartamento(Departamentos)
    }


    const onChange = (event) => {
       
        if (event.target.name === 'descripcion')
            setDescripcion(event.target.value)
    }

    return (
        <div>
            <h2>CREAR NUEVA Departamento</h2>
            <form onSubmit={onSubmit} >
                
                <label>
                    Descripcion:
                    <input name="descripcion" 
                    value={ descripcion }
                    onChange={onChange} 
                     />
                </label>
             

                <button type="submit">Guardar</button>
            </form>
        </div >
    );
}

export default DepartamentoCreate;

