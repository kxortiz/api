import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdDepartamento,updateDepartamento } from '../service/DepartamentoService'
import "./Departamento.css"



function DepartamentosPage() {
  
  const { departamentoId } = useParams();
  const [departamento, setDepartamento] = useState({descripcion:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateDepartamento(departamento);
  }
  const onChange = (event) =>{
    if(event.target.name==='descripcion')
      setDepartamento({...departamento,id:event.target.value})    
  }

  useEffect(() => {    
    findByIdDepartamento(departamentoId).then(data => {
      setDepartamento(data);  
    }
    );
  }, [departamentoId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>ACTUALIZAR Departamento</h2>
  
          <input 
          className="formUpdateInput"
            name="descripcion"
            placeholder="descripcion" 
            value={descripcion.id}
            onChange={onChange}
   
          />
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default DepartamentosPage;
