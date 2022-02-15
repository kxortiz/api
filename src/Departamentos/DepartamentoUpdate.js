import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdDepartamento,updateDepartamento } from '../service/DepartamentoService'
import "./Departamento.css"



function DepartamentosPage() {
  
  const { departamentoId } = useParams();
  const [departamento, setDepartamento] = useState(
    {
      id: 1,
      descripcion: ''
    }
  );

  const onSubmit = (event) => {
    event.preventDefault();
    updateDepartamento(departamento);
    //console.log(departamento)
    //console.log(event.target.value);
  }

  const onChange = (event) =>{
    event.preventDefault();
    if(event.target.name==='descripcion'){
      console.log(event.target.value);
      setDepartamento({
        ...departamento,
        descripcion: event.target.value
      })
    }
      // setDepartamento({
      //   ...departamento,
      //   id:event.target.value
      // }
    // )
  }

  useEffect(() => {    
    console.log(departamentoId);
    findByIdDepartamento(departamentoId).then(data => {
        setDepartamento(data);  
      }
    );
  }, [departamentoId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actualizar Departamento</h2>
  
          <input 
            className="formUpdateInput"
            name="descripcion"
            placeholder="descripcion" 
            value={departamento.descripcion}
            onChange={onChange}
   
          />
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default DepartamentosPage;
