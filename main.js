var pedra = document.getElementById('pedra');
var papel = document.getElementById('papel');
var tesoura = document.getElementById('tesoura');
var aviso = document.querySelector('.aviso');
var pc = document.querySelector('#pc');
var placar = document.querySelector('#placar');


function jogar() {
  if (pedra.checked == false && papel.checked == false && tesoura.checked == false) {
    aviso.innerHTML = 'Selecione uma opção';
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
    if ((pedra.checked == true && sorteio == 0) || (papel.checked == true && sorteio == 1) || (tesoura.checked == true && sorteio ==2)) {

      placar.innerHTML = '<<<<<< Empate >>>>>>';

    } else if ((pedra.checked == true && sorteio == 2) || (papel.checked == true && sorteio == 0) || (tesoura.checked == true && sorteio == 1)) {

      placar.innerHTML = '<<<<<< Voce venceu!!!! 😁😁😁😁>>>>>>';

    } else {
      placar.innerHTML = '<<<<<< Voce perdeu ☹️☹️☹️☹️ >>>>>>';
    }
  }
}
function resetar() {
 pc.src = './img/computador.png';
 placar.innerHTML = '';
 aviso.innerHTML = '';
}