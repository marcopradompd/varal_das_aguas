import React from 'react'

const Rodape = props =>{
    return(
        
        <div>

          
            <div className='modal fade' id='modalCadastro' tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>CADASTRO</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body row'>
                            <form id="upFotos" action="#" method="post">
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="name">Name</label>
                                    <input placeholder="Insira seu nome" className="form-control" type="text" name="name" id="name" />
                                </div>
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="nameFoto">NameFoto</label>
                                    <input placeholder="Insira o nome da foto" className="form-control" type="text" name="nameFoto" id="nameFoto" />
                                </div>
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="LocalFoto">LocalFoto</label>
                                    <input placeholder="Insira o local da foto" className="form-control" type="text" name="LocalFoto" id="localFoto" />
                                </div>
                                <div className="form-group padd col-lg-6">
                                    <label htmlFor="dataFoto">LocalFoto</label>
                                    <input className="form-control" type="date" name="dataFoto" id="dataFoto" />
                                </div>

                                <div className="form-group col-lg-12">
                                    <label htmlFor="exampleFormControlFile1">Anexar Foto</label>
                                    <input type="file" className="form-control-file" name="uploadFoto" id="uploadFoto" />
                                </div>

                                <div className="form-group col-lg-12">
                                    <label htmlFor="exampleFormControlTextarea1">Termos</label>
                                    <textarea readOnly className="form-control termo" defaultValue="Lorem Ipsum é simplesmente 
                                    uma simulação de texto da indústria tipográfica e de 
                                    impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
                                    desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
                                    de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
                                    também ao salto para a editoração eletrônica, permanecendo essencialmente
                                    inalterado.
                                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de 
                                    impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
                                    desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
                                    de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
                                    também ao salto para a editoração eletrônica, permanecendo essencialmente
                                    inalterado.
                                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de 
                                    impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
                                    desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
                                    de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
                                    também ao salto para a editoração eletrônica, permanecendo essencialmente
                                    inalterado."  id="termos" rows="3">
                                    </textarea>
                                </div>

                                <div className="form-group col-lg-12">
                                    <input type="checkbox" name="check" value="yes" /> 
                                    <label htmlFor="check">Eu li e concordo com os termos.</label>
                                </div>
                                
                                <div className="form-group btnline col-lg-12 text-right">
                                    <input type="submit" value="ENVIAR" className="btn btn-primary" />
                                </div>
                            </form>	
                        <pre id="output"></pre>
                        </div>

                        
                    </div>
                </div>
            </div>

            <footer className='container-fluid text-center'>
                <a href='http://www.inema.ba.gov.br/informacoes-inema/'  target='_blank' rel='noopener noreferrer'>
                <img src='img/marca_inema_sem_fundo.png' alt="Logo Inema" />
                </a>
            </footer>
            
            



        </div>
    )
}

export default Rodape