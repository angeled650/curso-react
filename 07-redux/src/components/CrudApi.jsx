import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import {
  create_data,
  delete_data,
  no_data,
  read_all_data,
  update_data,
} from "../reducers/crudReducer";

function CrudApi() {
  const state = useSelector((state) => state.crud);
  const dispatch = useDispatch();
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
          dispatch(read_all_data(res));
          setError(null);
        } else {
          dispatch(no_data());
          setError(res);
        }
        setLoading(false);
      });
  }, [url, dispatch]);

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
        dispatch(create_data(res));
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
        dispatch(update_data(data));
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
          dispatch(delete_data(id));
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
