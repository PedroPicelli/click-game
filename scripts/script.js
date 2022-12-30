

let titulo = window.document.getElementById('titulo') // pego o local do titulo
let cursordiv = window.document.getElementById('cursor-div') // pego o local do cursor
let cursor = window.document.getElementById('cursor')
let vc = window.document.querySelector('h1#vezesClicadas') // pego o local que fala quantas clicadas
let clicadaPorClique = window.document.getElementById('cpc') // Pega o texto que mostra as clicadas por clique
let date = new Date()
let dia = date.getDate()
let mes = date.getMonth()
let ponto = 0 // reseto a quantia de pontos
let adp = 1 // seleciono a quantia de passo dos pontos
let natal = false
let mul = 1
cursordiv.addEventListener('mouseover', mouseDentro) // Adiciona eventos
cursordiv.addEventListener('mouseout', mouseFora)
cursordiv.addEventListener('click', clique)


if(dia >= 15 && mes == 11 && dia <= 31 && mes == 11) { // Vê se é natal
    natal = true
    let adc = window.document.getElementById('mouse') // pega a div de baixo
    let dc = window.document.getElementById('cursor-div') // Pega a div do cursor
    var touca = window.document.createElement('img') // Cria uma imagem
    touca.setAttribute('src', 'imagens/touca-papai-noel.png') // Pega a imagem
    adc.style.background = '#9f2010 url("imagens/neve.png") repeat center top scroll' // coloca uma imagem de fundo
    adc.style.backgroundSize = 'cover'
    adc.style.animation = 'animacao-neve 7s infinite linear' // Coloca a animação de fundo
    touca.style.width = '230px' // define o tamanho da img
    touca.style.position = 'absolute' 
    touca.style.top = '130px' // define a posição da img
    dc.appendChild(touca) // Coloca a img como o filho
    console.log('Feliz Natal!!!') // Escreve no console: Feliz Natal!!!
}

function mudarTexto(mostrar=true) {
    if(mostrar === true) {
        if(ponto >= 1000 && ponto < 1000000) { // Vejo em qual casa tem que arredondar
            vc.innerText = `${arredondar(ponto, 1000)}Mil clicadas`
            titulo.innerText = `${arredondar(ponto, 1000)}Mil - Mouse Clicker`
        } else if(ponto >= 1000000 && ponto < 1000000000) {
            vc.innerText = `${arredondar(ponto, 1000000)}M clicadas`
            titulo.innerText = `${arredondar(ponto, 1000000)}M - Mouse Clicker`
        } else if(ponto >= 1000000000 && ponto < 1000000000000) {
            vc.innerText = `${arredondar(ponto, 1000000000)}B clicadas`
            titulo.innerText = `${arredondar(ponto, 1000000000)}B - Mouse Clicker`
        } else {
            vc.innerText = `${ponto} clicadas`
            titulo.innerText = `${ponto} - Mouse Clicker`
        }
    } else {
        if(adp >= 1000 && adp < 1000000) { // Vejo em qual casa tem que arredondar
            clicadaPorClique.innerText = `${arredondar(adp, 1000)}Mil clicadas por clique`
        } else if(adp >= 1000000 && adp < 1000000000) {
            clicadaPorClique.innerText = `${arredondar(adp, 1000000)}M clicadas por clique`
        } else if(adp >= 1000000000 && adp < 1000000000000) {
            clicadaPorClique.innerText = `${arredondar(adp, 1000000000)}B clicadas por clique`
        } else {
            clicadaPorClique.innerText = `${adp} clicadas por clique`
        }
    }
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
        } else if(str[ldp + 1] != 0 && str[ldp + 1] != undefined) { // Vejo se a primeira casa depois do ponto é diferente de 0
            for(let c = 0; c <= str.indexOf(str[ldp]) + 1; c++) {
                ret += str[c]
            }
        } else { // Falo que vai retornar só antes do ponto
            for(let c = 0; c < str.indexOf(str[ldp]); c++) {
                ret += str[c]
            }
        }

    } else {
        ret = str
    }
    return ret
}


function mouseDentro() { // Aumenta o tamanho do mouse quando o cursor entra
    if(natal === true) {
        touca.style.width = '250px'
    }
    cursor.style.width = '200px'
}

function clique() {
    if(natal === true) {
        touca.style.width = '240px'
        setTimeout(function() {
            touca.style.width = '250px'
        }, 250)
    }
    cursor.style.width = '190px' // diminui o tamanho do mouse quando o mouse clica
    ponto += adp
    
    mudarTexto(true)
    mudarTexto(false)

    let count = 1
    setTimeout(function() {
        cursor.style.width = '200px' // Aumenta o tamanho do mouse depois de 25milessimos
    }, 250)
}

function mouseFora() { // Diminui o tamanho do mouse quando o cursor sai.
    if(natal === true) {
        touca.style.width = '230px'
        setTimeout(function() {
            if(touca.style.width == '250px') {
                touca.style.width = '230px'
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

// Inicio do codigo de melhorias

let parar1 = false
let parar2 = false
let parar3 = false
let parar4 = false
let parar5 = false

let melho1ponto5 = window.document.getElementById('melho1ponto5')
let melho2 = window.document.getElementById('melho2')
let melho4 = window.document.getElementById('melho4')
let melho4ponto5 = window.document.getElementById('melho4ponto5')
let melho5 = window.document.getElementById('melho5')

let btclicou = false

function detectando() {
    if(parar1 === false) { // Detecta se a primeira melhoria já apareceu
        if(ponto >= 150) {
            melho1ponto5.style.display = 'inline' // faz aparecer a primeira melhoria
            parar1 = true
        }
    }
    if(ponto >= 300) { // Vê se tem igual ou mais de 300 pontos
        melho1ponto5.style.filter = 'none' // Faz sumir o filtro cinza
    } else {
        melho1ponto5.style.filter = 'grayscale(100%)' // Faz aparecer o filtro
    }

    if(parar2 === false) {
        if(ponto >= 500) {
            melho2.style.display = 'inline'
            parar2 = true
        }
    }
    if(ponto >= 1000) {
        melho2.style.filter = 'none'
    } else {
        melho2.style.filter = 'grayscale(100%)'
    }

    if(parar3 === false) {
        if(ponto >= 3000) {
            melho4.style.display = 'inline'
            parar3 = true
        }
    }
    if(ponto >= 10000) {
        melho4.style.filter = 'none'
    } else {
        melho4.style.filter = 'grayscale(100%)'
    }

    if(parar4 === false) {
        if(ponto >= 37500) {
            melho4ponto5.style.display = 'inline'
            parar4 = true
        }
    }
    if(ponto >= 75000) {
        melho4ponto5.style.filter = 'none'
    } else {
        melho4ponto5.style.filter = 'grayscale(100%)'
    }

    if(parar5 === false) {
        if(ponto >= 500000) {
            melho5.style.display = 'inline'
            parar5 = true
        }
    }
    if(ponto >= 1000000) {
        melho5.style.filter = 'none'
    } else {
        melho5.style.filter = 'grayscale(100%)'
    }

    setTimeout(function (){ // Faz a detectação infinita
        detectando()
    }, 1)
}

function multi(mul, btc, valor) {
    let botaoclicado = window.document.getElementsByName('melho')[btc]
    if(btclicou === false) {
        if(ponto >= valor) {
            ponto -= valor
            botaoclicado.style.width = '25px'
            botaoclicado.style.margin = '12px 0 0 12px'
            setTimeout(function() {
                botaoclicado.style.width = '35px'
                botaoclicado.style.margin = '10px 0 0 10px'
            }, 250)
            setTimeout(function() {
                botaoclicado.style.display = 'none'
                btclicou = false
            }, 300)
            adp *= mul
            mudarTexto(mostrar=true)
            mudarTexto(mostrar=false)
            btclicou = true
        }
    }
}

function descricao(btc) {
    let caixa = window.document.getElementsByName('caixa')[btc]
    let triangulo = window.document.getElementsByName('trian')[btc]
    caixa.style.display = 'block'
    triangulo.style.display = 'block'
    setTimeout(function() {
        caixa.style.transition = '1s'
        triangulo.style.transition = '1s'

        caixa.style.opacity = '100'
        triangulo.style.opacity = '100'
    }, 1)
    setTimeout(function() {
        caixa.style.display = 'block'
        triangulo.style.display = 'block'
        setTimeout(function() {
            caixa.style.transition = '1s'
            triangulo.style.transition = '1s'

            caixa.style.opacity = '100'
            triangulo.style.opacity = '100'
        }, 1)
    }, 250)
}

function descricaoSaida(btc) {
    let caixa = window.document.getElementsByName('caixa')[btc]
    let triangulo = window.document.getElementsByName('trian')[btc]
    caixa.style.transition = 'opacity .5s'
    triangulo.style.transition = 'opacity .5s'
    
    caixa.style.opacity = '0'
    triangulo.style.opacity = '0'
    setTimeout(function() {
        caixa.style.display = 'none'
        triangulo.style.display = 'none'
    }, 250)
}

detectando()

// Fim do codigo de melhorias
