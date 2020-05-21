import React, { useState, useEffect } from 'react';
import Form from "./Form";

import formSchema from "./formSchema";
import axios from "axios";
import * as yup from "yup";

const initialForm = { name : "", email : "", password : "", terms : false };

const initialErrors = { name : "", email : "", password : "" };

function App() 
{
  const [ users, setUsers ] = useState( [] );
  const [ form, setForm ] = useState( initialForm );
  const [ errors, setErrors ] = useState( initialErrors );
  const [ disabled, setDisabled ] = useState( true );

  const onChange = e => setForm( { ...form, [ e.target.name ] : e.target.value } );

  const checkbox = e => setForm( { ...form, [ e.target.name ] : e.target.checked } );

  const postUser = newUser =>
  {
    axios.post( "https://reqres.in/api/users", newUser )
         .then( response => { setUsers( [ ...users, response.data ] ); console.log( response ); } )
         .catch( response => console.error( "Something Went Wrong!!!" ) )
         .finally( () => setForm( initialForm ) );
  }

  const submit = e => 
  {
    e.preventDefault();
    postUser( { ...form } );
  }

  useEffect( () => 
  {
    formSchema.isValid( form )
      .then( valid => setDisabled( !valid ) )
  }, [ form ] );

  return(
    <>
      <Form 
        name = { form.name }
        email = { form.email } 
        password = { form.password }
        terms = { form.terms } 
        onChange = { onChange } 
        checkbox = { checkbox }
        submit = { submit }
        disabled = { disabled }
        errors = { errors }
      />

      {
        users.map( user => <div key = { user.id } >
                            <p> {`User ${ user.name } Created Account with Email: ${ user.email }`} </p>
                          </div> )
      } 
    </>
  );
}

export default App;
