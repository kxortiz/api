function asignacion(props) {
  return (
    <table>
      <thead >
        <tr>
          <th>fecha </th>
          <th>observacion </th>
        </tr>
      </thead>
      <tbody>

        {props.children}

      </tbody>
    </table>
  );
}

export default asignacion;
