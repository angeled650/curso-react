import React, { useState } from "react";

import CrudRow from "./CrudTableRow";

function CrudTable({ data, setDataToEdit, deleteData }) {
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
            data.map((el) => (
              <CrudRow
                key={el.id}
                data={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
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
