import React from "react";
import styles from './ContactUs.module.css';
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {
  const [dataForm, setDataForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const dispatch = useDispatch();

  function handleInput({target:{value,name}}){
    setDataForm( state => {
      return {...state, [name]: value}
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    const validate = Object.entries(dataForm).some( ([,value]) => value.trim() === '');
    
    if(!validate){
      //Si la información fue validada correctamente entonces puede realizar el cambio de el estado global redux
      dispatch(
        enviarForm(dataForm)
      )

      setDataForm({
        nombre: '',
        email:'',
        asunto:'',
        mensaje:''
      });
    }
  }

  return (
    <div>
      <form className={styles.contactBg} onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          name="nombre"
          value={dataForm.nombre}
          onChange={handleInput}
        />

        <label htmlFor="email">Email: </label>
        <input
          name="email"
          value={dataForm.email}
          onChange={handleInput}
        />
        
        <label htmlFor="asunto">Asunto: </label>
        <input
          name="asunto"
          value={dataForm.asunto}
          onChange={handleInput}
        />
        
        <label htmlFor="mensaje">Mensaje: </label>
        <input
          name="mensaje"
          value={dataForm.mensaje}
          onChange={handleInput}
        />
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
