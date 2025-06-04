//DOM
const form = document.querySelector('.forme');
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
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${pesquisar}&lang=pt_br`)
    .then(resultado => resultado.json())
    .then(json =>  carregaLista(json));

}

//Funções
    function carregaLista(json){
    lista.innerHTML = "";
    
    if (json.Response == 'False'){
        alert('Nenhum filme foi encontrado')
        return
    }    
    
    
    json.Search.forEach(element => {
        console.log(element)

        let item = document.createElement('div');
        item.classList.add('item');

        item.innerHTML = `<img src = '${element.Poster}'/> <h2>${element.Title}</h2> <br> <p>Ano de lançamento:${element.Year}</p>`

        lista.appendChild(item)
    });


}



