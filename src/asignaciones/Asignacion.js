import { Link } from 'react-router-dom';
import './asignacion.css'

function Asignacion (props){
    console.log(props)
    return(
        <tr>
            
            <td> {props.itemAsignacion.fecha} </td>
            <td> {props.itemAsignacion.observacion} </td>
            <td><Link to={`/updateAsignacion/${props.itemAsignacion.id}`}>Edit</Link> </td>
        </tr>
    );
    
}
export default Asignacion;