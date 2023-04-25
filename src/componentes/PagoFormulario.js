import React, { useState } from 'react';
import '../hojas-de-estilo/PagoFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function PagoFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    const PagoNuevo = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(PagoNuevo);
  }

  return (
    <form 
      className='pago-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='pago-input'
        type='text'
        placeholder='Escribe un pago'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='pago-boton'>
        Agregar Pago
      </button>
    </form>
  );
}

export default PagoFormulario;