import { Link } from 'react-router-dom';


function Empleado (props){
    console.log(props)
    return(
        <tr>
            <td> {props.itemEmpleado.nombre} </td>
            <td> {props.itemEmpleado.apellido} </td>
            <td> {props.itemEmpleado.cedula} </td>
            <td> {props.itemEmpleado.direccion} </td>
            <td> {props.itemEmpleado.edad} </td>
            <td> {props.itemEmpleado.telefono} </td>
            <td><Link to={`/updateEmpleado/${props.itemEmpleado.id}`}>Edit</Link> </td>
        </tr>
    );
    
}
export default Empleado;