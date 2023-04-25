import './App.css';

import ListaDePagos from './componentes/ListaDePagos';

function App() {
  return (
    <div className='aplicacion-pagos'>
      
      <div className='pagos-lista-principal'>
        <h1> Listado de los pagos mensuales</h1>
        <ListaDePagos />
      </div>
    </div>
  );
}

export default App;
