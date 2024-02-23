 alert("Boas vindas ao jogo do número secreto");
 
 let numeroMaximo = 1000
 let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
 let chute;
 console.log(numeroSecreto);
 let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e " + numeroMaximo);

    if (chute == numeroSecreto) {
        break;
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor que " + chute);
        tentativas++
    } else if (chute < numeroSecreto) {
        alert("O número secreto é maior que " + chute);
        tentativas++
    }
 }

 let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
 alert("Parabéns, você descobriu o número secreto " + numeroSecreto + " com " + tentativas + " " + palavraTentativa)
 
