import React from "react";
import Bootstrap from "./components/Bootstrap";
import Bulma from "./components/Bulma";
import ReactBoostrap from "./components/ReactBootstrap";
import PersistentDrawerLeft from "./components/MaterialUI";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Frameworks CSS con React</h1>
      {/* <Bootstrap /> */}
      {/* <Bulma /> */}
      {/* <ReactBoostrap /> */}
      <PersistentDrawerLeft />
    </div>
  );
}

export default App;
