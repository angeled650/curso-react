import { useParams, useNavigate } from "react-router-dom";

export const ProductoDetalle = ({ productos }) => {
  function handleGoBack() {
    navigate(-1);
  }

  const navigate = useNavigate();
  const { id } = useParams();

  const producto = productos.find((producto) => producto.id.toString() === id);

  return (
    <section>
      <h1>Detalle del Producto</h1>
      <h2>{producto.nombre}</h2>
      <h3>{producto.id}</h3>
      <h4>${producto.precio}</h4>
      <button onClick={handleGoBack}>Regresar</button>
    </section>
  );
};
