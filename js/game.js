/* Criando a lógica para redimensionar a tela */

var altura = 0
var largura =0

function ajustaTela() {
    altura = window.innerHeight
    largura =  window.innerWidth
    console.log(altura,largura)
}

ajustaTela()