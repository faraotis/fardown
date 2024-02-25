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