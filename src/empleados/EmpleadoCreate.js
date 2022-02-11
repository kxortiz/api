import React, { useState } from "react";
import { createEmpleado } from '../service/EmpleadoService'



function EmpleadoCreate() {


    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [direccion, setDireccion] = useState('');
    const [edad, setEdad] = useState('');
    const [telefono, setTelefono] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const Nombre = {

            nombre: nombre,
            apellido: apellido,
            cedula: cedula,
            direccion: direccion,
            edad: edad,
            telefono: telefono,

        }
        createEmpleado(Empleados)
    }


    const onChange = (event) => {

        if (event.target.name === 'nombre')
            setNombre(event.target.value)

        if (event.target.name === 'apellido')
            setApellido(event.target.value)

        if (event.target.name === 'cedula')
            setCedula(event.target.value)

        if (event.target.name === 'direccion')
            setDireccion(event.target.value)
            
        if (event.target.name === 'edad')
            setEdad(event.target.value)

        if (event.target.name === 'telefono')
            setTelefono(event.target.value)
    }

    return (
        <div>
            <h2>CREAR NUEVo Empleado</h2>
            <form onSubmit={onSubmit} >

                <label>
                    Nombre:
                    <input name="nombre"
                        value={nombre}
                        onChange={onChange}
                    />
                </label>
                <label>
                    Apellido:
                    <input name="apellido"
                        value={apellido}
                        onChange={onChange}
                    />

                </label>

                <label>
                    Cedula:
                    <input name="cedula"
                        value={cedula}
                        onChange={onChange}
                    />

                </label>

                <label>
                    Direccion:
                    <input name="direccion"
                        value={direccion}
                        onChange={onChange}
                    />

                </label>

                <label>
                    Edad:
                    <input name="edad"
                        value={edad}
                        onChange={onChange}
                    />

                </label>

                <label>
                    Telefono:
                    <input name="telefono"
                        value={telefono}
                        onChange={onChange}
                    />

                </label>

                <button type="submit">Guardar</button>
            </form>
        </div >
    );
}

export default EmpleadoCreate;

