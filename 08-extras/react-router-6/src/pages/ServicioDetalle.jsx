import { useParams } from "react-router-dom";

export const ServicioDetalle = ({ servicios }) => {
  const { id } = useParams();

  const servicio = servicios.find((servicio) => servicio.id.toString() === id);

  return (
    <section>
      <h1>Detalle del Servicio</h1>
      <h2>{servicio.nombre}</h2>
      <h3>{servicio.id}</h3>
      <h4>${servicio.precio}</h4>
    </section>
  );
};
