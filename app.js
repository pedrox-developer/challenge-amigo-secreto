//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// um array para armazenar os nomes
let amigos = [];

//funcao para adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector("input").value



    //inseri o nome obrigatorio
    if (nome == "") {
        alert("Por Favor, insira um nome")
    }
    if(amigos.includes(nome)){
        return adicionarAmigo();
    }

    amigos.push(nome)
    listaAmigos.innerHTML = amigos
    limparCampos()

    
        
    }


function limparCampos() {
    nome = document.querySelector("input");
    nome.value = "";
}
