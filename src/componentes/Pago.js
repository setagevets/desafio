import React from 'react';
import '../hojas-de-estilo/Pagos.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Pago({ id, texto, completada, completarPago, eliminarPago }) {
  return (
    <div className={completada ? 'pago-contenedor completado' : 'pago-contenedor'}>
      <div 
        className='pago-texto'
        onClick={() => completarPago(id)}>
        {texto}
      </div>
      <div 
        className='pago-contenedor-iconos'
        onClick={() => eliminarPago(id)}>
        <AiOutlineCloseCircle className='pago-icono' />
      </div>
    </div>
  );    
}

export default Pago;