import { Link } from 'react-router-dom';


function Empleado (props){
    console.log(props)
    return(
        <tr>
            <td> {props.itemEmpleado.descripcion} </td>
            <td><Link to={`/updateEmpleado/${props.itemEmpleado.id}`}>Edit</Link> </td>
        </tr>
    );
    
}
export default Empleado;