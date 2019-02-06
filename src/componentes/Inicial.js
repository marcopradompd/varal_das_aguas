import React from 'react'

const Inicial = props =>{
    return(
    <div>
        <div className='jumbotron text-center'>
          <h1><img className="img-responsive" alt="logo varal das águas" src='./img/logo_varal.png' /></h1> 
        </div>

        <div id='Concurso' className='container bg-white'>
            <div className='row'>
                <div className='col-sm-8 '>
                <h2 className="text-center">O concurso</h2>
                    <h4>
                        Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h4><br/>

                </div>

                <div className='col-sm-4 col-12 text-center containerBoxInfo'>
                    <div className='boxInfo text-left'>
                        <h4>Exposição de fotos</h4>
                        <p>
                        20 à 24/03/2017 na divisórias da Ouvidoria
                        (em frente ao elevador)
                        </p>
                        <br/>
                        <h4>Apresentação</h4>
                        <p>
                        20/03/2017 das 16:30h às 17:30h.  
                        </p>
                        
                    </div>

                    <button className='btn btn-default  btnInscricao' data-toggle='modal' data-target='#modalCadastro' data-whatever='@mdo'>Faça sua inscrição</button>

                    {/* <span className='glyphicon glyphicon-signal logo'></span> */}
                </div>
            </div>

            <hr />
        </div>

       
    </div>
    )
}

export default Inicial 