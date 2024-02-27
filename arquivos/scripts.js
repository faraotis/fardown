let divMenu = document.querySelector('#menu')
let navMenu = document.querySelector('nav')
var cont = 1

function openMenu() {
    cont++
    navMenu.style.transitionDuration = '0.7s'
    if(cont%2 == 0) {
        navMenu.style.transform = 'translate(calc(100vw - 220px), 0%)'
    } else {
        navMenu.style.transform = 'translate(calc(100vw - 220px), -100%)'
    }
}

//HORA
var display = document.querySelector('#displayHora')
var data = new Date()
var agoraHor = data.getHours()

if (agoraHor < 12) {
    // DIA
    display.innerHTML = 'Volte sempre e tenha um bom dia!'
} else if (agoraHor < 18) {
    // TARDE
    display.innerHTML = 'Volte sempre e tenha uma boa tarde!'
} else {
    // NOITE
    display.innerHTML = 'Volte sempre e tenha uma boa noite!'
}