function calcular() {
    // declaração variável sem tipo
    let soma = 0;

    // recupera o valor da ação social digitado pelo usuário
    let acaosocial = document.getElementById("acaosocial").value;
    soma = soma + Number(acaosocial);

    // recupera o valor da homenagem digitado pelo usuário
    let homenagem = document.getElementById("homenagem").value;
    soma = soma + Number(homenagem);

    // recupera a quantidade de leite
    let leite = document.getElementById("leite").value;
    soma = soma + (2 * Number(leite));

    // recupera a quantidade de kit
    let kit = Number(document.getElementById("kit").value);

    // recupera a cor da equipe
    let equipe = document.getElementById("equipe").value;

    let pontosSangue = 0;

    // recupera a quantidade de pacotes de arroz de 5 kg
    let arroz = document.getElementById("arroz").value;
    soma = soma + Number(5 * Number(arroz));

    // recupera a quantidade de pacotes de arroz de 1 kg
    let arroz1 = document.getElementById("arroz1").value;
    soma = soma + Number(1 * Number(arroz1));

    // recupera a quantidade de pacotes de feijão de 2 kg
    let feijao = document.getElementById("feijao").value;
    soma = soma + Number(2 * Number(feijao));

    // recupera a quantidade de pacotes de feijão de 1 kg
    let feijao1 = document.getElementById("feijao1").value;
    soma = soma + Number(1 * Number(feijao1));

    // recupera a quantidade de pacotes de macarrão
    let macarrao = document.getElementById("macarrao").value;
    soma = soma + Number(0.5 * Number(macarrao));

    // recupera a quantidade de litros de óleo
    let oleo = document.getElementById("oleo").value;
    soma = soma + Number(1 * Number(oleo));

    // recupera a quantidade de suplemento
    let suplemento = Number(document.getElementById("suplemento").value);

    let pontosKit = 0; // guarda pontuação de kit + suplemento

    // Função para calcular 20% do valor mínimo de uma faixa
    function calcularLimiteMinimo(faixaMinima) {
        return faixaMinima * 0.2;
    }

    // Pontuação para kits e suplementos de acordo com a tabela fornecida
    if (equipe == "Laranja") {
        if (kit >= 97 || suplemento >= 49) {
            pontosKit = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);
        } else if (kit >= 78 || suplemento >= 39) {
            pontosKit = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        } else if (kit >= 49 || suplemento >= 25) {
            pontosKit = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        } else if (kit >= 19 || suplemento >= 10) {
            pontosKit = 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15);
        } else {
            // Verifica se o valor está abaixo de 20% da faixa mínima
            let limiteKit = calcularLimiteMinimo(19);
            let limiteSuplemento = calcularLimiteMinimo(10);
            if (kit < limiteKit && suplemento < limiteSuplemento) {
                pontosKit = 0; // Ignora pontuações abaixo de 20%
            }
        }
    } else if (equipe == "Preta") {
        if (kit >= 103 || suplemento >= 52) {
            pontosKit = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15);
        } else if (kit >= 82 || suplemento >= 42) {
            pontosKit = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15);
        } else if (kit >= 52 || suplemento >= 26) {
            pontosKit = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 21 || suplemento >= 10) {
            pontosKit = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15);
        } else {
            let limiteKit = calcularLimiteMinimo(21);
            let limiteSuplemento = calcularLimiteMinimo(10);
            if (kit < limiteKit && suplemento < limiteSuplemento) {
                pontosKit = 0;
            }
        }
    } else if (equipe == "Roxa") {
        if (kit >= 102 || suplemento >= 51) {
            pontosKit = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15);
        } else if (kit >= 82 || suplemento >= 41) {
            pontosKit = 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15);
        } else if (kit >= 51 || suplemento >= 26) {
            pontosKit = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15);
        } else if (kit >= 20 || suplemento >= 10) {
            pontosKit = 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15);
        } else {
            let limiteKit = calcularLimiteMinimo(20);
            let limiteSuplemento = calcularLimiteMinimo(10);
            if (kit < limiteKit && suplemento < limiteSuplemento) {
                pontosKit = 0;
            }
        }
    } else if (equipe == "Verde") {
        if (kit >= 88 || suplemento >= 44) {
            pontosKit = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15);
        } else if (kit >= 70 || suplemento >= 35) {
            pontosKit = 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15);
        } else if (kit >= 44 || suplemento >= 22) {
            pontosKit = 2500 + ((kit - 44) * 30) + ((suplemento - 22) * 15);
        } else if (kit >= 18 || suplemento >= 9) {
            pontosKit = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15);
        } else {
            let limiteKit = calcularLimiteMinimo(18);
            let limiteSuplemento = calcularLimiteMinimo(9);
            if (kit < limiteKit && suplemento < limiteSuplemento) {
                pontosKit = 0;
            }
        }
    } else if (equipe == "Vermelha") {
        if (kit >= 93 || suplemento >= 47) {
            pontosKit = 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15);
        } else if (kit >= 74 || suplemento >= 38) {
            pontosKit = 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15);
        } else if (kit >= 47 || suplemento >= 24) {
            pontosKit = 2500 + ((kit - 47) * 30) + ((suplemento - 24) * 15);
        } else if (kit >= 19 || suplemento >= 9) {
            pontosKit = 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15);
        } else {
            let limiteKit = calcularLimiteMinimo(19);
            let limiteSuplemento = calcularLimiteMinimo(9);
            if (kit < limiteKit && suplemento < limiteSuplemento) {
                pontosKit = 0;
            }
        }
    }

    soma = soma + pontosKit;

    // sangue
    let sangue = Number(document.getElementById("sangue").value);

    if (equipe == "Laranja") {
        if (sangue >= 49) {
            pontosSangue = (2500 + (sangue - 49) * 20);
        } else {
            pontosSangue = sangue * 20;
        }
    } else if (equipe == "Preta") {
        if (sangue >= 52) {
            pontosSangue = 2500 + (sangue - 52) * 20;
        } else {
            pontosSangue = sangue * 20;
        }
    } else if (equipe == "Roxa") {
        if (sangue >= 51) {
            pontosSangue = 2500 + (sangue - 51) * 20;
        } else {
            pontosSangue = sangue * 20;
        }
    } else if (equipe == "Verde") {
        if (sangue >= 44) {
            pontosSangue = 2500 + (sangue - 44) * 200;
        } else {
            pontosSangue = sangue * 20;
        }
    } else if (equipe == "Vermelha") {
        if (sangue >= 47) {
            pontosSangue = 2500 + (sangue - 47) * 200;
        } else {
            pontosSangue = sangue * 20;
        }
    }

    // soma o sangue
    soma = soma + pontosSangue;

    // devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = `Pontos: ${soma.toFixed(2)}`;
}








