function calcular() {
    let soma = 0;

    const getVal = (id) => Number(document.getElementById(id).value);

    const equipe = document.getElementById("equipe").value;

    soma += getVal("acaosocial");
    soma += getVal("homenagem");
    soma += 2 * getVal("leite");
    soma += 5 * getVal("arroz");
    soma += 1 * getVal("arroz1");
    soma += 2 * getVal("feijao");
    soma += 1 * getVal("feijao1");
    soma += 0.5 * getVal("macarrao");
    soma += 1 * getVal("oleo");

    const kit = getVal("kit");
    const suplemento = getVal("suplemento");
    const sangue = getVal("sangue");

    let pontosKit = 0;
    let pontosSangue = 0;

    const faixasKit = {
        "Laranja": [ [97, 49, 5000], [78, 39, 4000], [49, 25, 2500], [19, 10, 1000] ],
        "Preta":   [ [103, 52, 5000], [82, 42, 4000], [52, 26, 2500], [21, 10, 1000] ],
        "Roxa":    [ [102, 51, 5000], [82, 41, 4000], [51, 26, 2500], [20, 10, 1000] ],
        "Verde":   [ [88, 44, 5000], [70, 35, 4000], [44, 22, 2500], [18, 9, 1000] ],
        "Vermelha":[ [93, 47, 5000], [74, 38, 4000], [47, 24, 2500], [19, 9, 1000] ],
    };

    const faixas = faixasKit[equipe];
    for (let [kitBase, supBase, basePts] of faixas) {
        if (kit >= kitBase && suplemento >= supBase) {
            const extraKit = kit - kitBase;
            const extraSup = suplemento - supBase;
            const kitBonus = basePts + (extraKit * (basePts === 1000 ? 21 : 30)) + (extraSup * 15);
            pontosKit = kitBonus;
            break;
        }
    }

    // Sangue
    const sangueMetas = {
        "Laranja": 49,
        "Preta": 52,
        "Roxa": 51,
        "Verde": 44,
        "Vermelha": 47
    };

    const metaSangue = sangueMetas[equipe];
    if (sangue >= metaSangue) {
        const multiplicador = equipe === "Verde" || equipe === "Vermelha" ? 200 : 20;
        pontosSangue = 2500 + (sangue - metaSangue) * multiplicador;
    } else {
        pontosSangue = sangue * 20;
    }

    soma += pontosKit + pontosSangue;

    // Exibe o total
    document.getElementById("soma").innerHTML = `Pontos: ${soma.toFixed(2)}`;
}
