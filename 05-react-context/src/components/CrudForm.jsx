import { useState, useEffect, useContext } from "react";
import CrudContext from "../context/CrudContex";

const initialForm = {
  id: null,
  persona: "",
  arcana: "",
};

function CrudForm() {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) setForm(dataToEdit);
    else setForm(initialForm);
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.persona || !form.arcana) {
      alert("Datos Incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="persona"
          onChange={handleChange}
          value={form.persona}
          placeholder="Persona"
        />
        <input
          type="text"
          name="arcana"
          onChange={handleChange}
          value={form.arcana}
          placeholder="Arcana"
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
}

export default CrudForm;
