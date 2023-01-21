var $ = document.querySelector.bind(document);

var pedra = $('#pedra');
    papel = $('#papel'),
    tesoura = $('#tesoura'),
    aviso = $('.aviso'),
    pc = $('#pc'),
    placar = $('#placar'),
    joga = $('.botao__jogar'),
    resete = $('.botao__reset'),

    audio = new Audio('./music/jokenpo.mp3'),
    soundRock = new Audio('./music/broken.mp3'),
    soundPappers = new Audio('./music/pappers.mp3'),
    soundSissors = new Audio('./music/sissors.mp3'),
    soundLose = new Audio('./music/lose.mp3');


function jogar() {
  if (pedra.checked == false && papel.checked == false && tesoura.checked == false) {
    aviso.style.cssText =
    'color: red;' +
    'background-color: yellow;' +
    'font-size: 20px'
    aviso.innerHTML = 'Selecione uma opção.';
  } else {
    var sorteio = Math.floor(Math.random() * 3);
    switch (sorteio) {
      case 0:
        pc.src = './img/pcpedra.png';
        break;
      case 1:
        pc.src = './img/pcpapel.png';
        break;
      case 2:
        pc.src = './img/pctesoura.png';
        break;
    }
    if ((pedra.checked && sorteio == 0) || (papel.checked && sorteio == 1) || (tesoura.checked && sorteio ==2)) {

      placar.innerHTML = '<<<<<< Empate >>>>>>';

    } else if ((pedra.checked && sorteio == 2) || (papel.checked && sorteio == 0) || (tesoura.checked && sorteio == 1)) {

      placar.innerHTML = '<<<<<< Voce venceu!!!! 😁😁😁😁>>>>>>';
      pontosDoJogador()
    } else {
      placar.innerHTML = '<<<<<< Voce perdeu 😭😭😭😭 >>>>>>';
      soundLose.play();
      pontosDoComputador();
    }
  }

  
function soundPedra() {
  if(pedra.checked && sorteio == 2) {
    soundRock.play()
  }
}soundPedra()

function soundPapel() {
  if(papel.checked && sorteio == 0)
    soundPappers.play()
}soundPapel()

function soundTesoura() {
  if(tesoura.checked && sorteio == 1)
    soundSissors.play()
}soundTesoura()


}
joga.addEventListener('click', jogar);

function resetar() {
 pc.src = './img/computador.png';
 placar.innerHTML = '';
 aviso.innerHTML = '';
 
}

resete.addEventListener('click', resetar);

pedra.addEventListener('click', resetar);
papel.addEventListener('click', resetar);
tesoura.addEventListener('click', resetar);
var countJogador = 0;
var countComputador = 0;

function pontosDoJogador() {
  countJogador++
  pontosJogador.innerHTML = countJogador;
}
function pontosDoComputador() {
  countComputador++
  pontosComputador.innerHTML = countComputador;
}







//audio.play();