//DOM 
const inpcidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const icone = document.querySelector('#icone')
const previsao = document.querySelector('.texto-previsao')
const key = 'ce1ee74af1698dfa5aee9de34f2823bf'

//Eventos
botao.addEventListener('click', buscar_cidade)

// Funções
async function buscar_cidade(){
    procurar_cidade = inpcidade.value

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${procurar_cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)

    cidade.textContent = `Tempo em ${dados.name}`
    temperatura.textContent = `${(dados.main.temp).toFixed(1)}°C`
    previsao.textContent = `${dados.weather[0].description}`
    icone.src = `//openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}