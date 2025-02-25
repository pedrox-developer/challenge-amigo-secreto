//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// um array para armazenar os nomes
let amigos = [];

//funcao para adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector("input").value
    if (nome == "") {
        alert("Por Favor, insira um nome")
    }
    amigos.push(nome)
    listaAmigos.innerHTML = amigos

        
    }


    limparCampos()
function limparCampos() {
    nomes = document.querySelector("input");
    nomes.value = "";
}
