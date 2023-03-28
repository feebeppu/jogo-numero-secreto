function verificaChute(chute) {
    // usamos o +chute, uma forma de transformar a string em número, apenas em tentar somar
    const numero = +chute

    //Number.isNan usamos para verificar se o que foi falado não é um número
    //usamos o return, para que se o chute for inválido, ele não execute mais nada dessas funções
    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor Inválido</div>"
        return
       
    }

    if (chuteMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor Inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns! Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `

    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function chuteMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

// evento para ao clicarmos no botão, buscando pelo target.id do botão, ele vai atualizar a página
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})