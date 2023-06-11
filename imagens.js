//variáveis das imagens
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

//variáveis dos sons


function preload(){
  imagemDaEstrada = loadImage('imagens/estrada.png');
  imagemDoAtor = loadImage('imagens/ator-1.png');
  imagemCarro1 = loadImage ('imagens/carro-1.png');
  imagemCarro2 = loadImage ('imagens/carro-2.png'); 
  imagemCarro3 = loadImage ('imagens/carro-3.png');
  somDaTrilha = loadSound("Sons/trilha.mp3");
  somDaColisao = loadSound("Sons/colidiu.mp3");
  somDoPonto = loadSound("Sons/pontos.wav");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro1, imagemCarro3];
}
