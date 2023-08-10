import React, { useState } from 'react';

export default function Formularios() {
  const [ form, setForm ] = useState( {} )

  const handleChange = ( e ) => {
    setForm( { ...form, [ e.target.name ]: e.target.value, } )
  }
  const handleChecked = ( e ) => {
    setForm( { ...form, [ e.target.name ]: e.target.checked, } )
  }
  const handleSubmit = ( e ) => {
    e.preventDefault()
    alert( "El formulario se ha enviado." )
  }

  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:  </label>
        <input type="text" id="name" name="name" value={form.nombre} onChange={handleChange} />
        <br />
        <p>Sabor JS Favorito:</p>
        <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange} defaultChecked />
        <label htmlFor="vanilla">Vanilla</label>
        <input type="radio" id="react" name="sabor" value="react" onChange={handleChange} />
        <label htmlFor="react">React</label>
        <input type="radio" id="vue" name="sabor" value="vue" onChange={handleChange} />
        <label htmlFor="vue">Vue</label>
        <input type="radio" id="angular" name="sabor" value="angular" onChange={handleChange} />
        <label htmlFor="angular">Angular</label>
        <input type="radio" id="svelte" name="sabor" value="svelte" onChange={handleChange} />
        <label htmlFor="svelte">Svelte</label>
        <br />
        <p>Elige tu Lenguaje de Programación Favorito:</p>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">- - - -</option>
          <option value="js">JavaScript</option>
          <option value="python">Python</option>
          <option value="php">PHP</option>
          <option value="go">GO</option>
          <option value="ruby">Ruby</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto los Términos y Condiciones</label>
        <br />
        <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked} />
        <br />
        <input type="submit" value="Enviar Datos" />
      </form>
    </>
  )
}