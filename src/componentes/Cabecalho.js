import React from 'react'

const Cabecalho = props =>{
    return(
        <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>                        
            </button>
            {/* <a class="navbar-brand" href="#myPage">Varal das Águas</a> */}
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-left">
            <li><a href="index.html">Início</a></li>
              <li><a href="#Concurso">O Concurso</a></li>
              <li><a href="#Sobre">Sobre</a></li>
              <li><a href="#Regras">Regras</a></li>
              <li><a href="#" data-toggle='modal' data-target='#modalCadastro' data-whatever='@mdo'>Inscrição</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Cabecalho 