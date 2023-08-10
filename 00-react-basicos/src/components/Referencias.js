import React, { useRef } from 'react';

export default function Referencias() {
  const refMenuBtn = useRef(),
    refMenu = useRef()


  const handleToggleBtn = ( e ) => {
    if ( refMenuBtn.current.textContent === "Menú" ) {
      refMenuBtn.current.textContent = "Cerrar"
      refMenu.current.style.display = "block"
    } else {
      refMenuBtn.current.textContent = "Menú"
      refMenu.current.style.display = "none"
    }
  }

  return (
    <>
      <h2>Referencias</h2>
      <button onClick={handleToggleBtn} ref={refMenuBtn}>Menú</button>
      <nav style={{ display: "none" }} ref={refMenu}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
        <br />
      </nav>
    </>
  )
}