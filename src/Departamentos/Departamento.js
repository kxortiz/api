import { Link } from 'react-router-dom';


function Departamento (props){
    console.log(props)
    return(
        <tr>
            <td> {props.itemDepartamento.descripcion} </td>
            <td><Link to={`/updateDepartamento/${props.itemDepartamento.id}`}>Edit</Link> </td>
        </tr>
    );
    
}
export default Departamento;