import React, { useState, useCallback } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  // const sumar = () => setContador(contador + 1);
  // const restar = () => setContador(contador - 1);

  const sumar = useCallback(() => {
    setContador(contador + 1);
  }, [contador]);

  const restar = useCallback(() => {
    setContador(contador - 1);
  }, [contador]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <br />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;
