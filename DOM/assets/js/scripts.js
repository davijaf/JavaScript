//document.getElementById('titulo');
//document.getElementsByTagName('li');
//document.getElementsByClassName('textos');
//document.querySelectorAll('.primeira-classe');

//document.createElement(element)
//document.removeChild(element)
//document.appendChild(element)
//document.replaceChild(new, old)

//const meuElemento = document.getElementById('meu-elemento')

//meuElemento.classList.add('novo-estilo');

//meuElemento.classList.remove('classe');

//meuElemento.classList.toggle('dark-mode')

//document.getElementsByTagName('li').style.color = 'blue'

function myFunction(id) {
    if (document.getElementById("botao").textContent === 'Dark Mode') {
        document.getElementById("myBd").style.backgroundColor = "grey" 
        id.innerHTML = "Light Mode"; 
    }
    else if (document.getElementById("botao").textContent === 'Light Mode') {
        document.getElementById("myBd").style.backgroundColor = "lightblue" 
        id.innerHTML = "Dark Mode"; 
    }
}
