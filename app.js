//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//DECLARAR DE VARIAVEL
let amigos = [];

// ADICIONAR AMIGOS À LISTA AMIGOS
function adicionarAmigo() {   
    let pegarNomeDoAmigo = document.querySelector('input').value; // Pega o nome do amigo e o almacena na variavel "pegarNomeDoAmigo".
    if (pegarNomeDoAmigo == '') {
        alert('Por favor, insira um nome.'); //Mostra a mensagem de campo vazio.
    } else {
        amigos.push(pegarNomeDoAmigo); //Adiciona o nome enviado à lista "amigos"
        LimparCampoDeRegistro() //Limpa o campo de registro de nome.
        mostrarListaDeAmigosNaTela(); //Mostra os nomes dos amigos na tela um por un.
        console.log(amigos); //Teste de funcionalidade.
    }
}

// LIMPAR CAMPO INSERIR NOME DE AMIGO
function LimparCampoDeRegistro() {
    pegarNomeDoAmigo = document.querySelector('input');
    pegarNomeDoAmigo.value = '';
}

// MOSTRAR LISTA DE AMIGO NA TELA
function mostrarListaDeAmigosNaTela() {
    let listaDeAmigosNaTela = document.getElementById('listaAmigos'); //Seleciona o lugar no doc HTML onde serão exibidos os nomes.
    listaDeAmigosNaTela.innerHTML = ""; //Limpa o conteudo da lista existente "listaDeAmigosNaTela", já que o nome anterior está guardado na variavel.
    //Percorre o array "amigos" e cria os elementos de lista "<li>" para cada nome.
    for (let i = 0; i < amigos.length; i++) {
        let elementoLi = document.createElement('li');
        elementoLi.textContent = amigos[i];
        listaDeAmigosNaTela.appendChild(elementoLi);
    }
}

//SORTEAR E EXIBIR O NOME DO AMIGO
function sortearAmigo() {   
    if (amigos == '') { //Retorna uma alerta se não houver nomes listados.
        return alert('Não há nomes para sortear');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); //Sorteia e retorna um indice da lista de amigos.
        let nomeSorteado = amigos[indiceAleatorio]; //Retorna um nome da lista de amigos a partir do indice gerado anterirormente.
        let exibirMensagem = document.getElementById('resultado'); //Seleciona o lugar onde será exibido o nome sorteado.
        exibirMensagem.innerHTML = `O nome sorteado é "${nomeSorteado}"`; //Exibe a mensagem com o nome sorteado.
        console.log(indiceAleatorio, nomeSorteado); //Teste de funcionalidade.
    }    
}