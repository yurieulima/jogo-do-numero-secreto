let titulo = document.querySelector("h1")
titulo.innerHTML = "Hora do desafio"

function botaoConsole() {
    console.log("o Botão foi clicado")
}
function botaoAlerta() {
    alert("Eu amo JS")
}
function botaoPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil")
    alert("Estive em " + cidade + " e lembrei de você.")
}
function botaoSoma() {
    let numero1 = parseInt(prompt("Digite o primeiro número da soma"))
    let numero2 = parseInt(prompt("Digite o segundo número da soma"))
    let somaNumeros = numero1 += numero2
    alert("A soma dos números resulta em " + somaNumeros)
}