import React, { Component } from 'react';
import data from "../helpers/data.json"

function ElementoLista( props ) {
  return (
    <li key={props.el.id}><a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a></li>
  )
}

export default class RenderizadoElementos extends Component {
  constructor ( props ) {
    super( props );

    this.state = {
      daysOfWeek: [ "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo" ]
    }
  }

  render() {
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Días de la Semana</h3>
        <ol>
          {this.state.daysOfWeek.map( ( day, index ) => <li key={index}>{day}</li> )}
        </ol>
        <h3>Frameworks Frontend javascript</h3>
        <ul>
          {data.frameworks.map( ( framework ) => (
            <ElementoLista key={framework.id} el={framework} />
          ) )}
        </ul>
      </div>
    )
  }
}