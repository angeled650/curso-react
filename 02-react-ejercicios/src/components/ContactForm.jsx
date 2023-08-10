import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-/_]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) errors.name = "El campo 'Nombre' es requerido.";
  else if (!regexName.test(form.name.trim()))
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios.";
  else delete errors.name;

  if (!form.email.trim()) errors.email = "El campo 'Email' es requerido.";
  else if (!regexEmail.test(form.email.trim()))
    errors.email = "El campo 'Email' es incorrecto.";
  else delete errors.email;

  if (!form.subject.trim())
    errors.subject = "El campo 'Asunto a tratar' es requerido.";
  else delete errors.subject;

  if (!form.comments.trim())
    errors.comments = "El campo 'Comentarios' es requerido.";
  else if (!regexComments.test(form.comments.trim()))
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres.";
  else delete errors.comments;

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

function ContactForm() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Validación de Formularios</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <p style={styles}>{errors.subject}</p>}
        <textarea
          name="comments"
          placeholder="Escribe tus comentarios"
          cols="50"
          rows="10"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p style={styles}>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && (
        <Message
          msg="Los datos han sido enviados correctamente"
          bgColor="#198754"
        />
      )}
    </div>
  );
}

export default ContactForm;
