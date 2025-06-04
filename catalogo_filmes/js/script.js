//DOM

const form = document.querySelector('.forme');
const pesquisar = document.querySelector('#pesquisar')
const key = '1e17129e'
const lista = document.querySelector('.lista')

//Eventos
form.onsubmit = (ev) =>{
    ev.preventDefault();
    const pesquisar = ev.target.pesquisar.value;

    if(pesquisar == ""){
        alert('Preencha o campo!')
        return
    }
}

fetch(`https://www.omdbapi.com/?apikey=${key}&s=${pesquisar}&lang=pt_br`).then(result => result.json()) .then(json => console.log(json), carregaLista(json));


function carregaLista(json){
    lista.innerHTML = "";
    json.Search.forEach(element => {
        console.log(element)
        const li = document.createElement('li');
        li.textContent = element.Title;
        lista.appendChild(li);
    });
}



//Funções


