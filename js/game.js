/* Criando a lógica para redimensionar a tela */

var altura = 0
var largura =0

function ajustaTela() {
    altura = window.innerHeight
    largura =  window.innerWidth
    console.log(altura,largura)
}
ajustaTela()

// Criando posições randomincas

var posicaoY = Math.floor(Math.random() * altura) - 90
var posicaoX = Math.floor(Math.random() * largura) - 90

posicaoY = posicaoY < 0 ? 0 : posicaoY
posicaoX = posicaoX < 0 ? 0 : posicaoX

console.log(posicaoY,posicaoX)

// Criando elemneto html atrvés do DOM.

var pernilongo = document.createElement('img')
pernilongo.src = 'img/pernilongo.png'
pernilongo.className = tamanhoAleatorio()
pernilongo.style.left = posicaoX + 'px'
pernilongo.style.top = posicaoY + 'px'
pernilongo.style.position = 'absolute'

document.body.appendChild(pernilongo)

// Função para criar tamanhos randomincos

function tamanhoAleatorio() {
    var classes = Math.floor(Math.random() * 3)
    
    switch(classes) {
        case 0:
            return 'pernilongo-tamanho1'

        case 1:
            return 'pernilongo-tamanho2'

        case 2:
            return 'pernilongo-tamanho3'

    }

}