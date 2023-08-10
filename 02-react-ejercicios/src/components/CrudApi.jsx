import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/persona";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) setDb(res);
      else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, []);

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
        setDb([...db, res]);
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
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
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
          let newData = db.filter((el) => el.id != id);
          setDb(newData);
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
