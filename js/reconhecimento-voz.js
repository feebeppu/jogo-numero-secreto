const elementoChute = document.querySelector("#chute")
// no início do nosso código, incluímos estas linhas para alimentar os objetos corretos no Chrome e quaisquer implementações futuras, e nosso projeto continue funcionando
// usamos o window. para que assim que a aplicação começar a funcionar, a aplicação de reconhecimento de voz vai ser ativa
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// define uma instância de reconhecimento de fala para controlar o reconhecimento de nosso aplicativo.
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener("result", onSpeak)

// usamos o "e" de evento, tudo o que a gente fala fica salvo em algum evento, por isso usamos o evento como parâmetro
function onSpeak(e) {
    // buscamos dentro do evento, o results e duas arrays na posição 0, e dentro dela temos o transcript(que transcreve o que falamos), então buscamos ele também
    const chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

//usamos esse evento para que quando nossa função acabar, pega e continua o reconhecimento de voz
recognition.addEventListener("end", () => {
    recognition.start()
})