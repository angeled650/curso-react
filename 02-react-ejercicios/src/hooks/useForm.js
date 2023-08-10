import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

export function useForm( initialForm, validateForm ) {
  const [ form, setForm ] = useState( initialForm );
  const [ errors, setErrors ] = useState( {} );
  const [ loading, setLoading ] = useState( false );
  const [ response, setResponse ] = useState( null );

  const handleChange = ( e ) => {
    const { name, value } = e.target;

    setForm( { ...form, [ name ]: value } )
  }
  const handleBlur = ( e ) => {
    handleChange( e )

    setErrors( validateForm( form ) )
  }
  const handleSubmit = ( e ) => {
    handleChange( e )
    e.preventDefault()
    setErrors( validateForm( form ) )

    if ( Object.keys( validateForm( form ) ).length === 0 ) {
      alert( "Enviando Formulario" )
      setLoading( true )
      helpHttp().post( "https://formsubmit.co/ajax/angeleduardoch11@gmail.com", {
        body: form,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      } ).then( res => {
        setLoading( false )
        setResponse( true )
        setForm( initialForm )
        setTimeout( () => {
          setResponse( false )
        }, 5000 );
      } )
    } else return;
  }

  return { form, errors, loading, response, handleChange, handleBlur, handleSubmit }
}

