import React from 'react'

const Regras = props =>{
    return(
    <div id="Regras" className='container'>
        <div className='row'>
            <div className='limit bg-white'>
            <h5 className="text-center">Regras</h5>
            <p>Todas as fotos que retratem da temática águas (tais como situação de secas ou excedentes hídricos, 
                as belezas e os desafios de se trabalhar com os recursos hídricos etc.) serão bem vindas.</p>
                <ul>
                    <li>As fotos devem ser originais e sem alterações.</li>
                    <li>As fotos devem expor os ambientes visitados em inspeções técnicas realizadas durante inspeções pelo INEMA.</li>
                    <li>Fotografias que incluam pessoas serão desclassificadas.</li>
                    <li>As fotos devem ser enviadas com um formulário de inscrição preenchido.</li>
                    <li>As fotografias do concurso se tornarão públicas.</li>
                    <li>O fotógrafo da foto que receber mais votos ganhará um prêmio simbólico.</li>
                    <li>Cada pessoa só poderá cadastrar uma única foto.</li>
                    <li>A votação será por meio das redes sociais do INEMA.</li>
                    <li>As vagas serão limitadas apenas 50.</li>
                </ul>

                <p>A foto vencedora irá ganhar um kit de brinde (Agenda, caneta, livro).</p>
            </div>
        </div>
    </div>
    )
}

export default Regras