// variáveis dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 146, 210, 260, 315];
let velocidadeCarros = [2, 2.5, 3.3, 2.8, 3.7, 2.3];
let comprimentoCarro = 50
let alturaCarro = 40

function mostraCarro(){
  for (let i=0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }  
}

function movimentaCarro(){
  for (let i= 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoIncialdoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (oCarroPassouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function oCarroPassouTodaTela(xCarro){
  return xCarro < -50;
}
