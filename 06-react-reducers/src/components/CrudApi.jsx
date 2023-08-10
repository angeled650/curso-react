import { useState, useEffect, useReducer } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import { TYPES } from "../actions/crudActions";

function CrudApi() {
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/persona";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA });
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    setError(null);
    data.id = crypto.randomUUID();
    let options = {
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else setError(res);
    });
  };

  const updateData = (data) => {
    setError(null);
    let endpoint = `${url}/${data.id}`,
      options = {
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      } else setError(res);
    });
  };
  const deleteData = (id) => {
    setError(null);
    let confirmDelete = window.confirm(
      `¿Desea eliminar el registro con el id '${id}'?`
    );

    if (confirmDelete) {
      let endpoint = `${url}/${id}`,
        options = {
          headers: {
            "Content-Type": "application/json",
          },
        };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
        } else setError(res);
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Crud API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor={"#dc3545"}
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
}

export default CrudApi;
