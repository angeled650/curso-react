import CrudApi from "./components/CrudApi";
import MyPage from "./components/MyPage";
import MyPageContext from "./components/MyPageContext";
import { CrudProvider } from "./context/CrudContex";

function App() {
  return (
    <>
      <div>
        <h1>React Context API</h1>
        <a
          href="https://es.react.dev/learn/passing-data-deeply-with-context#context-passes-through-intermediate-components"
          target="_blank"
          rel="noreferrer"
        >
          Documentación
        </a>
        <hr />
        <CrudProvider>
          <CrudApi />
        </CrudProvider>
        <hr />
        <MyPageContext />
        <hr />
        <MyPage />
      </div>
    </>
  );
}

export default App;
