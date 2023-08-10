import React, { useState, useEffect } from 'react';

function Pokemon( { avatar, name } ) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}


export default function AjaxHooks() {
  const [ pokemons, setPokemons ] = useState( [] )

  useEffect( () => {
    const getPokemon = async ( url ) => {
      let res = await fetch( url ),
        json = await res.json();

      json.results.forEach( async ( el ) => {
        let res = await fetch( el.url ),
          json = await res.json()

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default
        }

        setPokemons( pokemons => [ ...pokemons, pokemon ] )
        // let pokemons = [ ...this.state.pokemons, pokemon ]

        // this.setState( { pokemons } )
      } )

    }
    getPokemon( "https://pokeapi.co/api/v2/pokemon" )

  }
    , [] )

  return (
    <>
      <h2>Peticiones Asíncronas con Hooks</h2>
      {pokemons.length === 0
        ? ( <h3>Cargando...</h3> )
        : ( pokemons.map( el => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ) )
        )}
    </>
  )
}