import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {
  const valuesInputs = {name:"",email:"",message:""};
  const [inputs, setInputs] = useState(valuesInputs);
  const [errors, setErrors] = useState({});

  function validateInputs (object) {
    const errors = {};

    const values = {
      email: val => !regexEmail.test(val) ? "Debes Ingresar un Email válido" : "",
      name: val => val.length > 5 ? "" : "Ingresa un nombre de mínimo 5 Carácteres",
      message: val => val.length > 10 ? '' : "Ingresa un mensaje de mínimo 10 Carácteres" 
    }

    Object.entries(object).forEach( ([input, val]) => {
      const validate = values[input](val);
      if(validate){
        errors[input] = validate;
      }
    });

    return errors;
  }
  
  const handleChange = ({target}) => {
    setInputs({...inputs,[target.name]:target.value});
    setErrors(
      validateInputs({...inputs,[target.name]:target.value})
    );
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(Object.values(errors).length === 0){
      console.log("Enviado correctamente");
      setInputs(valuesInputs);
    }
  }
  return (
    <div className='content-form'>
        <form action="" onSubmit={handleSubmit} className='form-all'>
          <label className='label-input' htmlFor="">Nombre:</label>
          <input 
            type="text"
            name='name'
            className={`item-form-input ${errors.name && 'warning'}`}
            value={inputs.name}
            placeholder='Escribe tu Nombre...'
            onChange={handleChange}
          />
          
          <label htmlFor="">Correo electrónico:</label>
          <input
            type="text"
            name='email'
            value={inputs.email}
            className={`item-form-input ${errors.email && 'warning'}`}
            placeholder='Correo Electrónico'
            onChange={handleChange}
          />
          
          <label htmlFor="">Mensaje</label>
          <input
            type="text"
            name='message'
            value={inputs.message}
            className={`item-form-input ${errors.message && 'warning'}`}
            placeholder='Escribe tu Mensaje...'
            onChange={handleChange}
          />

          <input className='button-submit' type="submit" value="Enviar" />
        </form>
    </div>
  )
}
