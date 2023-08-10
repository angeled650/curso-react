import React, { Component } from 'react';

export class EventoES6 extends Component {
  constructor ( props ) {
    super( props )
    this.state = {
      contador: 0
    }

    this.sumar = this.sumar.bind( this )
    this.restar = this.restar.bind( this )
  }


  sumar( e ) {
    this.setState( {
      contador: this.state.contador + 1
    } )
  }

  restar( e ) {
    this.setState( {
      contador: this.state.contador - 1
    } )
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

//Properties Initializer
export class EventoES7 extends Component {
  state = {
    contador: 0
  }

  //Arrow Functions
  sumar = ( e ) => {
    this.setState( {
      contador: this.state.contador + 1
    } )
  }

  restar = ( e ) => {
    this.setState( {
      contador: this.state.contador - 1
    } )
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

const Boton = ( { myOnClick } ) => <button onClick={myOnClick}>Botón hecho componente</button>

export class MasSobreEventos extends Component {
  handlerClick = ( e, mensaje ) => {
    console.log( "Evento Sintético:" )
    console.log( e )
    console.log( "Target Evento Sintético:" )
    console.log( e.target )
    console.log( "Evento Nativo:" )
    console.log( e.nativeEvent )
    console.log( "Target Evento Nativo:" )
    console.log( e.nativeEvent.target )
    console.log( mensaje )
  }

  render() {
    return (
      <div>
        <h2>Evento Nativo, Sintético y Personalizado</h2>
        <button onClick={( e ) => this.handlerClick( e, "Saludos desde un parámetro del evento" )}>Evento Sintetico</button>
        <Boton myOnClick={( e ) => this.handlerClick( e, "Esto es un evento personalizado" )} />
      </div >
    )
  }
}