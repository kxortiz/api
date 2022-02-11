import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdEmpleado, updateEmpleado } from '../service/EmpleadoService'


function EmpleadosPage() {

    const [empleado, setEmpleado] = useState({ nombre: '', apellido: '', cedula: '', direccion: '', edad: '', telefono: '' });

    const onSubmit = (event) => {
        event.preventDefault();
        updateEmpleado(empleado);
    }
    const onChange = (event) => {
        if (event.target.name === 'nombre')
            setEmpleado({ ...empleado, nombre: event.target.value })
        if (event.target.name === 'apellido')
            setEmpleado({ ...empleado, apellido: event.target.value })
        if (event.target.name === 'cedula')
            setEmpleado({ ...empleado, cedula: event.target.value })
        if (event.target.name === 'direccion')
            setEmpleado({ ...empleado, direccion: event.target.value })
        if (event.target.name === 'edad')
            setEmpleado({ ...empleado, edad: event.target.value })
            if (event.target.name === 'telefono')
            setEmpleado({ ...empleado, telefono: event.target.value })
    }

    useEffect(() => {
        findByIdEmpleado(empleadoId).then(data => {
            setEmpleado(data);
        }
        );
    }, [empleadoId]);

    return (
        <div className="boxUpdate">
            <form onSubmit={onSubmit} className="boxFormUpdate">
                <h2>ACTUALIZAR Empleado</h2>

                <input
                    className="formUpdateInput"
                    name="nombre"
                    placeholder="Nombre"
                    value={empleado.nombre}
                    onChange={onChange}

                />

                <input
                    className="formUpdateInput"
                    name="apellido"
                    placeholder="Apellido"
                    value={empleado.apellido}
                    onChange={onChange}
                />

                <input
                    className="formUpdateInput"
                    placeholder="Cedula"
                    name="cedula"
                    value={empleado.cedula}
                    onChange={onChange}
                />

                 <input
                    className="formUpdateInput"
                    placeholder="Direccion"
                    name="direccion"
                    value={empleado.direccion}
                    onChange={onChange}
                />

                 <input
                    className="formUpdateInput"
                    placeholder="Edad"
                    name="edad"
                    value={empleado.edad}
                    onChange={onChange}
                />

                 <input
                    className="formUpdateInput"
                    placeholder="Telefono"
                    name="telefono"
                    value={empleado.telefono}
                    onChange={onChange}
                />


                <button type="submit" className="formUpdateBtn">Guardar</button>

            </form>

        </div>
    );
}

export default EmpleadosPage;