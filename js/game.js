/* Criando a lógica para redimensionar a tela */
    var altura = 0
    var largura =0
    var hearts = 1
    var tempo = 15

    criaPernilongoTempo = 1500

    var nivel = window.location.search
   
    nivel = nivel.replace('?','')

    if(nivel === 'iniciante') {
        criaPernilongoTempo = 1500

    } else if(nivel === 'intermediario') {
        criaPernilongoTempo = 1000

    } else if(nivel === 'experiente') {
        criaPernilongoTempo = 750

    }

    function ajustaTela() {
        altura = window.innerHeight
        largura =  window.innerWidth
    }

    ajustaTela()

function posicaoRandomica() {
    
    //remover o pernilongo anterior (caso ele existir)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        
        if(hearts > 3) {
            window.location.href = 'gameover.html'
        }else {
            
            document.getElementById('heart' + hearts).src = 'img/coracao_vazio.png'
            hearts++
        }
    }

    
    // Criando posições randomincas
    
    var posicaoY = Math.floor(Math.random() * altura) - 90
    var posicaoX = Math.floor(Math.random() * largura) - 90
    
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    
    console.log(posicaoY,posicaoX)
    
    // Criando elemneto html atrvés do DOM.
    
    var pernilongo = document.createElement('img')
    pernilongo.src = 'img/pernilongo.png'
    pernilongo.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    pernilongo.style.left = posicaoX + 'px'
    pernilongo.style.top = posicaoY + 'px'
    pernilongo.style.position = 'absolute'
    pernilongo.id = 'mosquito'
    
    // função para remover o pernilongo
    pernilongo.onclick = function() {
        this.remove()
    }
    
    document.body.appendChild(pernilongo)

}

  // variável que vai receber o tempo

  var cronometro = setInterval(function() {

    tempo --

    if(tempo < 0) {
        window.location.href = 'the-end.html'
    }else{

        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

// Função para criar tamanhos randomincos do penilongo

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

//criando lados aleatórios do pernilongo

function ladoAleatorio() {
    var classes = Math.floor(Math.random() * 2)
    
    switch(classes) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
        }
    }


    
            
        
