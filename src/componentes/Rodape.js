import React from 'react'

const Rodape = props =>{
    return(
        
        <div>

          
            <div className='modal fade' id='modalCadastro' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                <div className='modal-dialog' role='document'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalLabel'>CADASTRO</h5>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                        <div className='modal-body row'>
                            <form>
                                <div className='form-group col-lg-6'>
                                    <label for='recipient-name' className='col-form-label'>Nome do colaborador:</label>
                                    <input type='text' className='form-control' id='name' />

                                    <label for='recipient-name' className='col-form-label'>Local da foto:</label>
                                    <input type='text' className='form-control' id='Local' />
                                </div>
                                <div className='form-group col-lg-6'>
                                    <label for='recipient-name' className='col-form-label'>Nome da foto:</label>
                                    <input type='text' className='form-control' id='nomeFoto' />

                                    <label for='recipient-name' className='col-form-label'>Data de registro:</label>
                                    <input type='date' className='form-control' id='dataFoto' />
                                </div>
                                
                                <div class="form-group col-lg-12">
                                    <label for="exampleFormControlFile1">Anexar Foto</label>
                                    <input type="file" class="form-control-file" id="uploadFoto" />
                                </div>

                                <div class="form-group col-lg-12">
                                    <label for="exampleFormControlTextarea1">Termos</label>
                                    <textarea class="form-control" id="termos" rows="3">
                                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de 
                                    impressos, e vem sendo utilizado desde o século XVI, quando um impressor 
                                    desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro
                                    de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como 
                                    também ao salto para a editoração eletrônica, permanecendo essencialmente
                                    inalterado.
                                    </textarea>
                                </div>

                                <div class="form-check col-lg-12">
                                    <input type="checkbox" class="form-check-input" id="concordar" />
                                    <label class="form-check-label" for="exampleCheck1">Eu li e concordo com os termos.</label>
                                </div>
                            </form>
                        </div>

                        <div className='modal-footer'>
                            <button type='button' className='btn btn-primary' id='enviar'>ENVIAR</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className='container-fluid text-center'>
                <a href='http://www.inema.ba.gov.br/informacoes-inema/' target='_blank'>
                <img src='img/marca_inema_sem_fundo.png' />
                </a>
            </footer>
        </div>
    )
}

export default Rodape