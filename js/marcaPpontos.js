let pontosJogador = document.querySelector('.pontos__jogador');
let pontosComputador = document.querySelector('.pontos__computador')

var countJogador = 0,
    countComputador = 0;

function pontosDoJogador() {
  countJogador++
  pontosJogador.innerHTML = countJogador;
}
function pontosDoComputador() {
  countComputador++
  pontosComputador.innerHTML = countComputador;
}

function resetaPontos() {
  countJogador = 0;
  countComputador = 0;
  pontosJogador.innerHTML = 0;
  pontosComputador.innerHTML = 0;
}

resete.addEventListener('click',  resetaPontos);