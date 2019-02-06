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
                            <form id='upFoto'> 
                                <div className='form-group col-lg-6'>
                                    <label htmlFor='nome' className='col-form-label'>Nome do colaborador:</label>
                                    <input type='text' className='form-control' id='nome' />

                                    <label htmlFor='recipient-name' className='col-form-label'>Local da foto:</label>
                                    <input type='text' className='form-control' id='Local' />
                                </div>
                                <div className='form-group col-lg-6'>
                                    <label htmlFor='nomeFoto' className='col-form-label'>Nome da foto:</label>
                                    <input type='text' className='form-control' id='nomeFoto' />

                                    <label htmlFor='dataFoto' className='col-form-label'>Data de registro:</label>
                                    <input type='date' className='form-control' id='dataFoto' />
                                </div>
                                
                                <div className="form-group col-lg-12">
                                    <label htmlFor="exampleFormControlFile1">Anexar Foto</label>
                                    <input type="file" className="form-control-file" id="uploadFoto" />
                                </div>

                                <div className="form-group col-lg-12">
                                    <label htmlFor="exampleFormControlTextarea1">Termos</label>
                                    <textarea readOnly className="form-control" defaultValue="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de 
                                    impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
                                    desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
                                    de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
                                    também ao salto para a editoração eletrônica, permanecendo essencialmente
                                    inalterado."  id="termos" rows="3">
                                    </textarea>
                                </div>

                                <div className="form-check col-lg-12">
                                    <input type="checkbox" className="form-check-input" id="concordar" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Eu li e concordo com os termos.</label>
                                </div>
                                <div className='modal-footer'>
                                <input type='Submit' className='btn btn-primary' defaultValue="ENVIAR" id='enviar' />
                                </div>
                            </form>
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