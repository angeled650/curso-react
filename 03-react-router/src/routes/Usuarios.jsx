import React from "react";
import { useParams } from "react-router-dom";

const Usuarios = () => {
  let { username } = useParams();
  return (
    <div>
      <h3>
        Bienvenid@: <b>{username}</b>{" "}
      </h3>
      <p>Esta página usa los pasos de parámetros de React Router.</p>
      <p>
        Tu nombre de usuario es:{" "}
        <b>
          <i>{username}</i>
        </b>
      </p>
    </div>
  );
};

export default Usuarios;
