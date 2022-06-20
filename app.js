
let botoes = document.querySelectorAll(".botoes button"); // Todos elementos tipo button filhos de elemento classe botoes
// botoes é um nodelist
let passos = document.querySelectorAll(".passos > div");
// passos é um nodelist

let seletor_uf = document.querySelector( '.uf' )
// Seleciona o elemento <select>


// Quando a opção do seletor mudar, dispara uma funcão
seletor_uf.addEventListener( 'change', chamarFlourish )

function chamarFlourish(){

    // Variavel estado
    let chosenUF = seletor_uf.value

    console.log(chosenUF)

    divsUF = document.querySelectorAll( '[data-UF]' )

    for(let div of divsUF){
        
        if( div.dataset.UF == chosenUF ){
            div.style.display = 'initial'
        }else{
            div.style.display = 'none'
        }
    }


/*  
    if( uf == 'al' ){ // #d9af6b
        console.log('Dados indisponíveis.')
    }


    if( uf == 'rj' ){ // #7c7c7c
        console.log('Dados indisponíveis.')
    }     
  

    if( uf == 'se' ){ // #d9af6b
        console.log('Dados indisponíveis.')
    }

document.querySelector( '.grafUF' ).innerHTML = html

    */

    
}

// // código executado ao clicar
function aoClicar(event){ 
    //console.log('cliquei')

    let botaoAtual = event.target;          // Pegar qual evento foi clicado (o elemento que ativou o evento)
    //console.log(botaoAtual)

    // 'data-alvo' manda uma propriedade do html para o javascript
    let dataAlvo = botaoAtual.dataset.alvo; 
    //console.log(botaoAtual.dataset)
    //console.log(dataAlvo)

    let dataSecao = botaoAtual.dataset.secao; 
    
    let elementoAlvo = document.querySelector(dataAlvo); // Selecionar o elemento
    //console.log(elementoAlvo)

    // O passo anterior é onde estava o passo ativo. Mas como filho da secao.
    let passoAnterior = document.querySelector('.' + dataSecao + ' > .passo-ativo');
    // O botao que estava ativado tinha a classe 'botao-ativo' e era filho de uma secao
    let botaoAnterior = document.querySelector('.botao-ativo[data-secao="'+dataSecao+'"]');



    if(botaoAtual !== botaoAnterior){ // PARA GARANTIR QUE SE O BOTÃO JÁ ESTÁ ATIVO NADA ACONTECERÁ
        // remove a classe 'passo-ativo' do elemento que estava exibido, para escondê-lo // ESCONDER
        passoAnterior.classList.remove('passo-ativo');
        // adiciona a classe 'passo-ativo' ao elemento que deve ser exibido // MOSTRAR
        elementoAlvo.classList.add('passo-ativo');

        // ATUALIZAR OS BOTOES
        // adiciona a classe 'botao-ativo' ao botao clicado
        botaoAtual.classList.add('botao-ativo');
        // remove a classe 'botao-ativo' do botao anterior
        botaoAnterior.classList.remove('botao-ativo');
    }

}
// para cada 'botao' da lista de 'botoes'
for(let botao of botoes){
    // Adicionar evento de clique para cada botão
    // No botão... espere que o evento de 'click' aconteça e quando acontecer faça o que está em 'aoCLicar'
    botao.addEventListener('click', aoClicar);
}