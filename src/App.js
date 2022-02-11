import DepartamentosPage from './Departamento/DepartamentosPage';
import DepartamentoCreate from './Departamento/DepartamentoCreate';
import DepartamentoUpdate from './Departamento/DepartamentoUpdate';
import AsignacionesPage from '../asignaciones/AsignacionesPage';
import AsignacionCreate from '../asignaciones/AsignacionCreate';
import AsignacionUpdate from '../asignaciones/AsignacionUpdate';
import EmpleadosPage from './empleado/EmpleadoPage';
import EmpleadosCreate from './Pacientes/PacienteCreate';
import EmpleadosUpdate from './Pacientes/PacienteUpdate';

import Navbar from "./components/Navbar";

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>        
      
        <Route path="/asignaciones" element={<AsignacionesPage />} />
        <Route path="/asignaciones/createasignacion" element={<AsignacionCreate />} /> 
        <Route path="/updateasignacion/:asignacionId" element={<AsignacionUpdate />} />


        <Route path="/departamento" element={<DepartamentosPage />} />
        <Route path="/departamento/createdepartamento" element={<DepartamentoCreate />} /> 
        <Route path="/updatedepartamento/:departamentoId" element={<DepartamentoUpdate />} />
        

        <Route path="/empleados" element={<EmpleadosPage />} />
        <Route path="/empleados/createempleados" element={<EmpleadosCreate />} /> 
        <Route path="/updateempleados/:empleadosId" element={<EmpleadosUpdate />} />
          

      
      </Routes>
    </BrowserRouter>
  );
}

export default App;

