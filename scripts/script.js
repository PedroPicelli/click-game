let titulo = window.document.getElementById('titulo') // pego o local do titulo
let cursordiv = window.document.getElementById('cursor-div') // pego o local do cursor
let cursor = window.document.getElementById('cursor')
let vc = window.document.querySelector('h1#vezesClicadas') // pego o local que fala quantas clicadas
let date = new Date()
let dia = date.getDate()
let mes = date.getMonth()
let ponto = 0 // reseto a quantia de pontos
let adp = 1 // seleciono a quantia de passo dos pontos
let natal = false
cursordiv.addEventListener('mouseover', mouseDentro)
cursordiv.addEventListener('mouseout', mouseFora)
cursordiv.addEventListener('click', clique)

if(dia > 15 && mes == 11 && dia < 31 && mes == 11) { // Vê se é natal
    natal = true
    let adc = window.document.getElementById('mouse') // pega a div de baixo
    let dc = window.document.getElementById('cursor-div')
    var toca = window.document.createElement('img')
    toca.setAttribute('src', 'imagens/toca-papai-noel.png')
    adc.style.background = '#9f2010 url("imagens/neve.png") repeat center top scroll'
    adc.style.backgroundSize = 'cover'
    adc.style.animation = 'animacao-neve 7s infinite linear'
    toca.style.width = '230px'
    toca.style.position = 'absolute'
    toca.style.top = '130px'
    dc.appendChild(toca)
    console.log('Feliz Natal!!!') // Escreve no console: Feliz Natal!!!
}

function arredondar(quantia, redondo) {
    let str = String(quantia / redondo) //Cria uma var como a string do valor
    let ldp = false
    for(let c = 0; c < str.length; c++) { // Procura o local do ponto
        if(str[c] === '.') {
            ldp = c
        }
    }

    let ret = ''
    if(ldp == 1 || ldp == 2 || ldp == 3) { // Vejo se tem ponto
        if(str[ldp + 2] != 0 && str[ldp + 2] != undefined) { // Vejo se a segunda casa depois do ponto é diferente de 0
            for(let c = 0; c <= str.indexOf(str[ldp]) + 2; c++) {
                ret += str[c]
            }
            console.log(str)
        } else if(str[ldp + 1] != 0 && str[ldp + 1] != undefined) { // Vejo se a primeira casa depois do ponto é diferente de 0
            for(let c = 0; c <= str.indexOf(str[ldp]) + 1; c++) {
                ret += str[c]
            }
        } else { // Falo que vai retornar só antes do ponto
            for(let c = 0; c < str.indexOf(str[ldp]); c++) {
                ret += str[c]
                console.log('tyer')
            }
        }

    } else {
        ret = str
        console.log('a')
    }
    return ret
}


function mouseDentro() { // Aumenta o tamanho do mouse quando o cursor entra
    if(natal === true) {
        toca.style.width = '250px'
    }
    cursor.style.width = '200px'
}

function clique() {
    if(natal === true) {
        toca.style.width = '240px'
        setTimeout(function() {
            toca.style.width = '250px'
        }, 250)
    }
    cursor.style.width = '190px' // diminui o tamanho do mouse quando o mouse clica
    ponto += adp
    if(ponto >= 1000 && ponto < 1000000) { // Vejo em qual casa tem que arredondar
        vc.innerText = `${arredondar(ponto, 1000)}Mil clicadas`
        titulo.innerText = `${arredondar(ponto, 1000)} - Mouse Clicker`
    } else if(ponto >= 1000000 && ponto < 1000000000) {
        vc.innerText = `${arredondar(ponto, 1000000)}M clicadas`
        titulo.innerText = `${arredondar(ponto, 1000000)} - Mouse Clicker`
    } else if(ponto >= 1000000000 && ponto < 1000000000000) {
        vc.innerText = `${arredondar(ponto, 1000000000)}B clicadas`
        titulo.innerText = `${arredondar(ponto, 1000000000)} - Mouse Clicker`
    } else {
        vc.innerText = `${ponto} clicadas`
        titulo.innerText = `${ponto} - Mouse Clicker`
    }
    let count = 1
    setTimeout(function() {
        cursor.style.width = '200px' // Aumenta o tamanho do mouse depois de 25milessimos
    }, 250)
}

function mouseFora() { // Diminui o tamanho do mouse quando o cursor sai.
    if(natal === true) {
        toca.style.width = '230px'
        setTimeout(function() {
            if(toca.style.width == '250px') {
                toca.style.width = '230'
            }
        }, 250)
    }
    cursor.style.width = '180px'
    setTimeout(function() {
        if(cursor.style.width == '200px') {
            cursor.style.width = '180px'
        }
    }, 250)
}
