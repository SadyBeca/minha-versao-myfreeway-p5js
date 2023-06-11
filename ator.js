// variáveis ator

let xAtor = 100;
let yAtor = 373;
let diametroAtor = 25;
let colisao = false;

let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, diametroAtor, diametroAtor);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (verificaPosicaoAtor()){
      yAtor += 3;
    }
    }
}

function verificaColisaoAtorCarro(){
  //colisao = collideRectCircle(xrect, yrect, comp, alt, xcirc, ycirc, diam);
  for (i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, diametroAtor);
    if (colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (verificaPonto()){
      meusPontos -=1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 367;
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function mostraPontos(){
  text(meusPontos, width / 5, 25);
  textSize(25);
  fill(255, 204, 0);
  textAlign(RIGHT);
}

function verificaPonto(){
  return meusPontos > 0;
}

function verificaPosicaoAtor(){
  return yAtor <= 373;
}
  
