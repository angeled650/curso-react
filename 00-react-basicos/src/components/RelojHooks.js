import React, { useState, useEffect } from 'react';


function Reloj() {
  const [ hora, setHora ] = useState( new Date().toLocaleTimeString() )

  useEffect( () => console.log( "Hora actualizada", [ hora ] ) )

  useEffect( () => {
    console.log( "Reloj iniciado" )
    const temporizador = setInterval( () => {
      setHora( new Date().toLocaleTimeString() )
    }, 1000 );

    return () => {
      console.log( "Reloj desmontado" )
      clearInterval( temporizador )
    }
  }, [] )

  return <h3>{hora}</h3>
}

export default function RelojHooks() {
  const [ visible, setVisible ] = useState( false )

  return (
    <>
      <h2>Reloj Usando Hooks</h2>
      {visible && <Reloj />}
      <button onClick={() => setVisible( true )}>Iniciar</button><button onClick={() => setVisible( false )}>Detener</button>
    </>
  )
}