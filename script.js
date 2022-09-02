//lista de objetos
let itens = [
    {
        image: "./assets/img/actions/animewoman.jpg",
        name: "Anime Woman",
        price: 'R$25',
        type: "figure"
    },
    {
        image: "./assets/img/actions/dragonballpersonagem.jpg",
        name: "Goku",
        price: 'R$30',
        type: "figure"
    },
    {
        image: "./assets/img/actions/starwarspersonagem.jpg",
        name: "Yoda",
        price: "R$45",
        type: "figure"
    },
    {
        image: "./assets/img/painting/clock.jpg",
        name: "Clock",
        price: 'R$25',
        type: "frame"
    },
    {
        image: "./assets/img/painting/gamepad.jpg",
        name: "GamePad",
        price: 'R$28',
        type: "frame"
    },
    {
        image: "./assets/img/painting/personagem.jpg",
        name: " Robô",
        price: 'R$68',
        type: "frame"
    }

]

let listFigures = []
let listFrames = []

//função pra separar os tipos de objetos
function separateItens(lista) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].type === "figure") {
            listFigures.push(lista[i])
        } else {
            listFrames.push(lista[i])
        }
    }
}
separateItens(itens)
// console.log(listFigures)
// console.log(listFrames)

//chamar seção
let secaolistFigure = document.getElementsByClassName("figure_action")
let secaolistFrames = document.getElementsByClassName("decorative_frames")
let listaFiguras = document.getElementsByClassName("figure")[0]
let listaFrames = document.getElementsByClassName("frame")[0]

// secaolistFigure.appendChild(listaFiguras)
// secaolistFrames.appendChild(listaFrames)

function criarItensFigures(listaItens) {
    //criando objeto
    let nome = listaItens.name
    let imag = listaItens.image
    let preco = listaItens.price

    //criando tags
    let tagLi = document.createElement('li')
    let tagH3 = document.createElement('h3')
    let tagImg = document.createElement('img')
    let tagSpan = document.createElement('span')
    let figuri = document.createElement('figure')

    //dando valor tags

    tagH3.innerText = nome
    tagImg.src = `${imag}`
    tagImg.alt = nome
    tagSpan.innerText = preco
    figuri.style.backgroundImage= `url(${imag})`

    //referenciar
    listaFiguras.appendChild(tagLi)
    
    tagLi.appendChild(tagImg, tagH3, tagSpan)
    figuri.append(tagImg)
    tagLi.append(figuri, tagH3, tagSpan)
    return tagLi
}
// console.log(criarItensFigures(listFigures))

function criarItensFrames(listaItens) {
    let nome = listaItens.name
    let imag = listaItens.image
    let preco = listaItens.price

    //criando tags
    let tagLi = document.createElement('li')
    let tagH3 = document.createElement('h3')
    let tagImg = document.createElement('img')
    let tagSpan = document.createElement('span')
    let figuri = document.createElement('figure')
    //dando valor tags

    tagH3.innerText = nome
    tagImg.src = `${imag}`
    tagImg.alt = nome
    tagSpan.innerText = preco
    figuri.style.backgroundImage= `url(${imag})`
    //referenciar
    listaFrames.appendChild(tagLi)
    figuri.append(tagImg)
    
    tagLi.append(figuri, tagH3, tagSpan)


    return tagLi
}
// criarItensFrames(listFrames)


function renderizarFigures(lista, referenciarHtml) {
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        let figureAction = lista[i]

        let listaPronta = criarItensFigures(figureAction)

        referenciarHtml.appendChild(listaPronta)
    }
}

renderizarFigures(listFigures, listaFiguras)


function renderizarFrames(lista, referenciarHtml) {
    console.log(lista)
    for (let i = 0; i < lista.length; i++) {
        let figureFrames = lista[i]

        let listaPronta = criarItensFrames(figureFrames)

        referenciarHtml.appendChild(listaPronta)
    }
}

renderizarFrames(listFrames, listaFrames)












