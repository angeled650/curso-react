import React, { useState } from "react";

function CrudRow({ data, setDataToEdit, deleteData }) {
  let { persona, arcana, id } = data;
  return (
    <>
      <tr>
        <td>{persona}</td>
        <td>{arcana}</td>
        <td>
          <button onClick={() => setDataToEdit(data)}>Editar</button>
          <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
}

export default CrudRow;
