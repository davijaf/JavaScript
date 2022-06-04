
// Meu desenvolvimento
function myFunction(id) {
    if (document.getElementById("botao").textContent === 'Dark Mode') {
        document.getElementById("myBd").style.backgroundColor = "grey" 
        id.innerHTML = "Light Mode"; 
        document.getElementById("page-title").style.color = 'white';
        document.getElementById("page-title").textContent = 'Dark Mode On'
    }
    else if (document.getElementById("botao").textContent === 'Light Mode') {
        document.getElementById("myBd").style.backgroundColor = "lightblue" 
        id.innerHTML = "Dark Mode"; 
        document.getElementById("page-title").textContent = 'Light Mode On'
        document.getElementById("page-title").style.color = 'black';
    }
}

//Exemplo do curso
function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    button2.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if(button.classList.contains(darkModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " On";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " On";
    return;
    
}


const darkModeClass = 'dark-mode';
const button = document.getElementById('botao_ref');
const button2 = document.getElementById('botao');
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
//const footer = document.getElementsByTagName('footer')[0];

//button.addEventListener('click', changeMode)
