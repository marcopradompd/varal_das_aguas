import React from 'react'

const Cabecalho = props =>{
    return(
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>                        
            </button>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-left">
            <li><a href="index.html">Início</a></li>
              <li><a href="#Concurso">O Concurso</a></li>
              <li><a href="#Sobre">Sobre</a></li>
              <li><a href="#Regras">Regras</a></li>
              <li><a href="#modalCadastro" data-toggle='modal' data-target='#modalCadastro' data-whatever='@mdo'>Inscrição</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Cabecalho 