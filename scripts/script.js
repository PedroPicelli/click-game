let titulo = window.document.getElementById('titulo') // pego o local do titulo
let cursor = window.document.getElementById('cursor') // pego o local do cursor
let vc = window.document.querySelector('h1#vezesClicadas') // pego o local que fala quantas clicadas
let ponto = 0 // reseto a quantia de pontos
let adp = 1 // seleciono a quantia de passo dos pontos
cursor.addEventListener('mouseover', mouseDentro)
cursor.addEventListener('mouseout', mouseFora)
cursor.addEventListener('click', clique)

function definir() {
    let num = Number(window.document.getElementById('num').value)
    adp = num
}

function arredondar(quantia, redondo) {
    str = String(quantia / redondo)
    let ldp = false
    for(let c = 0; c < str.length; c++) {
        if(str[c] === '.') {
            ldp = c
            console.log(ldp)
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


function mouseDentro() {
    cursor.style.width = '200px'
}

function clique() {
    cursor.style.width = '190px'
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
        cursor.style.width = '200px'
    }, 250)
}

function mouseFora() {
    cursor.style.width = '180px'
    setTimeout(function() {
        if(cursor.style.width == '200px') {
            cursor.style.width = '180px'
        }
    }, 250)
}
