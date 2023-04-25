import React, { useState } from 'react';
import PagoFormulario from './PagoFormulario';
import Pago from './Pago';
import '../hojas-de-estilo/ListaDePagos.css';

function ListaDePagos() {

  const [pagos, setPagos] = useState([]);

  const agregarPago = pago => {
    if (pago.texto.trim()) {
      pago.texto = pago.texto.trim();
      const pagosActualizados = [pago, ...pagos];
      setPagos(pagosActualizados);
    }
  }

  const eliminarPago = id => {
    const pagosActualizados = pagos.filter(pago => pago.id !== id);
    setPagos(pagosActualizados);
  }

  const completarPago = id => {
    const pagosActualizados = pagos.map(pago => {
      if (pago.id === id) {
        pago.completado = !pago.completado;
      }
      return pago;
    });
    setPagos(pagosActualizados);
  }
  
  return (
    <>
      <PagoFormulario onSubmit={agregarPago} />
      <div className='pagos-lista-contenedor'>
        {
          pagos.map((pago) =>
            <Pago
              key={pago.id}
              id={pago.id} 
              texto={pago.texto}
              completada={pago.completada}
              completarPago={completarPago}
              eliminarPago={eliminarPago} />
          ) 
        }
      </div>
    </>
  );    
}

export default ListaDePagos;