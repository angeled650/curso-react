import React, { useState, useEffect } from "react";
import SelectList from "./SelectList";

function SelectsAnidados() {
  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [parroquia, setParroquia] = useState("");

  return (
    <>
      <h2>Selects Anidados</h2>
      <SelectList
        title="estado"
        url="./src/api/venezuela.json"
        handleChange={(e) => {
          setEstado(e.target.value);
          setMunicipio("");
          setParroquia("");
        }}
        estadoSel={true}
      />

      {estado && (
        <SelectList
          title="municipio"
          url="./src/api/venezuela.json"
          handleChange={(e) => {
            setMunicipio(e.target.value);
            setParroquia("");
          }}
          estadoSel={estado}
          municipioSel={true}
        />
      )}

      {municipio && estado != "" && (
        <SelectList
          title="parroquia "
          url="./src/api/venezuela.json"
          handleChange={(e) => {
            setParroquia(e.target.value);
          }}
          estadoSel={estado}
          municipioSel={municipio}
          parroquiaSel={true}
        />
      )}

      <pre>
        <code>
          {estado} - {municipio} - {parroquia}
        </code>
      </pre>
    </>
  );
}

export default SelectsAnidados;
