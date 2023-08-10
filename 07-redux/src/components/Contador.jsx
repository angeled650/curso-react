import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrement_5,
  increment,
  increment_5,
  reset,
} from "../reducers/contadorReducer";

const Contador = () => {
  const state = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Contador Redux</h2>
      <h3>{state}</h3>
      <nav>
        <button onClick={() => dispatch(increment_5(5))}>+5</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(decrement_5(5))}>-5</button>
      </nav>
    </div>
  );
};

export default Contador;
