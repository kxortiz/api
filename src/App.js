import DepartamentosPage from './Departamentos/DepartamentosPage';
import DepartamentoCreate from './Departamentos/DepartamentoCreate';
import DepartamentoUpdate from './Departamentos/DepartamentoUpdate';
import AsignacionesPage from './Asignaciones/AsignacionesPage';
import AsignacionCreate from './Asignaciones/AsignacionCreate';
import AsignacionUpdate from './Asignaciones/AsignacionUpdate';
import EmpleadosPage from './Empleados/EmpleadosPage';
import EmpleadosCreate from './Empleados/EmpleadoCreate';
import EmpleadosUpdate from './Empleados/EmpleadoUpdate';
import React from 'react';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from "./componets/NavBar";
import './App.css';




function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>        
      

        <Route path="/asignaciones" element={<AsignacionesPage />} />
        <Route path="/asignaciones/createasignacion" element={<AsignacionCreate />} /> 
        <Route path="/updateasignacion/:asignacionId" element={<AsignacionUpdate />} />

        <Route path="/" element={<DepartamentosPage />} />

        <Route path="/departamento" element={<DepartamentosPage />} />
        <Route path="/departamento/createdepartamento" element={<DepartamentoCreate />} /> 
        <Route path="/updatedepartamento/:departamentoId" element={<DepartamentoUpdate />} />
        

        <Route path="/empleados" element={<EmpleadosPage />} />
        <Route path="/empleados/createempleados" element={<EmpleadosCreate />} /> 
        <Route path="/updateempleado/:empleadoId" element={<EmpleadosUpdate />} />
          

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

