import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const storage = window.localStorage;
const initialDB = [
  {
    id: 0,
    persona: "Orpheus",
    arcana: "Fool",
  },
  {
    id: 1,
    persona: "Thanatos",
    arcana: "Death",
  },
  {
    id: 2,
    persona: "Arsene",
    arcana: "Fool",
  },
];

if (!storage.getItem("DB")) {
  const DbJson = JSON.stringify(initialDB);

  storage.setItem("DB", DbJson);
}

function CrudApp() {
  const [db, setDb] = useState(JSON.parse(storage.getItem("DB")));
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = crypto.randomUUID();
    setDb([...db, data]);
    storage.setItem("DB", JSON.stringify([...db, data]));
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
    storage.setItem("DB", JSON.stringify(newData));
  };
  const deleteData = (id) => {
    let confirmDelete = window.confirm(
      `¿Desea eliminar el registro con el id '${id}'?`
    );
    if (confirmDelete) {
      let newData = db.filter((el) => el.id != id);
      setDb(newData);
      storage.setItem("DB", JSON.stringify(newData));
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Crud Simulado con LocalStorage</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
}

export default CrudApp;
