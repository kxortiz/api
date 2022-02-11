
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdAsignacion,updateAsignacion } from '../service/AsignacionService'


function AsignacionesPage() {
  
  const { asignacionId } = useParams();
  const [asignacion, setAsignacion] = useState({fecha:'',observacion:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateAsignacion(asignacion);
  }
  const onChange = (event) =>{ 
    if(event.target.name==='fecha')    
      setAsignacion({...asignacion,fecha:event.target.value})
    if(event.target.name==='observacion')
      setAsignacion({...asignacion,observacion:event.target.value})
  }

  useEffect(() => {    
    findByIdAsignacion(asignacionId).then(data => {
      setAsignacion(data);  
    }
    );
  }, [asignacionId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actualizar Asignacion</h2>
  
          <input 
          className="formUpdateInput"
            name="fecha"
            placeholder="Fecha" 
            value={asignacion.fecha}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
            name="observacion"
            placeholder="Observacion"            
            value={asignacion.observacion}
            onChange={onChange}
          />
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default AsignacionesPage;