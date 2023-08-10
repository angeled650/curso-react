import { Provider } from "react-redux";
import "./App.css";
import TeoriaRedux from "./components/TeoriaRedux";
import store from "./store";
import Contador from "./components/Contador";
import ShoppingCart from "./components/ShoppingCart";
import CrudApi from "./components/CrudApi";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr />
        <CrudApi />
        <hr />
        <ShoppingCart />
        <hr />
        <Contador />
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
