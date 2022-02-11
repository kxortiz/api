function empleado(props) {
  return (
    <table>
      <thead >
        <tr>
          <th>NOMBRE </th>
          <th>APELLIDO </th>
          <th>CEDULA </th>
          <th>DIRECCION </th>
          <th>EDAD </th>
          <th>TELEFONO </th>
        </tr>
      </thead>
      <tbody>

        {props.children}

      </tbody>
    </table>
  );
}

export default empleado;
