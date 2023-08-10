import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrudRow({ data, setDataToEdit, deleteData }) {
  let { persona, arcana, id } = data;
  const navigate = useNavigate();

  const handleEdit = () => {
    setDataToEdit(data);
    navigate(`/persona/editar/${id}`);
  };

  return (
    <>
      <tr>
        <td>{persona}</td>
        <td>{arcana}</td>
        <td>
          <button onClick={() => handleEdit()}>Editar</button>
          <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
}

export default CrudRow;
