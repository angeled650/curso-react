import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import CrudApi from "./components/CrudApi";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <>
      <h1>Reducers</h1>
      <hr />
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </>
  );
}

export default App;
