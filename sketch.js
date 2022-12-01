function setup() {
  createCanvas(400, 400);
}
//variaveis da bolinha
let xbol=200;
let ybol=200;
let diametro=50;
let velocidadeX=1;
let velocidadeY=1;
//variaveis da raquete
function draw() {
  background(0);
  //desenha a bolinha
  circle(xbol, ybol, diametro);
  //movimenta a bolinha
  xbol +=velocidadeX;
  ybol+=velocidadeY;
  //faz a bolinha voltar quando toca na direita
  if (xbol+diametro/2>=400) {
  velocidadeX*=-1;
  }
  //faz a bolinha voltar quando toca na esqueda
  if (xbol-diametro/2<=10){
  velocidadeX*=-1;
}
  rect (0,150,25,100)
  

 }
