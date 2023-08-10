import { useContext } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import CrudContext from "../context/CrudContex";

function CrudApi() {
  const { db, loading, error } = useContext(CrudContext);
  return (
    <div>
      <h2>Crud API</h2>
      <article className="grid-1-2">
        <CrudForm />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor={"#dc3545"}
          />
        )}
        {db && <CrudTable />}
      </article>
    </div>
  );
}

export default CrudApi;
