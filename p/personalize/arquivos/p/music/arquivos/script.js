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
var totalPaletas = 6 // Quantidade de paletas

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

var inputBackground = document.querySelector('#InputBack')
var inputHeader = document.querySelector('#InputHead')
var inputIcone = document.querySelector('#InputIcon')
var inputTexto = document.querySelector('#InputText')

var ColorHeader = document.getElementsByTagName('header')[0]
var ColorBody = document.getElementsByTagName('body')[0]
var ColorFooter = document.getElementsByTagName('footer')[0]
var ColorH3 = document.querySelectorAll('.h3-name')
var ColorTitle = document.querySelectorAll('.logo')
var ColorMenu = document.querySelector('.color')
var contH3 = 0
var contTitle = 0
var contMenu = 0

function AddColor() {
    ColorBody.style.backgroundColor = inputBackground.value
    ColorHeader.style.backgroundColor = inputHeader.value
    ColorFooter.style.backgroundColor = inputHeader.value
    
    while (contH3 < ColorH3.length) {
        ColorH3[contH3].style.color = inputIcone.value
        contH3++
    }
    while (contTitle < ColorTitle.length) {
        ColorTitle[contTitle].style.color = inputIcone.value
        contTitle++
    }
    while (contMenu < ColorMenu.length) {
        ColorMenu[contMenu].style.color = inputIcone.value
        contMenu++
    }
}


// var divLingCode = document.querySelectorAll('.divLingCode')
// while (contDiv < divLingCode.length) {
//     divLingCodeBack[contDiv].style.backgroundColor = AzulCodeBack
//     divLingCodeBack[contDiv].style.borderLeft = '4px solid ' + AzulFundo
//     divLingCode[contDiv].style.color = cinzaFundoCode
//     divLingCode[contDiv].style.backgroundColor = AzulDivCode
//     contDiv++
// }


//acBack
//acHead
//acIcon
//acText
