import React, { useState } from "react";
import { createAsignacion } from '../service/AsignacionService'



function AsignacionCreate() {

   
    const [fecha, setFecha] = useState('');
    const [observacion, setObservacion] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const Asignaciones = {
            
            fecha: fecha,
            observacion: observacion,
        }
        createAsignacion(Asignaciones)
    }


    const onChange = (event) => {
       
        if (event.target.name === 'fecha')
            setFecha(event.target.value)

        if (event.target.name === 'observacion')
            setObservacion(event.target.value)
    }

    return (
        <div>
            <h2>CREAR NUEVA Asignacion</h2>
            <form onSubmit={onSubmit} >
                
                <label>
                    fecha:
                    <input name="fecha" 
                    value={ fecha}
                    onChange={onChange} 
                     />
                </label>
                <label>
                    Observacion:
                    <input name="observacion" 
                    value={ observacion}
                    onChange={onChange}
                     />
                    
                </label>

                <button type="submit">Guardar</button>
            </form>
        </div >
    );
}

export default AsignacionCreate;
