import './App.css';
import { Contador } from './components/Contador';
import { Botton } from './components/Botton';
import logo from './asset/image/freecodecamp-logo.png'
import { useState } from 'react'//Hooks

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks (numClicks + 1);
  };
  const reiniciarContador = () => {
    setNumClicks(0);
    
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={logo}
          alt='Logo freecodecamp'
        />
      </div>
      <div className='contador-principal'>
        <Contador
          numClick={numClicks}
        />
        <Botton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Botton 
           texto='Reiniciar'
           esBotonDeClick={false}
           manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
