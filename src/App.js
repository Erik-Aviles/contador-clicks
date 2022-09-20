import './App.css';
import { Contador } from './components/Contador';
import { Botton } from './components/Botton';
import logo from './asset/image/freecodecamp-logo.png'
import React from 'react'//Hooks

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      numClicks: 0
    };
    this.manejarClick = this.manejarClick.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
    
  }

  manejarClick () {
    this.setState (({ numClicks }) => ({numClicks: numClicks + 1}));
  };
  reiniciarContador () {
    this.setState({numClicks:0});
    
  };

  render () {
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
            numClick={this.state.numClicks}
          />
          <Botton 
            texto='Click'
            esBotonDeClick={true}
            manejarClick={this.manejarClick}
          />
          <Botton 
             texto='Reiniciar'
             esBotonDeClick={false}
             manejarClick={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}





  


export default App;
