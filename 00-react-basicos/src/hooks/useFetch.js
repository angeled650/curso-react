import { useState, useEffect } from 'react';

export function useFetch( url ) {
  const [ data, setData ] = useState( null )
  const [ isPending, setIsPending ] = useState( true )
  const [ error, setError ] = useState( null )


  useEffect( () => {
    const getData = async ( url ) => {
      try {
        let res = await fetch( url )

        if ( !res.ok ) {
          let error = {
            err: true,
            status: res.status,
            statusText: res.statusText ? res.statusText : "Ocurrió un error"
          }
          throw error
        }

        let data = await res.json()

        setData( data )
        setIsPending( false )
        setError( { err: false } )
      } catch ( err ) {
        setIsPending( true )
        setError( err )
      }
    }
    getData( url )
  }, [ url ] )

  return { data, isPending, error }
}
