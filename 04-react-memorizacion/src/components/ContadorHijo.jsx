import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  console.log("Componente Hijo se renderiza.");

  // let superNumero = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }

  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }

    return numero;
  }, []);

  return (
    <div
      style={{
        border: "medium solid white",
        margin: "1rem",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h2>Contador Hijo</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
