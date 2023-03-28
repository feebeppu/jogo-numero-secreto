const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

//Math.random é uma função do JS que gera números aleatórios de 0 até 1
//multiplicamos por 100 para o número ir até 100, mas poderia ser *10, *1000, até o número que queremos chegar
//parseInt para deixar o número inteiro, sem virgulas
//somamos +1 para incluir o último valor que queremos, se não o Math.random não inclui ele
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor

