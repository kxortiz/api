const urlCrud = 'http://localhost:8081';

const getListEmpleados = async () => {
    const response = await fetch(`${urlCrud}/empleados`);
    const data = await response.json();
    return data;
}

const findByIdEmpleado = async (empleadoId) => {
    const response = await fetch(`${urlCrud}/empleados/${empleadoId}`);
    const data = await response.json();
    return data;
}


const createEmpleado = async (empleado) => {
    const urldos="http://localhost:8081/empleados"
    console.log(urldos)

    const resp = await fetch(urldos, {
        method: 'POST',
        body: JSON.stringify(empleados),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateEmpleado = async (empleado) => {

    const resp = await fetch(`${urlCrud}/empleados`, {
        method: 'PUT',
        body: JSON.stringify(consulta),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListEmpleados,
    createEmpleado,
    updateEmpleado,
    findByIdEmpleado

}