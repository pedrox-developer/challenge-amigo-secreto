//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// um array para armazenar os nomes
let amigos = [];

//funcao para adicionar amigos
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    //inseri o nome obrigatorio
    if (nomeAmigo == "") {
        alert("Por Favor, insira um nome")
        return;
    }

    amigos.push(nomeAmigo)
    inputAmigo.value = "";
    inputAmigo.focus();
    listaDeNomesSorteados()
    amigos.includes(nomeAmigo)

    //adicionando nomes e criando um elemento de lista para cada nome
    function listaDeNomesSorteados () {
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

        for(let i = 0; i < amigos.length; i++){
            let item = document.createElement("li"); 
            item.textContent = amigos[i];
            listaAmigos.appendChild(item); 
        }
    }
}
    //funcao para selecionar um vencedor
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Nenhum nome adicionado")
            return;
        }
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`

        let limparLista = document.getElementById("listaAmigos");
        limparLista.innerHTML = "";
        amigos.includes(amigos)
    }