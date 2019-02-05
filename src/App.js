import React, { Component } from 'react';


import Cabecalho from './componentes/Cabecalho'
import Inicial from './componentes/Inicial'
import Sobre from './componentes/Sobre'
import Regras from './componentes/Regras'
import Rodape from './componentes/Rodape'

class App extends Component {
  render() {
    return (

        <div className="App">
          <Cabecalho />
          <Inicial />
          <Sobre />
          <Regras />
          <Rodape />
        </div>
 
    );
  }
}

export default App;
