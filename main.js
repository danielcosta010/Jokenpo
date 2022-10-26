var pedra = document.querySelector('#pedra');
var papel = document.querySelector('#papel');
var tesoura = document.querySelector('#tesoura');
var aviso = document.querySelector('.aviso');
var pc = document.querySelector('#pc');
var placar = document.querySelector('#placar');
var joga = document.querySelector('.botao__jogar');
var resete = document.querySelector('.botao__reset');
var audio = new Audio('./music/jokenpo.mp3');


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
     
    } else {
      placar.innerHTML = '<<<<<< Voce perdeu ☹️☹️☹️☹️ >>>>>>';
    }
  }
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

audio.play();