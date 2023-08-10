import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CrudContext = createContext();

export const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(null);
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
        if (!res.err) setDb(res);
        else {
          setDb(null);
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

  const data = {
    db,
    loading,
    error,
    createData,
    updateData,
    deleteData,
    dataToEdit,
    setDataToEdit,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export default CrudContext;
