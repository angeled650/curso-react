import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventoES6, EventoES7, MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes"
import CicloVida from "./components/CicloVida"
import AjaxApis from "./components/AjaxApis"
import ContadorHooks from "./components/ContadorHook"
import ScrollHooks from "./components/ScrollHooks"
import RelojHooks from "./components/RelojHooks"
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="ReactDefault">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente funcional expresado desde una prop" />
          <hr />
          <Propiedades
            cadena="Esto es un string"
            numero={2023}
            booleano={true}
            arreglo={[ 4, 5, 9 ]}
            objeto={{ nombre: "Angel", edad: 23 }}
            funcion={( num ) => num * num}
            elementoReact={<i>Esto es un elemento de React</i>}
            componente={<Componente msg="Hola, esto es un componenete pasado como Prop" />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventoES6 />
          <hr />
          <EventoES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks />
          <hr />
          <ContadorHooks titulo="Seguidores" />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados />
          <hr />
          <Referencias />
          <hr />
          <Formularios />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
          <hr />
        </section>
      </header>
    </div>
  );
}

export default App;
