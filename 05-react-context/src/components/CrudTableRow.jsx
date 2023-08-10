import { useContext } from "react";
import CrudContext from "../context/CrudContex";

function CrudRow({ data }) {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
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
