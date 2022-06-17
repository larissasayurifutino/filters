let botoes = document.querySelectorAll(".botoes button"); // Todos elementos tipo button filhos de elemento classe botoes
// botoes é um nodelist
let passos = document.querySelectorAll(".passos > div");
// passos é um nodelist

// // código executado ao clicar
function aoClicar(event){ 
    //console.log('cliquei')

    let botaoAtual = event.target;          // Pegar qual evento foi clicado (o elemento que ativou o evento)
    //console.log(botaoAtual)

    // 'data-alvo' manda uma propriedade do html para o javascript
    let dataAlvo = botaoAtual.dataset.alvo; 
    //console.log(botaoAtual.dataset)
    //console.log(dataAlvo)
    
    let elementoAlvo = document.querySelector(dataAlvo); // Selecionar o elemento
    console.log(elementoAlvo)


    let passoAnterior = document.querySelector('.passo-ativo');
    let botaoAnterior = document.querySelector('.botao-ativo');

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