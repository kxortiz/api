const urlCrud = 'http://localhost:8080';

const getListAsignaciones = async () => {
    const response = await fetch(`${urlCrud}/asignacion`);
    const data = await response.json();
    return data;
}

const findByIdAsignacion = async (asignacionId) => {
    const response = await fetch(`${urlCrud}/asignacion/${asignacionId}`);
    const data = await response.json();
    return data;
}


const createAsignacion = async (asignacion) => {
    const urldos="http://localhost:8081/consulta"
    console.log(urldos)

    const resp = await fetch(urldos, {
        method: 'POST',
        body: JSON.stringify(consulta),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateAsignacion = async (asignacion) => {

    const resp = await fetch(`${urlCrud}/asignacion`, {
        method: 'PUT',
        body: JSON.stringify(asignacion),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListAsignaciones,
    createAsignacion,
    updateAsignacion,
    findByIdAsignacion

}