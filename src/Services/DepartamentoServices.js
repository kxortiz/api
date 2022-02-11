const urlCrud = 'http://localhost:8081';

const getListDepartamento = async () => {
    const response = await fetch(`${urlCrud}/departamento`);
    const data = await response.json();
    return data;
}

const findByIdDepartamento = async (departamentoId) => {
    const response = await fetch(`${urlCrud}/departamento/${departamentoId}`);
    const data = await response.json();
    return data;
}


const createDepartamento = async (departamento) => {
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


const updateDepartamento = async (Departamento) => {

    const resp = await fetch(`${urlCrud}/departamento`, {
        method: 'PUT',
        body: JSON.stringify(consulta),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListDepartamento,
    createDepartamento,
    updateDepartamento,
    findByIdDepartamento

}