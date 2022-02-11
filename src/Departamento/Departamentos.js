function departamentos(props) {
  return (
    <table>
      <thead >
        <tr>
         
          <th>descripcion </th>
        </tr>
      </thead>
      <tbody>

        {props.children}

      </tbody>
    </table>
  );
}

export default departamentos;
