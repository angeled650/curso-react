import React from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemon"

  let { data, isPending, error } = useFetch( url )

  return (
    <>
      <h2>Hooks Personalizados</h2>
      <h3>isPending: {JSON.stringify( isPending )}</h3>
      <h3>error: {JSON.stringify( error )}</h3>
      <h3>Data:</h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <code style={{ wordBreak: "break-words" }}>
          {JSON.stringify( data )}
        </code>
      </pre>
    </>
  )
}