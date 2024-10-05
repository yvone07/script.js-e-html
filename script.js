//Seleciona os elementos do Dom que serão manipulados 
const botao = document.getElementById("botaoInteragir");
const mensagem = document.getElementById("mensagem");

// Adiciona um evento de clique ao botão
botao.addEventListener("click" , () => {
    //Solicita o nome do usuário
    let nome = prompt ("Qual é o seu nome");

    // Condição para verificar se o nome foi fornecido
    if (nome) {
// Solicita a idade do usuário 
let idade = prompt("qual é a sua idade");
     
//Condição para verificar se a idade é um número válido
if isNaN(idade) || idade <= 0) {
    mensagem.innerText = "Por favor, insira uma idade válida.";
    mensagem.style.color = "red"; // Altera a cor do texto para vermelho
} else {
    // Saída de dados com base na idade fornecida
    if (idade < 18) {
        mensagem.innerText = ' Olá, $(nome)! Voce tem apenas ${idade} anos.';
        mensagem.style.color = "blue"; // Altera a cor do texto para azul
    } else {
        mensagem.InnerText = ' Olá , ${nome}! Voce é maior de idade com ${idade} anos.';
        mensagem.style.color = "green"; //Altera a cor do texto para verde
    }
    console.log ('Nome do usuário: ${nome}');
    console.log('Idade do usuário: ${idade}');
}
} else {
    mensagem.innerText = "Nome não fornecido. Por favor, insira um nome.";
    mensagem.style.color = "orange"; //  Altera a cor do texto para laranja
}
});