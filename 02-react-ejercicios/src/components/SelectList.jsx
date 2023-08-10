import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import Message from "./Message";

function SelectList({
  title,
  url,
  handleChange,
  estadoSel,
  municipioSel,
  parroquiaSel,
}) {
  const { data, error, loading } = useFetch(url);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }

  let id = `select-${title}`;
  let label = title.charAt(0).toUpperCase() + title.slice(1);
  let buscarEstado = "";
  let buscarMunicipio = "";

  // console.log(data);
  if (municipioSel) {
    buscarEstado = data.find((el) => {
      return el.estado === estadoSel;
    });
  }

  if (parroquiaSel) {
    buscarMunicipio = buscarEstado.municipios.find((el) => {
      return el.municipio === municipioSel;
    });
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      {loading && <Loader />}
      <select name={id} id={id} onChange={handleChange}>
        <option value="">Elige un {title}</option>
        {data &&
          estadoSel &&
          !municipioSel &&
          data.map((el) => (
            <option key={el["estado"]} value={el["estado"]}>
              {el["estado"]}
            </option>
          ))}

        {data &&
          estadoSel &&
          municipioSel &&
          !parroquiaSel &&
          buscarEstado.municipios.map((el) => (
            <option key={el["municipio"]} value={el["municipio"]}>
              {el["municipio"]}
            </option>
          ))}

        {data &&
          estadoSel &&
          municipioSel &&
          parroquiaSel &&
          buscarMunicipio.parroquias.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
      </select>
    </>
  );
}

export default SelectList;
