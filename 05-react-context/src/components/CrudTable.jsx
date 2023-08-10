import { useContext } from "react";
import CrudRow from "./CrudTableRow";
import CrudContext from "../context/CrudContex";

function CrudTable() {
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3>Datos</h3>
      <table>
        <thead>
          <tr>
            <td>Persona</td>
            <td>Arcana</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => <CrudRow key={el.id} data={el} />)
          ) : (
            <tr>
              <td colSpan={3}>Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;
