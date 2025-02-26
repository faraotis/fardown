let menu = document.querySelector('#mobile-menu-open')
let abrir = document.querySelector('#mobile-menu')
let fechar = document.querySelector('#close')

function AbrirMenu() {
    menu.style.display = 'block'
    abrir.style.display = 'none'
    fechar.style.display = 'block'
}

function FecharMenu() {
    menu.style.display = 'none'
    abrir.style.display = 'flex'
    fechar.style.display = 'none'
}

// colors
var body = document.getElementsByTagName('body')[0]
var imgsRedes = document.querySelector('.imgs-redes')
var cont = 0
var totalPaletas = 7 // Quantidade de paletas

function ColorChange() {
    cont += 1
    if (cont > totalPaletas) {
        cont = 1
    }
    if(cont == 5) {
        body.classList.add("paleta" + Number(cont + 1))
        body.classList.remove("paleta" + cont)
        imgsRedes.style.backgroundColor = '#0095F6'
    } if(cont != 5) {
        body.classList.add("paleta" + Number(cont + 1))
        body.classList.remove("paleta" + cont)
        imgsRedes.style.backgroundColor = 'transparent'
    }
}

var acBack = document.querySelector('#InputBack')
var acHead = document.querySelector('#InputHead')
var acIcon = document.querySelector('#InputIcon')
var acText = document.querySelector('#InputText')

var newColors = ['--cor0: acBack.value;', '--cor1: acHead.value;', '--cor2: acIcon.value;', '--cor3: acText.value;']


function AddColor() {

    // acBack
    // acHead
    // acIcon
    // acText

    body.style.color = acBack.value

    console.log(InputBack.value, InputHead.value, InputIcon.value, InputText.value, newColors)

    //acBack
    //acHead
    //acIcon
    //acText
}
