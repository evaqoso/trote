function exe0() {
    let nota;
    let conta = 1; // conta de 1 a 6
    let soma = 0; // soma das notas

    while (conta <= 6) {
        nota = Number(prompt('Informe a nota ' + conta + ': '));
        soma += nota; // soma = soma + nota
        conta++; // conta = conta + 1
    }

    let media = soma / 6;

    // Mostra o resultado na tela
    alert(`A média é: ${media.toFixed(1)}`);
}

// Chama a função para iniciar a execução
exe0();


    
