// hello world comentario simples

/*hello world    essa é a forma de comentar com varias linhas*/

/*codigos profissionais evitar comentarios ao maximo, vale mais um codigo bom*/

//Objetivo 1 - marcar o botao  

const botoes = document.querySelectorAll(".botao");

//objetivi 2 - selecionar botao

const personagens = document.querySelectorAll(".personagem");



botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        desselecionarBotao(botaoSelecionado);
        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        desselecionarPersonagem(personagemSelecionado);
        personagens[indice].classList.add("selecionado");
    });
})

function desselecionarPersonagem(personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao(botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
}

