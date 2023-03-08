import React, { useState } from 'react'
import Card from './Card';
import style from '../style.module.css'


export default function Formulario() {

    const [nombre , setNombre] = useState('');
    const [libro , setLibro] = useState('');
    const [mensaje, setMensaje] = useState(false)
    


    const onChangeinput = (event)=>{
        setNombre(event.target.value)
    }

    const onChangeLibro = (event)=>{
        setLibro(event.target.value)
    }

    const onSubmitForm = (event)=>{

        event.preventDefault();
        const nombreValido = nombre.trim();
        const libroValido = libro.trim()

        if(nombreValido.length > 3 && libroValido.length > 6){
            setMensaje(true)
        }
        else{
            setMensaje(false)
            alert('Por favor chequea que la información sea correcta')
        }
    }
  return (
    <>
    <h1>Elige un Libro</h1>
    <form className={style.form} onSubmit={onSubmitForm}>
        <input type="text" placeholder='Nombre' onChange={onChangeinput} value={nombre}/>
        <input type="text" placeholder='Ingrese su libro favorito'onChange={onChangeLibro} value={libro}/>
        <button>Enviar</button>
    </form>

    {mensaje ? <Card userName={nombre} book={libro} /> : null}
    </>

  )
}

