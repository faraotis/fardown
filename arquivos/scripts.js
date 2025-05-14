let divMenu = document.querySelector('#menu')
let navMenu = document.querySelector('nav')
var cont = 1
const inputSearch = document.getElementById('search')

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


//PESQUISAR

inputSearch.addEventListener('input', (event) => {
    const value = formatString(event.target.value)

    const items = document.querySelectorAll('.items .item')
    const noResults = document.getElementById('no_results')

    let hasResults = false

    items.forEach(item => {
        const itemTitle = item.querySelector('.item-title').textContent

        if(formatString(itemTitle).indexOf(value) !== -1) {
            item.style.display = 'flex'

            hasResults = true
        } else {
            item.style.display = 'none'
        }
    })

    if (hasResults) {
        noResults.style.display = 'none'
    } else {
        noResults.style.display = 'block'
    }
})

function formatString(value) {
    return value
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
}