import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const LIMIT = 20;
let start, end;

const Productos = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    start = searchParams.get("inicio") || 1;
    end = searchParams.get("fin") || 20;
    setSearchParams({ inicio: start, fin: end });
  }, []);

  const handleNext = (e) => {
    start = new String(parseInt(start) + LIMIT);
    end = new String(parseInt(end) + LIMIT);
    setSearchParams({ inicio: start, fin: end });
  };

  const handlePrev = (e) => {
    start = new String(parseInt(start) - LIMIT);
    end = new String(parseInt(end) - LIMIT);
    setSearchParams({ inicio: start, fin: end });
  };

  return (
    <div>
      <h3>Productos</h3>
      <p>
        Visualizando productos del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <button onClick={handlePrev}>Prev</button>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Productos;
